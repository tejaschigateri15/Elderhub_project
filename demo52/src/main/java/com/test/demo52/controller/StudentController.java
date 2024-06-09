package com.test.demo52.controller;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import com.test.demo52.Donation;
import com.test.demo52.Elderhub;
import com.test.demo52.Kids;
import com.test.demo52.Student;
import com.test.demo52.dao.Donationdao;
import com.test.demo52.dao.Elderhubdao;
import com.test.demo52.dao.Kidsdao;
import com.test.demo52.dao.Studentdao;
//import com.test.demo52.service.DonationService;
import com.test.demo52.service.ElderhubService;
import com.test.demo52.service.KidsService;
import com.test.demo52.service.StudentService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class StudentController {

        @Autowired
        StudentService studentService;
        @Autowired
        Studentdao studentdao;
        @Autowired
        Elderhubdao Elderhubdao;
        @Autowired
        ElderhubService elderhubService;
        @Autowired
        DonationService donationService;
        @Autowired
        Donationdao donationdao;
        @Autowired
        Kidsdao kidsdao;
        @GetMapping("/hello")
        public String hello(){
            return "hello";
        }

    @PostMapping("/savedetails")
    public ResponseEntity<Elderhub> saveElderDetails(@RequestBody Elderhub elderhub) {
        try {
            System.out.println("StudentController.saveElderDetails()");
            elderhubService.saveElderdetail(
                    elderhub.getName(),
                    elderhub.getDob(),
                    elderhub.getGender(),
                    elderhub.getAddress(),
                    elderhub.getPhoneno(),
                    elderhub.getAadhar(),
                    elderhub.getHealthstatus(),
                    elderhub.getDiet(),
                    elderhub.getEmergency(),
                    elderhub.getImage()
            );
            return ResponseEntity.ok(elderhub); // Send back the same JSON (request body)
        } catch (Exception e) {

            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/getallElder")
    public List<Elderhub> getallElder(){
        return Elderhubdao.findAll();

    }

    @PostMapping("/donation/add")
    public ResponseEntity<Donation> saveDonation(@RequestBody Donation donation) {
        try {
            System.out.println("StudentController.saveDonation()");
            donationService.saveDonation(
                    donation.getName(),
                    donation.getEmail(),
                    donation.getPhoneNo(),
                    donation.getBillingAddress(),
                    donation.getDonationamount()
            );

            return ResponseEntity.ok(donation);
        } catch (Exception e) {

            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/donation/latest")
    public Donation getLatestDonation() {
        return donationdao.findTopByOrderByIdDesc();
    }

    @PostMapping("/savekidsdetails")
    public ResponseEntity<Kids> saveKidsDetails(@RequestBody Kids kids) {
        try{
            kidsdao.save(kids);
            return ResponseEntity.ok(kids);
        }
        catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


    @PostMapping("/create-checkout-session")
    public Map<String, String> createCheckoutSession(@RequestBody Map<String, Object> data) {
        Map<String, String> response = new HashMap<>();
        try {
            String apiKey = "put_your_api_key";
            Stripe.apiKey = apiKey;

            Integer amount = (Integer) data.get("amount"); // Retrieve the amount from the request data

            SessionCreateParams params = SessionCreateParams.builder()
                    .addPaymentMethodType(SessionCreateParams.PaymentMethodType.CARD)
                    .setMode(SessionCreateParams.Mode.PAYMENT)
                    .setSuccessUrl("http://localhost:5173/success")
                    .setCancelUrl("http://localhost:5173/cancel")
                    .addLineItem(
                            SessionCreateParams.LineItem.builder()
                                    .setQuantity(1L)
                                    .setPriceData(
                                            SessionCreateParams.LineItem.PriceData.builder()
                                                    .setCurrency("inr")
                                                    .setUnitAmount(amount.longValue()) // Convert Integer to Long
                                                    .setProductData(
                                                            SessionCreateParams.LineItem.PriceData.ProductData.builder()
                                                                    .setName("Donation")
                                                                    .build())
                                                    .build())
                                    .build())
                    .build();

            Session session = Session.create(params);
            response.put("url", session.getUrl());
        } catch (StripeException e) {
            response.put("error", e.getMessage());
        }
        return response;
    }


}

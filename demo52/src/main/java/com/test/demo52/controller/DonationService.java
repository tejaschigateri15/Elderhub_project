package com.test.demo52.controller;


import com.test.demo52.Donation;
import com.test.demo52.dao.Donationdao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DonationService {
    @Autowired
    Donationdao donationdao;
    public void saveDonation(
            String name,
            String email,
            String phoneno,
            String billingAddress,
            String donationamount
        )
    {
        donationdao.save(new Donation(null,name,email,phoneno,billingAddress,donationamount));
    }
}

package com.test.demo52.service;


import com.test.demo52.Kids;
import com.test.demo52.dao.Kidsdao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class KidsService {

    @Autowired
    Kidsdao kidsdao;

    public void saveKidDetails(
            String name,
            String dob,
            String gender,
            String address,
            String email,
            String phoneno,
            String school,
            String education,
            String Hobbies,
            String image
    ){
        kidsdao.save(new Kids(null,name,dob,gender,address,email,phoneno,school,education,Hobbies,image));
    }


}

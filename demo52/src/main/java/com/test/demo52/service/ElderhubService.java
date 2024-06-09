package com.test.demo52.service;


import com.test.demo52.Elderhub;
import com.test.demo52.dao.Elderhubdao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ElderhubService {
    @Autowired
    Elderhubdao elderhubdao;
    public void saveElderdetail(
            String name,
            String dob,
            String gender,
            String address,
            String phoneno,
            String aadhar,
            String healthstatus,
            String diet,
            String emergency,
            String image
        )
    {
        elderhubdao.save(new Elderhub(null,name,dob,gender,address,phoneno,aadhar,healthstatus,diet,emergency,image));
    }
}

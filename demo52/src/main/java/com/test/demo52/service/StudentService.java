package com.test.demo52.service;

import com.test.demo52.Student;
import com.test.demo52.dao.Studentdao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService {

    @Autowired
    Studentdao studentdao;

    public void saveStudent(String name,String email , String gender) {
        System.out.println("StudentService.saveStudent()");
        studentdao.save(new Student(null,name,email,gender));
    }

//    public void save

}

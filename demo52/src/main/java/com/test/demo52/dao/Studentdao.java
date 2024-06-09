package com.test.demo52.dao;

import com.test.demo52.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Studentdao extends JpaRepository<Student, Integer> {

    List<Student> findByName(String name);

    void deleteByName(String name);
}

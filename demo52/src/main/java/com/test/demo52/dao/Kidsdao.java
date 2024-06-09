package com.test.demo52.dao;

import com.test.demo52.Kids;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Kidsdao extends JpaRepository<Kids,Integer> {

}

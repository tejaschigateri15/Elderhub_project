package com.test.demo52.dao;

import com.test.demo52.Donation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface Donationdao extends JpaRepository<Donation, Integer>{

    Donation findTopByOrderByIdDesc();
}

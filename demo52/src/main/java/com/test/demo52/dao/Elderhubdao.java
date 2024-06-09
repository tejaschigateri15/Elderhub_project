package com.test.demo52.dao;

import com.test.demo52.Elderhub;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Elderhubdao extends JpaRepository<Elderhub, Integer>{
}

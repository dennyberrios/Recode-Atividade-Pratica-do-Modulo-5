package com.example.demo.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Hospedagem;

public interface HospedagemRepository extends JpaRepository<Hospedagem, Long> {

}

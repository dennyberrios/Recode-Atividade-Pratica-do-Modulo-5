package com.example.demo.entities;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "hospedagem")
public class Hospedagem implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "nome_hotel", length = 40, nullable = false)
	private String nomeHotel;
	
	@Column(name = "endereco", length = 150, nullable = false)
	private String endereco;
	
	@Column(name = "valor", nullable = false)
	private Float valor;
	
	@Column(name = "checkin" , nullable = false)
	@DateTimeFormat(pattern = "dd/MM/yyyy")
	private LocalDate checkin;
	
	@Column(name = "checkout", nullable = false)
	@DateTimeFormat(pattern = "dd/MM/yyyy")
	private LocalDate checkout;
	
	@ManyToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "cliente_fk")
	private Cliente cliente;

	public Hospedagem() {
		super();
	}

	public Hospedagem(Long id, String nomeHotel, String endereco, Float valor, LocalDate checkin, LocalDate checkout) {
		super();
		this.id = id;
		this.nomeHotel = nomeHotel;
		this.endereco = endereco;
		this.valor = valor;
		this.checkin = checkin;
		this.checkout = checkout;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNomeHotel() {
		return nomeHotel;
	}

	public void setNomeHotel(String nomeHotel) {
		this.nomeHotel = nomeHotel;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public Float getValor() {
		return valor;
	}

	public void setValor(Float valor) {
		this.valor = valor;
	}

	public LocalDate getCheckin() {
		return checkin;
	}

	public void setCheckin(LocalDate checkin) {
		this.checkin = checkin;
	}

	public LocalDate getCheckout() {
		return checkout;
	}

	public void setCheckout(LocalDate checkout) {
		this.checkout = checkout;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}
	
	

}

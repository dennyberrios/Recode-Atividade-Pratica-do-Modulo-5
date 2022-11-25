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
import org.springframework.lang.NonNull;



@Entity
@Table(name = "destino")
public class Destino implements Serializable{
	private static final long serialVersionUID = 1L;
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "nome_destino", length = 40, nullable = false)
	private String nomeDestino;
	
	@Column(name = "cidade", length = 40, nullable = false)
	private String cidade;
	
	@Column(name = "estado", length = 25, nullable = false)
	private String estado;
	
	@Column(name = "dt_ida",nullable = false)
	@DateTimeFormat(pattern = "dd/MM/yyyy")
	private LocalDate dtIda;
	
	@Column(name = "dt_volta", nullable = false)
	@NonNull
	@DateTimeFormat(pattern = "dd/MM/yyyy")
	private LocalDate dtVolta;
	
	@Column(name = "valor", nullable = false)
	private Float valor;
	
	@ManyToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "cliente_fk")
	private Cliente cliente;

	public Destino() {
		super();
	}

	public Destino(Long id, String nomeDestino, String cidade, String estado, LocalDate dtIda, LocalDate dtVolta,
			Float valor) {
		super();
		this.id = id;
		this.nomeDestino = nomeDestino;
		this.cidade = cidade;
		this.estado = estado;
		this.dtIda = dtIda;
		this.dtVolta = dtVolta;
		this.valor = valor;
	}
	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNomeDestino() {
		return nomeDestino;
	}

	public void setNomeDestino(String nomeDestino) {
		this.nomeDestino = nomeDestino;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public LocalDate getDtIda() {
		return dtIda;
	}

	public void setDtIda(LocalDate dtIda) {
		this.dtIda = dtIda;
	}

	public LocalDate getDtVolta() {
		return dtVolta;
	}

	public void setDtVolta(LocalDate dtVolta) {
		this.dtVolta = dtVolta;
	}

	public Float getValor() {
		return valor;
	}

	public void setValor(Float valor) {
		this.valor = valor;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

}

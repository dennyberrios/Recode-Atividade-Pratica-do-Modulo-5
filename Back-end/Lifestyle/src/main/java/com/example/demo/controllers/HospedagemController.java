package com.example.demo.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.ResourceNotFoundException;
import com.example.demo.entities.Cliente;
import com.example.demo.entities.Hospedagem;
import com.example.demo.repositorys.ClienteRepository;
import com.example.demo.repositorys.HospedagemRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class HospedagemController {
	
	@Autowired
	private HospedagemRepository hospedagemRepository;
	
	@Autowired 
	private ClienteRepository clienteRepository;
	
	//GET all
	@GetMapping("/hospedagens")
	public List<Hospedagem> getAllHospedagens(){
		return hospedagemRepository.findAll();
	}
	
	//GET by Id
	@GetMapping("/hospedagens/{id}")
	public ResponseEntity<Hospedagem> getHospedagemById(@PathVariable Long id){
		Hospedagem hospedagem = hospedagemRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("hospedagem inexistente com id "));
				return ResponseEntity.ok(hospedagem);
	}
	
	//CREATE
			@PostMapping("/hospedagens")
			public Hospedagem createHospedagem(@RequestBody Hospedagem hospedagem) {
				Cliente cliente = clienteRepository.findById(hospedagem.getCliente().getId()).get();
				hospedagem.setCliente(cliente);
				return hospedagemRepository.save(hospedagem);
			}	
	
	//UPDATE
		@PutMapping("/hospedagens/{id}")
		public ResponseEntity<Hospedagem> updateHospedagem(@PathVariable Long id, @RequestBody Hospedagem hospedagensDetails){
			
			Hospedagem hospedagem = hospedagemRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Hospedagem inexistente com id "));
			Cliente cliente = clienteRepository.findById(hospedagensDetails.getCliente().getId()).get();
			
			hospedagem.setNomeHotel(hospedagensDetails.getNomeHotel());
			hospedagem.setEndereco(hospedagensDetails.getEndereco());
			hospedagem.setValor(hospedagensDetails.getValor());
			hospedagem.setCheckin(hospedagensDetails.getCheckin());
			hospedagem.setCheckout(hospedagensDetails.getCheckout());
			
			hospedagem.setCliente(cliente);
			Hospedagem newHospedagem = hospedagemRepository.save(hospedagem);
			
			return ResponseEntity.ok(newHospedagem);
		}
	
	//DELETE
	@DeleteMapping("/hospedagens/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteHospedagem (@PathVariable Long id) {
		Hospedagem hospedagem = hospedagemRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("hospedagem inexistente com id "));
		
		hospedagemRepository.delete(hospedagem);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}

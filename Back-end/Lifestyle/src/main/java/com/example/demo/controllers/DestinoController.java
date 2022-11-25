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
import com.example.demo.entities.Destino;
import com.example.demo.repositorys.ClienteRepository;
import com.example.demo.repositorys.DestinoRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class DestinoController {
	
	@Autowired
	private DestinoRepository destinoRepository;
	
	@Autowired 
	private ClienteRepository clienteRepository;
	
	//GET all
		@GetMapping("/destinos")
		public List<Destino> getAllDestinos(){
			return destinoRepository.findAll();
		}
	
		
	//GET by Id
	@GetMapping("/destinos/{id}")
	public ResponseEntity<Destino> getDestinoById(@PathVariable Long id){
		Destino destino = destinoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("destino inexistente com id "));
				return ResponseEntity.ok(destino);
	}
	
	//CREATE
		@PostMapping("/destinos")
		public Destino createDestino(@RequestBody Destino destino) {
			Cliente cliente = clienteRepository.findById(destino.getCliente().getId()).get();
			destino.setCliente(cliente);
			
			return destinoRepository.save(destino);
		}
	
	//UPDATE
		@PutMapping("/destinos/{id}")
		public ResponseEntity<Destino> updateDestino(@PathVariable Long id, @RequestBody Destino destinosDetails){
			
			Destino destino = destinoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Destino inexistente com id "));
			Cliente cliente = clienteRepository.findById(destinosDetails.getCliente().getId()).get();
			
			destino.setNomeDestino(destinosDetails.getNomeDestino());
			destino.setCidade(destinosDetails.getCidade());
			destino.setEstado(destinosDetails.getEstado());
			destino.setDtIda(destinosDetails.getDtIda());
			destino.setDtVolta(destinosDetails.getDtVolta());
			destino.setValor(destinosDetails.getValor());
			destino.setCliente(cliente);
			
			Destino newCliente = destinoRepository.save(destino);
			
			return ResponseEntity.ok(newCliente);
		}
	
	//DELETE
	@DeleteMapping("/destinos/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteDestino (@PathVariable Long id) {
		Destino destino = destinoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("destino inexistente com id "));
		
		destinoRepository.delete(destino);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
		
		
	}
}

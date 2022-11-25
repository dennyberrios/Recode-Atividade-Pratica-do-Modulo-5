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
import com.example.demo.repositorys.ClienteRepository;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class ClienteController {

	@Autowired
	private ClienteRepository clienteRepository;
	
	//GET all
	@GetMapping("/clientes")
	public List<Cliente> getAllCliente(){
		return clienteRepository.findAll();
	}
	
	//GET by Id
	@GetMapping("/clientes/{id}")
	public ResponseEntity<Cliente> getJogoById(@PathVariable Long id){
		Cliente cliente = clienteRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Cliente inexistente com id "));
				return ResponseEntity.ok(cliente);
	}
	
	//CREATE
	@PostMapping("/clientes")
	public Cliente createJogo(@RequestBody Cliente cliente) {
		return clienteRepository.save(cliente);
	}
	
	
	//UPDATE
		@PutMapping("/clientes/{id}")
		public ResponseEntity<Cliente> updateCliente(@PathVariable Long id, @RequestBody Cliente clientesDetails){
			
			Cliente cliente = clienteRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Cliente inexistente com id "));
			
			cliente.setNome(clientesDetails.getNome());
			cliente.setSobrenome(clientesDetails.getSobrenome());
			cliente.setCpf(clientesDetails.getCpf());
			cliente.setRua(clientesDetails.getRua());
			cliente.setBairro(clientesDetails.getBairro());
			cliente.setCidade(clientesDetails.getCidade());
			cliente.setEstado(clientesDetails.getEstado());
			cliente.setTelefone(clientesDetails.getTelefone());
			cliente.setEmail(clientesDetails.getEmail());
			cliente.setSenha(clientesDetails.getSenha());
			
			Cliente newCliente = clienteRepository.save(cliente);
			
			return ResponseEntity.ok(newCliente);
		}
	
	//DELETE
	@DeleteMapping("/clientes/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteJogo (@PathVariable Long id) {
		Cliente cliente = clienteRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("cliente inexistente com id "));
		
		clienteRepository.delete(cliente);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
		
	}
	
}

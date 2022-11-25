import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Api from '../../Api/Api'

export default function Create() {
	const [nome, setNome] = useState('')
	const [sobrenome, setSobrenome] = useState('')
	const [email, setEmail] = useState('')
	const [cpf, setCpf] = useState('')
	const [rua, setRua] = useState('')
	const [bairro, setBairro] = useState('')
	const [cidade, setCidade] = useState('')
	const [estado, setEstado] = useState('')
	const [telefone, setTelefone] = useState('')
	const { id } = useParams()
	const navigate = useNavigate()

	const criarOuEditarCliente = (e) => {
		e.preventDefault()

		const cliente = { nome, sobrenome, email, cpf, rua, bairro, cidade, estado, telefone }

		if (id) {
			Api.put('/clientes/' + id, cliente).then((response) => {
				navigate('/Clientes')
			})
		} else {
			Api.post('/clientes/', cliente).then((response) => {
				navigate('/Destinos-Create')
			})
		}
	}

	useEffect(() => {
		function getClienteById() {
			if (id) {
				Api.get(`/clientes/${id}`)
					.then((response) => {
						setNome(response.data.nome)
						setSobrenome(response.data.sobrenome)
						setEmail(response.data.email)
						setCpf(response.data.cpf)
						setRua(response.data.rua)
						setBairro(response.data.bairro)
						setCidade(response.data.cidade)
						setEstado(response.data.estado)
						setTelefone(response.data.telefone)
					})
					.catch((error) => {
						console.log(error)
					})
			}
		}
		getClienteById()
	}, [id])

	return (
		<div className="container py-3">
			<form>
				<fieldset>
					<legend>
						<h2 className="text-center">{id ? 'Editar' : 'Cadastro de Cliente'}</h2>
					</legend>
					<div className="mb-3">
						<div className="align">
							<input
								type="text"
								id="Nome"
								className="form-control s"
								placeholder="Nome"
								value={nome}
								onChange={(e) => setNome(e.target.value)}
							/>
						</div>
					</div>
					<div className="mb-3">
						<div className="align">
							<input
								type="text"
								id="Sobrenome"
								className="form-control s"
								placeholder="Sobrenome"
								value={sobrenome}
								onChange={(e) => setSobrenome(e.target.value)}
							/>
						</div>
					</div>
					<div className="mb-3">
						<div className="align">
							<input
								type="email"
								id="Email"
								className="form-control s"
								placeholder="Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
					</div>
					<div className="mb-3">
						<div className="align">
							<input
								type="text"
								id="Cpf"
								className="form-control s"
								placeholder="Cpf"
								value={cpf}
								onChange={(e) => setCpf(e.target.value)}
							/>
						</div>
					</div>
					<div className="mb-3">
						<div className="align">
							<input
								type="text"
								id="Rua"
								className="form-control s"
								placeholder="Rua"
								value={rua}
								onChange={(e) => setRua(e.target.value)}
							/>
						</div>
					</div>
					<div className="mb-3">
						<div className="align">
							<input
								type="text"
								id="Bairro"
								className="form-control s"
								placeholder="Bairro"
								value={bairro}
								onChange={(e) => setBairro(e.target.value)}
							/>
						</div>
					</div>
					<div className="mb-3">
						<div className="align">
							<input
								type="text"
								id="Cidade"
								className="form-control s"
								placeholder="Cidade"
								value={cidade}
								onChange={(e) => setCidade(e.target.value)}
							/>
						</div>
					</div>
					<div className="mb-3">
						<div className="align">
							<input
								type="text"
								id="Estado"
								className="form-control s"
								placeholder="Estado"
								value={estado}
								onChange={(e) => setEstado(e.target.value)}
							/>
						</div>
					</div>
					<div className="mb-3">
						<div className="align">
							<input
								type="text"
								id="Telefone"
								className="form-control s"
								placeholder="Telefone"
								value={telefone}
								onChange={(e) => setTelefone(e.target.value)}
							/>
						</div>
					</div>
					<div className="d-flex justify-content-center">
						<button
							type="submit"
							className="btn btn-primary"
							onClick={(e) => criarOuEditarCliente(e)}
						>
							Enviar
						</button>
						<Link
							to="/Clientes"
							className="btn btn-danger"
							style={{ marginLeft: '10px' }}
						>
							Cancelar
						</Link>
					</div>
				</fieldset>
			</form>
		</div>
	)
}
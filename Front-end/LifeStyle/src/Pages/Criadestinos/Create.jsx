import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Api from '../../Api/Api'

export default function Create() {
	const [nomeDestino, setNomeDestino] = useState('')
	const [cidade, setCidade] = useState('')
	const [estado, setEstado] = useState('')
	const [dtIda, setDtIda] = useState('')
	const [dtVolta, setDtVolta] = useState('0')
	const [valor, setValor] = useState(0)
	const [cliente, setCliente] = useState({ id: 0 })
	const [Clientes, setClientes] = useState([])
	const { id } = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		Api.get('/clientes')
			.then((response) => {
				setClientes(response.data)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [])

	const criarOuEditarDestino = (e) => {
		e.preventDefault()

		const destino = { nomeDestino, cidade, estado, dtIda, dtVolta, valor, cliente }

		if (id) {
			Api.put('/destinos/' + id, destino).then((response) => {
				navigate('/Destinos')
			})
		} else {
			Api.post('/destinos/', destino).then((response) => {
				navigate('/Hospedagens-Create')
			})
		}
	}

	useEffect(() => {
		function getDestinoById() {
			if (id) {
				Api.get(`/destinos/${id}`)
					.then((response) => {
						setNomeDestino(response.data.nomeDestino)
						setCidade(response.data.cidade)
						setEstado(response.data.estado)
						setDtIda(response.data.dtIda)
						setDtVolta(response.data.dtVolta)
						setValor(response.data.valor)
						setCliente({
							id: response.data.cliente.id,
						})
					})
					.catch((error) => {
						console.log(error)
					})
			}
		}

		getDestinoById()
	}, [id])

    function readSelected (){
		let inputDestino = document.querySelector('#destino').value;
		
		if(inputDestino == "Brasil"){
			setValor(6450)
			setCidade("Porto Seguro") 
			setEstado("Bahia")
		}else if(inputDestino == "América Latina (inclui México)"){
			setValor(15850)
			setCidade("Cancún") 
			setEstado("Quintana Roo")
		}else if(inputDestino == "Europa"){
			setValor(6450)
			setCidade("Sorrento") 
			setEstado("Nápoles")
		}else if(inputDestino == "Ásia"){
			setValor(4200)
			setCidade("New Road") 
			setEstado("Bangkok")
		}else if(inputDestino == "África do Sul"){
			setValor(8000)
			setCidade("Kruger National Park ") 
			setEstado("Kruger National Park. African")
		}else if(inputDestino == "Oceania"){
			setValor(1780)
			setCidade("Auki") 
			setEstado("Ilhas Salomão")
		}else if(inputDestino == "Estados Unidos e Canadá"){
			setValor(3000)
			setCidade("Lauderdale-By-The-Sea") 
			setEstado("Flórida")
		}else{
			setValor(0)
			setCidade("") 
			setEstado("")
		}
	}

	return (
		<div className="container py-3">
			<form>
				<fieldset>
					<legend>
						<h2 className="text-center">{id ? 'Editar' : 'Cadastro de Destino'}</h2>
					</legend>
					<div className='form-group mb-3'>
						<div className='align'>
							<select className="form-select s" id="destino" aria-label="Default select example"
								value={nomeDestino}
								onChange={(e) => setNomeDestino(e.target.value)+readSelected()}
								required>
								<option value="DEFAULT">Selecione seu destino</option>
								<option value='Brasil'>Brasil</option>
								<option value='Estados Unidos e Canadá'>Estados Uniddos e Canadá</option>
								<option value="América Latina (inclui México)">América Latina (inclui México)</option>
								<option value="Europa">Europa</option>
								<option value="Ásia">Ásia</option>
								<option value="África do Sul">África do Sul</option>
								<option value="Oceania">Oceania</option>
							</select>
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
								type="date"
								id="Dtida"
								className="form-control s"
								value={dtIda}
								onChange={(e) => setDtIda(e.target.value)}
							/>
						</div>
					</div>
					<div className="mb-3">
						<div className="align">
							<input
								type="date"
								id="DtVolta"
								className="form-control s"
								value={dtVolta}
								onChange={(e) => setDtVolta(e.target.value)}
							/>
						</div>
					</div>
					<div className="mb-3">
						<div className="align">
							<input
								type="text"
								id="Valor"
								className="form-control s"
								placeholder="Valor"
								value={valor}
								onChange={(e) => setValor(e.target.value)}
							/>
						</div>
					</div>
					<div className="form-group mb-3">
						<div className="align">
							<select
								id="ClienteId_cliente"
								name="ClienteId_cliente"
								className="form-select s"
								onChange={(e) =>
									setCliente({ id: Number.parseInt(e.target.value) })
								}
							>
								<option value="DEFAULT">
									{id ? cliente.nome : 'Adicione um cliente ao destino'}
								</option>
								{Clientes.map((cliente) => (
									<option key={cliente.id} value={cliente.id}>
										{cliente.nome}
									</option>
								))}
							</select>
						</div>
					</div>
					<div className="d-grid-sm d-flex justify-content-center">
						<button
							type="submit"
							className="btn btn-primary"
							onClick={(e) => criarOuEditarDestino(e)}
						>
							Enviar
						</button>
						<Link
							to="/Destinos"
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

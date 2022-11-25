import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Api from '../../Api/Api';

export default function Create() {
	const [nomeHotel, setNomeHotel] = useState('')
	const [endereco, setEndereco] = useState('')
	const [valor, setValor] = useState('')
	const [checkin, setCheckin] = useState('')
	const [checkout, setCheckout] = useState('')
	const [cliente, setCliente] = useState({ id: 0 })
	const [clientes, setClientes] = useState([])
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

	const criarOuEditarHospedagem = (e) => {
		e.preventDefault()

		const hospedagem = { nomeHotel, endereco, valor, checkin, checkout, cliente }

		if (id) {
			Api.put('/hospedagens/' + id, hospedagem).then((response) => {
				navigate('/Hospedagens')
			})
		} else {
			Api.post('/hospedagens/', hospedagem).then((response) => {
				navigate('/')
				alert(`Sua viagem foi marcada para o dia ${checkin.split('-').reverse().join('/')}, agradecemos a sua preferência.`)
			})
		}
	}

	useEffect(() => {
		function getHospedagemById() {
			if (id) {
				Api.get(`/hospedagens/${id}`)
					.then((response) => {
						setNomeHotel(response.data.nomeHotel)
						setEndereco(response.data.endereco)
						setValor(response.data.valor)
						setCheckin(response.data.checkin)
						setCheckout(response.data.checkout)
						setCliente({
							id: response.data.cliente.id,
						})
					})
					.catch((error) => {
						console.log(error)
					})
			}
		}

		getHospedagemById()
	}, [id])


	function readSelected() {
		let inputDestino = document.querySelector('#destino').value;

		if (inputDestino == "Hotel Terra Brasil") {
			setValor(950)
			setEndereco("Rua do Cajueiro, 5, Porto Seguro, Bahia, Brasi")
		} else if (inputDestino == "Hotel Hyatt Zilara Cancun") {
			setValor(1850)
			setEndereco("Blvd. Kukulcan KM 11.5, HZ, Cancun, México, 77500")
		} else if (inputDestino == "Hotel Lorelei Londres") {
			setValor(1450)
			setEndereco("Via A. Califano 2/4, Sorrento, Província de Nápoles, Campania, Itália")
		} else if (inputDestino == "Hotel Shangri-La Bangkok") {
			setValor(1200)
			setEndereco("89 Soi Wat Suan Plu, New Road, Bangcoc, Tailândia")
		} else if (inputDestino == "Hotel Makumu Private Gamo Lodge") {
			setValor(1000)
			setEndereco("6º melhor custo-benefício de 3.060 lugares para se hospedar em: África do Sul")
		} else if (inputDestino == "Solomon Kitano Mendana Hotel") {
			setValor(980)
			setEndereco("HX93+XJF, Mendana Ave, Honiara, Ilhas Salomão")
		} else if (inputDestino == "Hotel High Noon Beach Resort") {
			setValor(1000)
			setEndereco("4424 El Mar Dr, Lauderdale by the Sea, Broward County, Flórida")
		} else {
			setValor(0)
			setEndereco("")
		}
	}

	return (
		<div className="container py-3">
			<form>
				<fieldset>
					<legend>
						<h2 className="text-center">{id ? 'Editar' : 'Cadastro de Hotel'}</h2>
					</legend>
					<div className='form-group mb-3'>
						<div className='align'>
							<select className="form-select s" id="destino" aria-label="Default select example"
								value={nomeHotel}
								onChange={(e) => setNomeHotel(e.target.value) + readSelected()}
								required>
								<option value="DEFAULT">Selecione seu destino</option>
								<option value='Hotel Terra Brasil'>Hotel Terra, Brasil</option>
								<option value='Hotel High Noon Beach Resort'>Hotel High Noon Beach Resort, EUA</option>
								<option value="Hotel Hyatt Zilara Cancun">Hotel Hyatt Zilara Cancun, México</option>
								<option value="Hotel Lorelei Londres">Hotel Lorelei Londres, Europa</option>
								<option value="Hotel Shangri-La Bangkok">Hotel Shangri-La Bangkok, Tailândia</option>
								<option value="Hotel Makumu Private Gamo Lodge">Hotel Makumu Private Gamo Lodge, África do Sul</option>
								<option value="Solomon Kitano Mendana Hotel">Solomon Kitano Mendana Hotel, Ilha de Salomão</option>
							</select>
						</div>
					</div>



					<div className="mb-3">
						<div className="align">
							<input
								type="text"
								id="Endereco"
								className="form-control s"
								placeholder="Endereço"
								value={endereco}
								onChange={(e) => setEndereco(e.target.value)}
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
					<div className="mb-3">
						<div className="align">
							<input
								type="date"
								id="Checkin"
								className="form-control s"
								placeholder="CheckIn"
								value={checkin}
								onChange={(e) => setCheckin(e.target.value)}
							/>
						</div>
					</div>
					<div className="mb-3">
						<div className="align">
							<input
								type="date"
								id="Checkout"
								className="form-control s"
								placeholder="Checkout"
								value={checkout}
								onChange={(e) => setCheckout(e.target.value)}
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
								<option  value="DEFAULT">
									{id ? cliente.nome : 'Adicione um cliente a hospedagem'}
								</option>
								{clientes.map((cliente) => (
									<option key={cliente.id} value={cliente.id} >
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
							onClick={(e) => criarOuEditarHospedagem(e)}
						>
							Enviar
						</button>
						<Link
							to="/Hospedagens"
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

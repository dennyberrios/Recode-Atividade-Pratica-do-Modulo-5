import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Api from '../../Api/Api';
import './clienteCria.css';
import Cabeca from './../../components/CabecaList/List';
import useAuth from "./../../hooks/useAuth";

export default function Index() {

  const { signout } = useAuth();
  const navigate = useNavigate();

  const [clientes, setClientes] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    Api.get('/clientes')
      .then((response) => {
        setClientes(response.data);
        setRedirect(false);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [redirect]);

  function deleteCliente(id) {
    Api.delete(`/clientes/${id}`)
    setRedirect(true);
  }

  return (
    <div className="BoxCliente">
      <Cabeca />
      <div className="BoxCliente">
        <header className="header">
          <h1 className="container">Cadastro Clientes</h1>
        </header>
        <div className="btnList">
          <div value="Sair" onClick={() => [signout(), navigate("/")]} className="BtWidth">
            Sair
          </div>
        </div>
      </div>
      <div className="boxContainer ">
        <div className="tableRes d-flex justify-content-center">
          <div className="max table-hover table-sm table-colors">
            {clientes.map((cliente) => (
              <ul className="ColorTitle text-white tr-hover" key={cliente.id}>
                <div>
                  <li className="titleList">ID:</li>
                  <li className="textColor">{cliente.id}</li>
                </div>
                <div>
                  <li className="titleList">Nome:</li>
                  <li className="textColor">{cliente.nome}</li>
                </div>
                <div>
                  <li className="titleList">Sobrenome:</li>
                  <li className="textColor">{cliente.sobrenome}</li>
                </div>
                <div>
                  <li className="titleList">E-mail:</li>
                  <li className="textColor">{cliente.email}</li>
                </div>
                <div>
                  <li className="titleList">CPF:</li>
                  <li className="textColor">{cliente.cpf}</li>
                </div>
                <div>
                  <li className="titleList">Rua:</li>
                  <li className="textColor">{cliente.rua}</li>
                </div>
                <div>
                  <li className="titleList">Bairro:</li>
                  <li className="textColor">{cliente.bairro}</li>
                </div>
                <div>
                  <li className="titleList">Cidade:</li>
                  <li className="textColor">{cliente.cidade}</li>
                </div>
                <div>
                  <li className="titleList">Estado:</li>
                  <li className="textColor">{cliente.estado}</li>
                </div>
                <div>
                  <li className="titleList">Telefone:</li>
                  <li className="textColor">{cliente.telefone}</li>
                </div>
                <div className="btnEnd">
                  <li className="d-flex justify-content-end">
                    <Link
                      to={`/Clientes-Update/${cliente.id}`}
                      className="btn btn-info"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteCliente(cliente.id)}
                      style={{ marginLeft: "10px" }}
                    >
                      Deletar
                    </button>
                  </li>
                </div>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
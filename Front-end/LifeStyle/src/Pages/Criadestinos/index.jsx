import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Api from '../../Api/Api';
import './destino.css'
import Cabeca from './../../components/CabecaList/List';
import useAuth from "./../../hooks/useAuth";

export default function Index() {

  const { signout } = useAuth();
  const navigate = useNavigate();

  const [destinos, setDestinos] = useState([]);
  const [redirect, setRedirect] = useState(false);


  useEffect(() => {
    Api.get('/destinos')
      .then((response) => {
        setDestinos(response.data);
        setRedirect(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [redirect]);

  return (
    <div>
      <Cabeca />
      <header className="header">
        <h1 className="container">Cadastro Destinos</h1>
      </header>
      <div className="btnList">
        <div value="Sair" onClick={() => [signout(), navigate("/")]} className="BtWidth">
          Sair
        </div>
      </div>
      <div className="boxContainer ">
        <div className="tableRes d-flex justify-content-center">
          <div className="max table-hover table-sm table-colors">
          {destinos.map((destino) => (
              <ul className="ColorTitle text-white tr-hover" key={destino.id}>
                <div>
                  <li className="titleList">ID:</li>
                  <li className="textColor">{destino.id}</li>
                </div>
                <div>
                    <li className="titleList">Nome:</li>
                    <li className="textColor">{destino.cliente.nome}</li>
                  </div>
                  <div>
                    <li className="titleList">Destino:</li>
                    <li className="textColor">{destino.nomeDestino}</li>
                  </div>
                  <div>
                    <li className="titleList">Cidade:</li>
                    <li className="textColor">{destino.cidade}</li>
                  </div>
                  <div>
                    <li className="titleList">Estado:</li>
                    <li className="textColor">{destino.estado}</li>
                  </div>
                  <div>
                    <li className="titleList">Data ida:</li>
                    <li className="textColor">{destino.dtIda.split('-').reverse().join('/')}</li>
                  </div>
                  <div>
                    <li className="titleList">Data volta:</li>
                    <li className="textColor">{destino.dtVolta.split('-').reverse().join('/')}</li>
                  </div>
                  <div>
                    <li className="titleList">Valor:</li>
                    <li className="textColor">{destino.valor}</li>
                  </div>
                <div className="btnEnd">
                  <li className="d-flex justify-content-end">
                    <Link
                      to={`/Destinos-Update/${destino.id}`}
                      className="btn btn-info">
                      Editar
                    </Link>
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
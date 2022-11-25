import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import useAuth from "./../hooks/useAuth";
import Home from './../Pages/Home/Home';
import Sobre from './../Pages/Sobre/Sobre';
import Pormocoes from './../Pages/Pomocoes/Promocoes';
import Destino from './../Pages/Destino/Destino';
import Clientes from "./../Pages/Criaclientes";
import ClientesCreate from "./../Pages/Criaclientes/Create";
import Destinos from "./../Pages/Criadestinos";
import DestinosCreate from "./../Pages/Criadestinos/Create";
import Hospedagens from "./../Pages/Criahospedagens";
import HospedagensCreate from "./../Pages/Criahospedagens/Create";
import Contato from './../Pages/Contato/Contato';
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';
import Signin from "../Pages/Signin/Signin";
import Signup from '../Pages/Signup/Signup';

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <Router>
      <Fragment>
        <Header />
        <Routes>
          <Route exact path="/Clientes" element={<Private Item={Clientes} />} />
          <Route path="/Signin" element={<Signin />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route path="*" element={<Signin />} />
					<Route exact path="/" element={<Home />} />
					<Route path="/Sobre" element={<Sobre />} />
					<Route path="/Promocoes" element={<Pormocoes />} />
					<Route path="/Destino" element={<Destino />} />
					<Route path="/Contato" element={<Contato />} />
					<Route path="/Clientes-Create" element={<ClientesCreate />} />
					<Route path="/Clientes-Update/:id" element={<ClientesCreate />} />
          <Route exact path="/Destinos" element={<Private Item={Destinos} />} />
					<Route path="/Destinos-Create" element={<DestinosCreate />} />
					<Route path="/Destinos-Update/:id" element={<DestinosCreate />} />
          <Route exact path="/Hospedagens" element={<Private Item={Hospedagens} />} />
					<Route path="/Hospedagens-Create" element={<HospedagensCreate />} />
					<Route path="/Hospedagens-Update/:id" element={<HospedagensCreate />} />
        </Routes>
        <Footer />
      </Fragment>
    </Router>
  );
};

export default RoutesApp;

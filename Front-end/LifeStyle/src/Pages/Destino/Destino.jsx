import './Destinostyle.css'
import ParliamentHill from './../../assets/img/destino/ParliamentHill-Ottawa.png';
import FernandoDeNoronha from './../../assets/img/destino/Fernando-de-Noronha-Pernambuco.png';
import CerroCatedralBariloche from './../../assets/img/destino/Cerro-Catedral-Bariloche.png';
import KremlinDeMoscou from './../../assets/img/destino/Kremlin-de-Moscou.png';
import SãoFranciscoCalifórnia from './../../assets/img/destino/São-Francisco-Califórnia.png';
import BusanCoreiaDoSul from './../../assets/img/destino/Busan-Coreia-do-Sul.png';
import ShanghaiTower from './../../assets/img/destino/Shanghai-Tower.png';
import Himeji from './../../assets/img/destino/HIMEJI-CASTLE-HYOGO.png';
import BasílicaDeSantaSofia from './../../assets/img/destino/Basílica-de-Santa-Sofia.png';
import { Link } from 'react-router-dom';


export default function Destino() {
    return (
        <main className='mainDestino'>

            <section className='secaoDestino'>
                <div className="barraDeNavegacao">
                    <div className="d-flex pesquisaDestino">
                        <input className="form-control auto" type="search" placeholder="Pesquisa" aria-label="Search"/>
                            <button type="button" className="btn" id="botao-pesquisa">Pesquisa</button>
                    </div>
                    <div className="titleDestino">
                        <h2>Escolha os melhores<br/> destinos aqui!</h2>
                    </div>
                </div>
            </section>

            <section className='secaoDestino'>
                <div className="card-pais">
                    <div className="foto">
                        <img className="img-lugares" src={ParliamentHill} alt=""/>
                    </div>
                    <div className="conteudo">
                        <h5>Parliament Hill – Ottawa, Canadá</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ullam nobis ipsam et ipsum
                            dignissimos
                            optio quisquam inventore repudiandae nesciunt delectus natus.</p>
                    </div>
                    <div className="bt">
                        <Link to="/Clientes-Create" className="btn" id="botao" href="#" role="button">Reservar agora</Link>
                    </div>
                </div>
                <div className="card-pais">
                    <div className="foto">
                        <img className="img-lugares" src={FernandoDeNoronha} alt=""/>
                    </div>
                    <div className="conteudo">
                        <h5>Fernando de Noronha, Pernambuco, Brasil</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ullam nobis ipsam et ipsum
                            dignissimos
                            optio quisquam inventore repudiandae nesciunt delectus natus.</p>
                    </div>
                    <div className="bt">
                        <Link to="/Clientes-Create" className="btn" id="botao" href="#" role="button">Reservar agora</Link>
                    </div>
                </div>
                <div className="card-pais">
                    <div className="foto">
                        <img className="img-lugares" src={CerroCatedralBariloche} alt=""/>
                    </div>
                    <div className="conteudo">
                        <h5>Cerro Catedral, Bariloche, Argentina</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ullam nobis ipsam et ipsum
                            dignissimos
                            optio quisquam inventore repudiandae nesciunt delectus natus.</p>
                    </div>
                    <div className="bt">
                        <Link to="/Clientes-Create" className="btn" id="botao" href="#" role="button">Reservar agora</Link>
                    </div>
                </div>
                <div className="card-pais">
                    <div className="foto">
                        <img className="img-lugares" src={KremlinDeMoscou} alt=""/>
                    </div>
                    <div className="conteudo">
                        <h5>Kremlin de Moscou, Russia</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ullam nobis ipsam et ipsum
                            dignissimos
                            optio quisquam inventore repudiandae nesciunt delectus natus Lorem ipsum dolor, sit amet consectetur.</p>
                    </div>

                    <div className="bt">
                        <Link to="/Clientes-Create" className="btn" id="botao" href="#" role="button">Reservar agora</Link>
                    </div>
                </div>
                <div className="card-pais">
                    <div className="foto">
                        <img className="img-lugares" src={SãoFranciscoCalifórnia} alt=""/>
                    </div>
                    <div className="conteudo">
                        <h5>São Francisco, Califórnia, USA</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ullam nobis ipsam et ipsum
                            dignissimos
                            optio quisquam inventore repudiandae nesciunt delectus natus.</p>
                    </div>
                    <div className="bt">
                        <Link to="/Clientes-Create" className="btn" id="botao" href="#" role="button">Reservar agora</Link>
                    </div>
                </div>
                <div className="card-pais">
                    <div className="foto">
                        <img className="img-lugares" src={BusanCoreiaDoSul} alt=""/>
                    </div>
                    <div className="conteudo">
                        <h5>Busan, Coreia do Sul</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ullam nobis ipsam et ipsum
                            dignissimos
                            optio quisquam inventore repudiandae nesciunt delectus natus Lorem ipsum dolor, sit amet consectetur.</p>
                    </div>
                    <div className="bt">
                        <Link to="/Clientes-Create" className="btn" id="botao" href="#" role="button">Reservar agora</Link>
                    </div>
                </div>
                <div className="card-pais">
                    <div className="foto">
                        <img className="img-lugares" src={ShanghaiTower} alt=""/>
                    </div>
                    <div className="conteudo">
                        <h5>Shanghai Tower, China</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ullam nobis ipsam et ipsum
                            dignissimos
                            optio quisquam inventore repudiandae nesciunt delectus natus Lorem ipsum dolor, sit amet consectetur.</p>
                    </div>
                    <div className="bt">
                        <Link to="/Clientes-Create" className="btn" id="botao" href="#" role="button">Reservar agora</Link>
                    </div>
                </div>
                <div className="card-pais">
                    <div className="foto" >
                        <img className="img-lugares" src={Himeji} alt=""/>
                    </div>
                    <div className="conteudo">
                        <h5>HIMEJI CASTLE, HYOGO, Japão</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ullam nobis ipsam et ipsum
                            dignissimos
                            optio quisquam inventore repudiandae nesciunt delectus natus.</p>
                    </div>
                    <div className="bt">
                        <Link to="/Clientes-Create" className="btn" id="botao" href="#" role="button">Reservar agora</Link>
                    </div>
                </div>
                <div className="card-pais">
                    <div className="foto">
                        <img className="img-lugares" src={BasílicaDeSantaSofia} alt=""/>
                    </div>
                    <div className="conteudo">
                        <h5>Basílica de Santa Sofia, Turquia</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ullam nobis ipsam et ipsum
                            dignissimos
                            optio quisquam inventore repudiandae nesciunt delectus natus.</p>
                    </div>
                    <div className="bt">
                        <Link to="/Clientes-Create" className="btn" id="botao" href="#" role="button">Reservar agora</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
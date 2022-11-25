import './Promocoesstyled.css';
import HotelAfrica from './../../assets/img/promoções/hotel-africa.png';
import HotelMexico from './../../assets/img/promoções/hotel-mexico.png';
import HotelLondres from './../../assets/img/promoções/hotel-londres.png';
import HotelUsa from './../../assets/img/promoções/hotel-usa.png';
import Hoteltailandia from './../../assets/img/promoções/hotel-tailandia.png';
import HotelBrasil from './../../assets/img/promoções/hotel-brasil.png';
import HotelRepublicaTcheca from './../../assets/img/promoções/hotel-republica-tcheca.png';
import { Link } from 'react-router-dom';

export default function Promocoes() {
    return (
        <main>
            <section className='secaoPromocoes'>
                <div className="title">
                    <h1>Promoções por tempo limitado</h1>
                </div>
                <div className="box">
                    <div>
                        <img className="imgPromo" src={HotelAfrica} alt="" />
                    </div>
                    <div className="item1">
                        <div>
                            <h4>Hotel Makumu Private Gamo Lodge</h4>
                            <p>6º melhor custo-benefício de 3.060 lugares para se hospedar em: África do Sul</p>
                            <p>Wi-fi gratuito | Estacionamento gratuito | Com medidas de segurança.</p>
                        </div>
                        <div className="valor">
                            <p>De: <s>R$10.000,000</s></p>
                            <p>Por: R$8.000,000</p>
                        </div>
                        <div className="bt">
                            <Link to="/Clientes-Create" className="btn" id="botao" role="button">Reservar agora</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="box">
                    <div>
                        <img className="imgPromo" src={HotelMexico} alt="" />
                    </div>
                    <div className="item1">
                        <div>
                            <h4>Hotel Hyatt Zilara Cancun</h4>
                            <p>1º melhor custo-benefício de 3.059 lugares para se hospedar em: México</p>
                            <p>Wi-fi gratuito | Estacionamento gratuito | Com medidas de segurança.</p>
                        </div>
                        <div className="valor">
                            <p>De: <s>R$23.000,000</s></p>
                            <p>Por: R$15.850,000</p>
                        </div>
                        <div className="bt">
                            <Link className="btn" id="botao" to="/Clientes-Create"href="#" role="button">Reservar agora</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="box">
                    <div>
                        <img className="imgPromo" src={HotelLondres} alt="" />
                    </div>
                    <div className="item1">
                        <h4>Hotel Lorelei Londres</h4>
                        <div>
                            <p>Via A. Califano 2/4, Sorrento, Província de Nápoles, Campania, Itália</p>
                            <p>Wi-fi gratuito | Estacionamento gratuito | Com medidas de segurança.</p>
                        </div>
                        <div className="valor">
                            <p>De: <s>R$7.000,000</s></p>
                            <p>Por: R$6.450,000</p>
                        </div>
                        <div className="bt">
                            <Link className="btn" id="botao" to="/Clientes-Create" role="button">Reservar agora</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="box">
                    <div>
                        <img className="imgPromo" src={HotelUsa} alt="" />
                    </div>
                    <div className="item1">
                        <div>
                            <h4>Hotel High Noon Beach Resort</h4>
                            <p>4424 El Mar Dr, Lauderdale by the Sea, Broward County, Flórida</p>
                            <p>Wi-fi gratuito | Estacionamento gratuito | Com medidas de segurança.</p>
                        </div>
                        <div className="valor">
                            <p>De: <s>R$4.000,000</s></p>
                            <p>Por: R$3.000,000</p>
                        </div>
                        <div className="bt">
                            <Link className="btn" id="botao" to="/Clientes-Create" role="button">Reservar agora</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="box">
                    <div>
                        <img className="imgPromo" src={Hoteltailandia} alt="" />
                    </div>
                    <div className="item1">
                        <div>
                            <h4>Hotel Shangri-La Bangkok</h4>
                            <p>89 Soi Wat Suan Plu, New Road, Bangcoc, Tailândia</p>
                            <p>Wi-fi gratuito | Estacionamento gratuito | Com medidas de segurança.</p>
                        </div>
                        <div className="valor">
                            <p>De: <s>R$5.000,000</s></p>
                            <p>Por: R$4.200,000</p>
                        </div>
                        <div className="bt">
                            <Link className="btn" id="botao" to="/Clientes-Create" role="button">Reservar agora</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="box">
                    <div>
                        <img className="imgPromo" src={HotelBrasil} alt="" />
                    </div>
                    <div className="item1">
                        <div>
                            <h4>Hotel Terra Brasil</h4>
                            <p>Rua do Cajueiro, 5, Porto Seguro, Bahia, Brasi</p>
                            <p>Wi-fi gratuito | Estacionamento gratuito | Com medidas de segurança.</p>
                        </div>
                        <div className="valor">
                            <p>De: <s>R$7.000,000</s></p>
                            <p>Por: R$6.450,000</p>
                        </div>
                        <div className="bt">
                            <Link className="btn" id="botao" to="/Clientes-Create" role="button">Reservar agora</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="box">
                    <div>
                        <img className="imgPromo" src={HotelRepublicaTcheca} alt="" />
                    </div>
                    <div className="item1">
                        <div>
                            <h4>Hotel Pod Věží</h4>
                            <p>Mostecká 58/2, Praga, Bohemia, República Tcheca</p>
                            <p>Wi-fi gratuito | Estacionamento gratuito | Com medidas de segurança.</p>
                        </div>
                        <div className="valor">
                            <p>De: <s>R$7.000,000</s></p>
                            <p>Por: R$4.950,000</p>
                        </div>
                        <div className="bt">
                            <Link className="btn" id="botao" to="/Clientes-Create" role="button" >Reservar agora</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
import './homestyle.css'
import PonteGoldenGate from "./../../assets/img/home/Ponte-Golden-Gate.png"
import Recife from "./../../assets/img/home/recife-centro.png"
import MarcoZero from "./../../assets/img/home/marco-zero.png"
import BoaViagem from "./../../assets/img/home/praia-de-boa-viagem.png"
import LienzeSteiermak from "./../../assets/img/home/Lienze-Steiermark-Austria.png"
import Ponte from "./../../assets/img/home/ponte.jpg"
import { Link } from 'react-router-dom';

export default function Home() {
    const texto1 ={
        marginTop: '12px'
    }
    const texto2 ={
        marginTop: '-6px'
    }
    const texto3 ={
        marginTop: '56px'
    }
    
    
    return (
        <main>
            <section className="apresentacao">
                <div className="text-apresentacao">
                    <h1>Agência de viagens Life Style</h1>
                    <br />
                    <p>Somos a Life Style, a agência de viagens que se adequa a seu estilo de vida.
                        Por isso temos mais de 50 coberturas e assistências com preços acessíveis!</p>
                    <h2>Não importa o destino que você escolha,
                        nós estaremos com você.</h2>
                </div>
            </section>
            <section id="promocao">
                <div className="promo-texto">
                    <h2>Uma agência de viagens digital, rápida e barata.</h2>
                    <p>Aproveite as férias! Viagem com estilo e conforto para todo o Brasil e sem pagar muito por isso.
                        Embarque em uma viagem de aventura e com a segurança da nossa agência Life Style. Temos os melhores
                        destinos para você e sua família.</p>
                </div>
                <div className="card-promo">
                    <div className="promo">
                        <div className="promo-continente">
                            <h5 className="promo-title"> Brasil</h5>
                            <p className="items1 atribu-margin">a partir de:</p>
                        </div>
                        <div className="promo-contem">
                            <div className="promo-valor">
                                <p className="items2">R$4</p>
                            </div>
                            <div className="promo-complemento">
                                <p className="items3">,04</p>
                                <p className="items4">por<br /> dia</p>
                            </div>
                        </div>
                        <div className="botao">
                            <Link to="/Promocoes" className="btn btn-light" id="botao-promo" role="button">fazer
                                cotação</Link>
                        </div>
                    </div>
                    <div className="promo">
                        <div className="promo-continente">
                            <h5 className="promo-title">América Latina</h5>
                            <h5 className="promo-title1">(inclui México)</h5>
                            <p className="items1" style={texto1}>a partir de:</p>
                        </div>
                        <div className="promo-contem">
                            <div className="promo-valor">
                                <p className="items2">R$10</p>
                            </div>
                            <div className="promo-complemento">
                                <p className="items3">,83</p>
                                <p className="items4">por<br /> dia</p>
                            </div>
                        </div>
                        <div className="botao">
                            <Link to="Promocoes" className="btn btn-light" id="botao-promo" role="button">fazer
                                cotação</Link>
                        </div>
                    </div>
                    <div className="promo">
                        <div className="promo-continente">
                            <h5 className="promo-title">Europa</h5>
                            <p className="items1 atribu-margin">a partir de:</p>
                        </div>
                        <div className="promo-contem">
                            <div className="promo-valor">
                                <p className="items2">R$15</p>
                            </div>
                            <div className="promo-complemento">
                                <p className="items3">,72</p>
                                <p className="items4">por<br /> dia</p>
                            </div>
                        </div>
                        <div className="botao">
                            <Link className="btn btn-light" id="botao-promo" to="/Promocoes" role="button">fazer
                                cotação</Link>
                        </div>
                    </div>
                    <div className="promo">
                        <div className="promo-continente">
                            <h5 className="promo-title"> Estados Unidos e Canadá</h5>
                            <p className="items1" style={texto2}>a partir de:</p>
                        </div>
                        <div className="promo-contem">
                            <div className="promo-valor">
                                <p className="items2">R$13</p>
                            </div>
                            <div className="promo-complemento">
                                <p className="items3">,22</p>
                                <p className="items4">por<br /> dia</p>
                            </div>
                        </div>
                        <div className="botao">
                            <Link to="/Promocoes" className="btn btn-light" id="botao-promo" role="button">fazer
                                cotação</Link>
                        </div>
                    </div>
                    <div className="promo">
                        <div className="promo-continente">
                            <h5 className="promo-title">Ásia</h5>
                            <p className="items1 atribu-margin">a partir de:</p>
                        </div>
                        <div className="promo-contem">
                            <div className="promo-valor">
                                <p className="items2">R$13</p>
                            </div>
                            <div className="promo-complemento">
                                <p className="items3">,22</p>
                                <p className="items4">por<br /> dia</p>
                            </div>
                        </div>
                        <div className="botao">
                            <Link to="/Promocoes" className="btn btn-light" id="botao-promo" role="button">fazer
                                cotação</Link>
                        </div>
                    </div>
                    <div className="promo">
                        <div className="promo-continente">
                            <h5 className="promo-title">África</h5>
                            <p className="items1 atribu-margin">a partir de:</p>
                        </div>
                        <div className="promo-contem">
                            <div className="promo-valor">
                                <p className="items2">R$13</p>
                            </div>
                            <div className="promo-complemento">
                                <p className="items3">,22</p>
                                <p className="items4">por<br /> dia</p>
                            </div>
                        </div>
                        <div className="botao">
                            <Link to="/Promocoes" className="btn btn-light" id="botao-promo" role="button">fazer
                                cotação</Link>
                        </div>
                    </div>
                    <div className="promo">
                        <div className="promo-continente">
                            <h5 className="promo-title">Oceania</h5>
                            <p className="items1 atribu-margin">a partir de:</p>
                        </div>
                        <div className="promo-contem">
                            <div className="promo-valor">
                                <p className="items2">R$13</p>
                            </div>
                            <div className="promo-complemento">
                                <p className="items3">,22</p>
                                <p className="items4">por<br /> dia</p>
                            </div>
                        </div>
                        <div className="botao">
                            <Link to="/Promocoes" className="btn btn-light" id="botao-promo" role="button">fazer
                                cotação</Link>
                        </div>
                    </div>
                    <div className="promo">
                        <div className="promo-continente">
                            <h5 className="promo-title">Múltiplos destinos</h5>
                            <p className="items1" style={texto3}>a partir de:</p>
                        </div>
                        <div className="promo-contem">
                            <div className="promo-valor">
                                <p className="items2">R$13</p>
                            </div>
                            <div className="promo-complemento">
                                <p className="items3">,22</p>
                                <p className="items4">por<br /> dia</p>
                            </div>
                        </div>
                        <div className="botao">
                            <Link to="/Promocoes" className="btn btn-light" id="botao-promo" role="button">fazer
                                cotação</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section id="informe">
                <div className="caixaDeTexto">
                    <h1>Sua satisfação é nosso maior <br /> compromisso...</h1>
                    <br />
                    <p>Seu estilo combina mais com praia, campo ou montanha? Independente da geografia do local, a gente
                        quer te ajudar a curtir sua viagem com tudo que você tem direito, a começar da
                        tranquilidade. Life Style a sua agência de viagens, converse com a gente e vamos criar juntos um
                        roteiro maravilhoso e que seja a sua cara, no destino e no custo. Explore viagens, viajar é
                        possível. </p>
                </div>
            </section>

            <section>
                <div id="carouselExampleControls" className="carousel carousel-dark slide carrossel" data-bs-ride="carousel">
                    <div className="carousel-inner flexivel">
                        <div className="carousel-item active">
                            <h2>Depoimentos</h2>
                            <div className="foto-flexivel">
                                <div className="fotoHome foto-1"></div>
                            </div>
                            <div className="texto">
                                <p>De 1 a 10, nota mil, para o atendimento, serviço, carro, recorrido. Empresa comprometida,
                                    além de serem super prestativos e pacientes, deixando-nos à vontade para desfrutar do
                                    passeio, o que nos permite a recorrer com calma para poder sentir o gostinho dos lindos
                                    locais percorridos com eles, igrejinha/gramado/canela. Viagem inesquecível
                                    <br /><br />
                                    <strong>Brenda Caroline</strong>
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <h2>Depoimentos</h2>
                            <div className="foto-flexivel">
                                <div className="fotoHome foto-2"></div>
                            </div>
                            <div className="texto">
                                <p>Já fomos duas vezes a Gramado e Canela, mas na segunda vez conhecemos o Wilson e a
                                    Luciana que, na verdade, foram anjos que Deus colocou em nossa viagem para que a
                                    experiência fosse muito melhor que a primeira vez. E de fato, foi. Pessoas de extrema
                                    confiança e conhecedores de todos os lugares incríveis e lindos deste lugar mágico. Não
                                    tem como voltar a Gramado e não ser cuidado por esse casal incrível. Certamente
                                    voltaremos mais vezes e com toda certeza eles serão nossos cuidadores se assim podemos
                                    dizer de forma muito carinhosa que, agora podemos chamá-los de amigos.
                                    <br /><br />
                                    <strong>Marcio e Arthur SP</strong>
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <h2>Depoimentos</h2>
                            <div className="foto-flexivel">
                                <div className="fotoHome foto-3"></div>
                            </div>
                            <div className="texto">
                                <p>O trabalho dessa agência além de super profissional é igualmente agradável, foi com toda
                                    certeza uma das melhores viagens que fiz em toda minha vida, posso dizer também que foi
                                    uma das mais marcantes, eu que não conhecia nada nem ninguém acabei saindo de lá
                                    realizando um sonho, se tornaram grandes amigos, me senti super á vontade com eles já
                                    que os dois são super agradáveis e amigáveis, me levaram nos principais pontos
                                    turísticos de Gramado e Canela com todo o conforto e segurança possível, com muito
                                    carinho e cuidado, sim, gente vale muito á pena, não me arrependo de tê-los contratado
                                    para a viagem, fiquei mais que satisfeito fizeram meu sonho se tornar realidade...
                                    <br /><br />
                                    <strong>Pedro</strong>
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <h2>Depoimentos</h2>
                            <div className="foto-flexivel">
                                <div className="fotoHome foto-4"></div>
                            </div>
                            <div className="texto">
                                <p>A Life Style realmente tem a responsabilidade e compromisso de uma agência, mas quando
                                    contratei os serviços fui tratada como alguém da família, isso para mim pesa muito mais
                                    que qualquer coisa. Que experiência maravilhosa ter conhecido vocês, obrigada por toda a
                                    dedicação e cuidado, recomendo vocês de olhos fechados e jaja estarei de volta para mais
                                    alguns passeios!!
                                    <br /><br />
                                    <strong>Letícia</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                    <button className=" carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            <section id="fotos">

                <h2>Fotos</h2>

                <img src={PonteGoldenGate} alt="Ponte Golden Gate" />
                <img src={Recife} alt="Centro do recife" />
                <img src={MarcoZero} alt="Marco zero" />
                <img src={BoaViagem} alt="Praia de boa viagem" />
                <img src={LienzeSteiermak} alt="Lienze Steiermark Austria" />
                <img src={Ponte} alt="Ponte" />
            </section>            
        </main>

    )
}
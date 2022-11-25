import './Footerstyle.css';
import LogoRodape from './../../assets/ico/logo-ico-SFundo.png';
import Twiter from './../../assets/svg/twiter.svg';
import Gmail from './../../assets/svg/gmail.svg';
import Linkedin from './../../assets/svg/linkedin.svg';
import Github from './../../assets/svg/github.svg';
import WhatsApp from './../../assets/svg/WhatsApp.svg';
import email from './../../assets/svg/email.svg';

export default function Footer() {
    return (
        <footer className='footerRodape'>
            <div className="redSociais">
                <div>
                    <p>Conecte-se conosco nas redes sociais:</p>
                </div>
                <div>
                    <a href="/"><img width="25px" src={Twiter} alt="twiter" /></a>
                    <a target='_black' href='mailto:dennyberrios123@gmail.com'><img width="25px" src={Gmail} alt="gmail" /></a>
                    <a target='_black' href='https://www.linkedin.com/in/danny-berrios/'><img width="25" src={Linkedin} alt="linkedin" /></a>
                    <a target='_black' href="https://github.com/dennyberrios"><img width="25" src={Github} alt="github" /></a>
                </div>
            </div>
            <hr />
            <div className="boxTable">
                <div className="tab">
                    <table className='tableFooter'>
                        <thead>
                            <tr className='trFooter'>
                                <th>
                                    <img width="50" src={LogoRodape} alt="" /> Life Style
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='trFooter'>
                                <td className='merchan'>
                                    Empresa conceituada com 15 anos no mercado. Os melhores preços e serviços você
                                    encontra aqui.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="tab">
                    <table className='tableFooter'>
                        <thead>
                            <tr className='trFooter'>
                                <th className="rodFlex">PRODUTOS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='trFooter'>
                                <td><a href={"/Promocoes"}>Hoteis</a></td>
                                <td><a href={"/Promocoes"}>Pacotes</a></td>
                                <td><a href={"/Destino"}>Passagens</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="tab">
                    <table className='tableFooter'>
                        <thead>
                            <tr className='trFooter'>
                                <th className="rodFlex"> LINKS ÚTEIS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='trFooter'>
                                <td><a href={"/Destino"}>Destinos</a></td>
                                <td><a href={"/Contato"}>Contato</a></td>
                                <td><a href={"/Promocoes"}>Promoções</a></td>
                                <td><a href={"/Contato"}>Suporte</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="tab">
                    <table className='tableFooter'>
                        <thead>
                            <tr className='trFooter'>
                                <th className="rodFlex">CONTATO</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='trFooter'>
                                <td className="rodFlex">Brasil, Pernambuco, Recife.</td>
                                <td><a className="rodFlex" href='mailto:denny_berrios@hotmail.com'><img width="20" src={email} alt="email" />: denny_berrios@hotmail.com</a></td>
                                <td><a target='_black' href='https://www.linkedin.com/in/danny-berrios/' className="rodFlex"><img width="25" src={Linkedin} alt="linkedin" />: Danny Berrios</a></td>
                                <td><a className="rodFlex" target='_black' href='tel:81 9.8247-7238'><img width="20" src={WhatsApp} alt="WhatsApp" />: 55 81 9.8247-7238</a></td>
                                <td><a className="rodFlex" target='_black' href='https://github.com/dennyberrios'><img width="20" src={Github} alt="Github" />: Danny
                                    Berrios</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="tab2">
                <p>&copy; 2022 Copyright: <a href={"/"}>Life-Style-viagens.com</a></p>
            </div>

        </footer>
    )
};
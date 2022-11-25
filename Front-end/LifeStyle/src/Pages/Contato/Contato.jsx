import './Contatostyle.css';


export default function Contato() {
    return (
        <main className='mainContato'>
            <section className='sectionContato'>
                <div className="boxContato">
                    <div className="titleContato">
                        <h1>Contate-nos</h1>
                    </div>
                    <form>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="exampleFormControlInput1"
                                placeholder="Nome" required />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="exampleFormControlInput1"
                                placeholder="E-mail" required/>
                        </div>
                        <div className="dropdown">
                            <label>Ajude com seu:</label>
                            <select className="form-select" id="feedback" aria-label="Default select example" required>
                                <option value="DEFAULT">--selecione uma opção</option>
                                <option value="1">Feedback</option>
                                <option value="2">Reportar bug</option>
                                <option value="3">Suporte</option>
                                <option value="4">Solicitar Recursos</option>
                            </select>
                        </div> 
                         <div>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="mensagem" required></textarea>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                <label className="form-check-label" htmlFor="invalidCheck">
                                    Envie-me uma cópia desta mensagem.
                                </label>
                                <div className="invalid-feedback">
                                </div>
                            </div>
                        </div>
                        <div className="btContato">
                            <button type="submit" className="btn" id="botaoContato">Enviar</button>
                        </div>
                    </form>
                </div> 
            </section>
        </main>
    )
}
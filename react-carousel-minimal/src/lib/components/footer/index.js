import './main.css'
import footer1 from '../footer/footerbg.png'

function Rodape() {
    return (
        <footer>

            <section className="section__caracteristicas">
                <section className="section__caracteristicas--conteiner">
                    <section className="section__caracteristica">
                        <h1 className="caracteristica__titulo">
                            Missão
                        </h1>
                        <p className="caracteristica__paragrafo">
                            Transformar a realidade das comunidades por meio de ações culturais, esportivas e
                            de geração de renda, transmitindo valores coletivos e individuais aos atendidos,
                            bem como conscientizá-los sobre os próprios direitos e deveres na sociedade.
                        </p>
                    </section>

                    <section className="section__caracteristica">
                        <h1 className="caracteristica__titulo">
                            Visão
                        </h1>
                        <p className="caracteristica__paragrafo">
                            Ser reconhecida, no âmbito nacional e internacional, como organização
                            de referência na cocriação, promoção e implementação de projetos e estratégias de
                            transformação social.
                        </p>
                    </section>

                    <section className="section__caracteristica section__caracteristica--valor">
                        <h1 className="caracteristica__titulo">
                            Valores
                        </h1>
                        <p className="caracteristica__paragrafo caracteristica__paragrafo--valores">
                            <div className="paragrafo--valores paragravo__p">
                                <p >
                                    Coragem: acreditamos e impulsionamos o indivíduo a sonhar, traçar metas e
                                    alcançar objetivos.
                                    Respeito à Diversidade: valorizamos cada indivíduo e reconhecemos a pluralidade.
                                    Todos somos únicos, diferentes e singulares.
                                    Transformação econômica e ambiental: trabalhamos por uma sociedade mais
                                    humana e justa, e por um mundo melhor para todos, até às próximas gerações.
                                </p>


                            </div>

                            <div className="paragrafo--valores">

                            </div>

                        </p>
                    </section>
                </section>
            </section>
        </footer >
    )
}

export default Rodape
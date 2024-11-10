import Whatsapp from "@/components/Whatsapp";

export default function Orcamento() {
    return(
        <div className="content">
            <header>Header</header>
            <main>
                <section className="apr">
                    <div>
                        <div></div>
                        <p>Diferenciados no mercado, levamos o nosso negócio ao outro nível.</p>
                    </div>
                </section>
                <section className="cadastro">
                        <p>Para te oferecer as melhores <br/> oportunidades nos fale por onde podemos te contatar.</p>
                        <form action="">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" required placeholder="example@gmail.com"/>

                            <label htmlFor="tel">Telefone</label>
                            <input type="tel" name="tel" id="tel" required placeholder="(55) 99 9999999"/>

                            <button>Enviar</button>
                        </form>
                </section>
            </main>
            <footer>Footer</footer>
            <Whatsapp/>
        </div>
    );
}
import Caroussel from "../../components/Caroussel/Caroussel"

export default function StudentHome() {
    


    return(
        <div>
            <h1>Olá, ser humano!</h1>
            <section>
                <p>Continue de onde parou:</p>
                <p>imagem</p>
                <p>Módulo 01 - Construção</p>
                <p>Aula 03 - Entendendo o Grid</p>
                <button>Continuar</button>
            </section>
            <section>
                <h3>Módulos</h3>
                <Caroussel/>
                <button>Ver trilha completa</button>
            </section>
        </div>
    )
}
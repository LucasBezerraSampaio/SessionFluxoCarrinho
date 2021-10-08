import { Container } from './style'


export default function Produto(props) {
    return (
        <Container>
            <img className="capa" src={props.informacao.imagem} alt='' />
            <div className="titulo">{props.informacao.titulo}</div>
            <div className="preco">{props.informacao.preco}</div>
            
            <button>Ver detalhes</button>
        </Container>
    )
}
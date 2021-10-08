import { Container } from './style';
import { Link } from 'react-router-dom';


export default function Produto(props) {
    return (
        <Container>
            <img className="capa" src={props.informacao.imagem} alt='' />
            <div className="titulo">{props.informacao.titulo}</div>
            <div className="preco">{props.informacao.preco}</div>
            

            <Link to={{
                pathname: "/detalhe",
                state: props.informacao
            }}>
                <button>Ver detalhes</button>
            </Link>
            
        </Container>
    )
}
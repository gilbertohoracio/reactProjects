import * as C from './styles'
import { Theme } from "../../components/Theme"
import { useForm } from '../../contexts/FormContext'
import { Link } from 'react-router-dom';
export const FormStep4 = () =>{
        const {state} = useForm();
        return (
        <Theme>
            <C.Container>
                <label>Etapa finalizada</label>
                <h1>Parabéns {state.name}. Seu cadastro foi finalizado </h1>
                <h1>Seus dados cadastrados: </h1>
                <hr/>
                <label>Nome: {state.name}</label>
                <br/>
                <label>Email: {state.email}</label>
                <br/>
                <label>GitHub: {state.github}</label>
                <br/>
                <br/>
                            
            <Link to='/' className="backButton">Ir para o Início</Link>
            
            </C.Container>
        </Theme>
    );
}
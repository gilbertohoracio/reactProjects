import * as C from './styles'
import {Item} from './../../types/Item';

type Props ={
    item: Item,
    onChange: (id: number, feito: boolean) => void
}

export const ListItem = ({item, onChange}: Props) =>{
    return(
        <C.Container feito={item.feito}>
            <input
             type="checkbox" 
             checked={item.feito}
             onChange={e=>onChange(item.id, e.target.checked)}
             />
            <label>{item.nome} - {item.feito.toString()}</label>
        </C.Container>
    )
}
import { useState } from 'react';
import * as C from './styles'
import {Item} from './../../types/Item';

type Props ={
    item: Item
}

export const ListItem = ({item}: Props) =>{
  const[ischecked,setIsChecked] = useState(item.feito);

    return(
        <C.Container feito={ischecked}>
            <input
             type="checkbox" 
             checked={ischecked}
             onChange={e=>setIsChecked(e.target.checked)}
             />
            <label>{item.nome}</label>
        </C.Container>
    )
}
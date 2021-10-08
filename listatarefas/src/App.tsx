import {useState} from 'react';
import * as C from './App.styles';
import {Item} from './types/Item';
import {ListItem} from './components/ListItem';
import {AreaAdicionar} from './components/AreaAdicionar';

const App = () =>{
  const[list,setList] = useState<Item[]>([
    {id: 1, nome: 'Fazer Merge', feito: false},
    {id: 2, nome: 'Fazer Build', feito: true},
  ]);

const handleAddTask = (taskName: string) =>{
 let newList = [...list];
 newList.push({
   id: list.length + 1,
   nome: taskName,
   feito: false
 });
 setList(newList);


}

  return(
    <C.Container>
     <C.Area>
       <C.Header>Lista de Tarefas</C.Header>
       <AreaAdicionar onEnter={handleAddTask}/>
       {list.map((item,index)=>(
          <ListItem key={index} item={item}/>
         ))}
     </C.Area>
    </C.Container>

  );
}
export default App;
import logo from './logo.svg';
import './App.css';
import  {useState}  from 'react';
import ToDoItems from './components/ToDoItems';

function App() {
  const [inputText , setinputText] = useState("");
  const [isDisable , setIsDisable] = useState(true);
  const [items , setItems] = useState([]);
  
   function Handelchange(event){
   
       const newValue = event.target.value;
        setIsDisable(false)
       setinputText(newValue)
       if(newValue.length == 0) {
        setIsDisable(true)
       }
   }

   function addItems(){
    setItems(prevValue =>{
      return[ inputText,...prevValue,]
      })
     setinputText("")
   
   }

   function deleteItems(id){
    setItems(prevValue =>{
       return prevValue.filter((items , indexes) =>{
        return indexes !==id;
       })
    })
   }

   
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={Handelchange} type="text" value={inputText}/>
        <button
        disabled={isDisable}
        onClick={addItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        
        <ul>
          {items.map((todoItem , indexes) =>
          <ToDoItems 
          text = {todoItem}
          onChecked = {deleteItems}
          key = {indexes}
          id = {indexes}
          />
          )}
          
        </ul>
      </div>
    
      
       </div>
  );
}

export default App;

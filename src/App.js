// import logo from './logo.svg';
// import "./App.css";
import { useState } from "react";
import Row from "./component/row";
// import { getValue } from "@testing-library/user-event/dist/utils";

function App() {
  const [input, setinput] = useState("");
  const [todo, settodo] = useState([]);
  const [toggle, settoggle] = useState(true);
  const [edit,setedit]=useState(null);

  const AddinArray = () => {
    // var temp = [...todo];
    // temp.push(input);
    // settodo(temp);
    // setinput(" ");
    settodo((value) => {
      return [...value, input];
    });
    setinput("");
  };

  const Delvalue = (id) => {
    var tem = todo.filter((item, index) => {
      return index !== id;
    });
    settodo(tem);
  };

  const Editvalue = (item,id) => {
    // var editval = todo.find((item, i) => {
    //   return i === id;
    // });
    // console.log(editval);
    // setinput(editval);
    // settoggle();
    setedit(id);
    setinput(item);
    settoggle();

    
  };
  const updateval=(item,id)=>{
    let t=[...todo];
    console.log(edit)
    t[edit] = input;
    settodo(t);
    settoggle(true);
    setinput("");
          
    
    
  }

  return (
    <>
      <div className="Main-div">
      <h2>Enter value</h2>
        <input
          value={input}
          onChange={(e) => {
            setinput(e.target.value);
          }}
        />
        {toggle ? (
          <button onClick={AddinArray}>Enter</button>
        ) : (
          <button onClick={updateval}>Edit</button>
        )}
      </div>
      <div className="Main-div">
        <ol>
          {todo.map((item, index) => {
            return (
              <Row Delvalue={Delvalue} Editvalue={Editvalue} index={index} item={item}/>
            );
          })}
        </ol>
      </div>
    </>
  );
}

export default App;

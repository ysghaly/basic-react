import { useState } from 'react';
import Sub from '../components/Sub';

function Main() {

  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [operator, setOperator] = useState("");

  const update = () => {
    setOperator(document.getElementById("operator").value);

    setFirst(document.getElementById("first").value);
    setSecond(document.getElementById("second").value);
    } 

    return (
        <div>
          <p>
            This is the main body.
          </p>
          <label>First Value: </label>
          <input id="first" type="number"  onChange={update}/>
          <br /><br />
          <label>Second Value: </label>
          <input id="second" type="number" onChange={update}/>
          <br /><br />
          <label>Operator: </label>
          <select id="operator" onChange={update}>
            <option value=""></option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
          <Sub first={first} second={second} operator={operator} />
        </div>
    );
  }
  
  export default Main;
  
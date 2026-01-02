import { useState } from 'react'
import ButtonContainer from './components/button-container';
import './App.css'

function App() {
  const [displayValue, setDisplayValue] = useState("");

  const calculatorItem = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', 'C', '+'];

  function addText(key) {

    if (key === "C") {
      setDisplayValue("")
      return;
    }

    if (displayValue === "") {
      if (["+", "-", "*", "/"].includes(key)) {
        return;
      }
    }

    const lastChar = displayValue.slice(-1);

    if (["+", "-", "*", "/"].includes(lastChar) && ["+", "-", "*", "/"].includes(key)) {
      if (key === lastChar) {
        return;
      }
      setDisplayValue(prev => prev.slice(0, -1) + key)
      return;
    }
    setDisplayValue(prev => prev + key)
  }

  function addAnswer() {
    if (displayValue === "") {
      return;
    }
    else {
      let value = Function(`return ${displayValue}`)();
      setDisplayValue(String(value))
    }
  }

  function deleteValue(){
    let value=displayValue.slice(0,-1)
    setDisplayValue(value)
  }

  return (
    <div className='calculator'>

      <input type="text" id="display" disabled value={displayValue} />

      <ButtonContainer calculatorItem={calculatorItem} addText={addText}></ButtonContainer>

      <div className='del-equal-container'>
        <button className='btn-del' onClick={deleteValue}>DEL</button>
        <button className='btn-equal' onClick={addAnswer}>=</button>
      </div>

    </div>
  )
}

export default App

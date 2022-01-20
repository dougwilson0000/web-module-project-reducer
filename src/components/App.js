import React, { useState, useReducer } from 'react';
import reducer, { initialState } from '../reducers/';
import './App.css';


import { applyNumber, changeOperation, clearDisplay, memPlus, memZero, memValue } from '../actions'; 

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('app.js:,', state);
  

  const oneClick = (number) => {
    console.log(number.target.value)
    dispatch(applyNumber(number.target.value));
    
  }

  const opClick = (op) => {
    console.log(op.target.value)
    dispatch(changeOperation(op.target.value));
    
  }

  const clearClick = () => {
    
    dispatch(clearDisplay());
    
  }

  const memPlusButton = () => {
    console.log(state.total)
    dispatch(memPlus(state.total));
  }

  const memCButton = () => {
    
    dispatch(memZero());
  }

  const memRButton = () => {
    
    dispatch(memValue(state.memory));
  }
 
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={memPlusButton} value={"M+"}/>
              <CalcButton onClick={memRButton} value={"MR"}/>
              <CalcButton onClick={memCButton} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={oneClick} value={1}/>
              <CalcButton onClick={oneClick} value={2}/>
              <CalcButton onClick={oneClick} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={oneClick} value={4}/>
              <CalcButton onClick={oneClick} value={5}/>
              <CalcButton onClick={oneClick} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={oneClick} value={7}/>
              <CalcButton onClick={oneClick} value={8}/>
              <CalcButton onClick={oneClick} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={opClick} value={"+"}/>
              <CalcButton onClick={opClick} value={"*"}/>
              <CalcButton onClick={opClick} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={clearClick} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

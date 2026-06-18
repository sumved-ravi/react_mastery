import { useReducer } from 'react'
import './App.css'

import InputCard from './components/InputCard'
import ResultCard from './components/ResultCard'
import ErrorCard from './components/ErrorCard'

import { initialState, reducer } from './reducer'

function App() {
  const tipOptions: string[] = ["10", "15", "20", "25", "Custom"]

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <div style={{ 
          "display": "grid",
          "gridTemplateColumns": "1fr",
          "gridTemplateRows": "200p 1fr",
          "gridAutoFlow": "row",

          "gap": "16px",
          "justifyItems": "center",
        }} >
          <InputCard tipOptions={tipOptions} state={state} dispatch={dispatch}/>
          <ResultCard state={state} dispatch={dispatch}/>
          <ErrorCard state={state}/>
      </div>
    </>
  )
}

export default App

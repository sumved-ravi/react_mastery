
import { useState } from 'react'
import { questions } from './data/questions'

import ProgressBar from './components/ProgressBar'
import QuestionCard from './components/QuestionCard'

import './App.css'


export default function App(){
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const question = questions[currentIdx]

  function handleSelect(option) {
    setSelected(option);
    if (option === question.answer) {
      setScore(prev => prev + 1)
    }
  }

  function handleNext() {
    if (currentIdx + 1 == questions.length) {
      setFinished(true)
    } else {
      setCurrentIdx(prev => prev + 1)
      setSelected(null)
    }
  }

  if (finished) {
    const pct = score / questions.length;
    return (
      <h1>
        Score: {pct}%
      </h1>
    )
  } else {
    return (
      <div> 
        <QuestionCard 
          question={question} 
          selected={selected} 
          onSelect={handleSelect} 
        />

        <button onClick={handleNext} > Next</button>
        <ProgressBar 
          current={currentIdx+1} 
          total={questions.length}
        />
      </div>
    )
  }

}
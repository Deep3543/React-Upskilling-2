import React, {Component} from 'react'
import {render} from 'react-dom'

let playData = {
  total: 50,
  training: 20,
  erangle: 10,
  goal: 100
}

const getPercent = decimal => {
  return decimal * 100 + '%'
}
const calcGoalPrograss = (total, goal) => {
  return getPercent(total/goal)
}

const PlayGameCounter = ({total, training, erangle, goal}) => {
  return ( 
    <section>
      <div>
        <p>Total Days: {total}</p>
      </div>
      <div>
        <p>Training Days: {training}</p>
      </div>
      <div>
        <p>Erangle Days: {erangle}</p>
      </div>
      <div>
        <p>Goal Progress: {calcGoalPrograss(total, goal)}</p>
      </div>
    </section>
  )
}

render(
  <PlayGameCounter
    total={playData.total}
    training={playData.training}
    erangle={playData.erangle}
    goal={playData.goal}
  />,
  document.getElementById('root')
)
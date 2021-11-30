import React from 'react'
import { Counter } from './bases/Counter'
import { CounterBy } from './bases/CounterBy'

function App() {
    return (
        <>
            <h1>React</h1>
            <hr />
            <Counter initialState={1} />
            <hr />
            <CounterBy initialState={10} />
        </>
    )
}

export default App

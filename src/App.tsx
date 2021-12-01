import React from 'react'
import { Counter } from './bases/Counter'
import { CounterBy } from './bases/CounterBy'
import CounterHook from './bases/CounterHook'
import CounterEffect from './bases/CounterEffect'

function App() {
    return (
        <>
            <h1>React</h1>
            <hr />
            <Counter initialState={1} />
            <hr />
            <CounterBy initialState={10} />
            <hr />
            <CounterEffect />
            <CounterHook />
        </>
    )
}

export default App

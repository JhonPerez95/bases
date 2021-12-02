import React from 'react'
import { Counter } from './bases/Counter'
import { CounterBy } from './bases/CounterBy'
import CounterHook from './bases/CounterHook'
import CounterEffect from './bases/CounterEffect'
import { CounterReducer } from './counter-reducer/CounterReducer'
// import { CounterReducer } from './bases/CounterReducer'

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
            <CounterReducer />
        </>
    )
}

export default App

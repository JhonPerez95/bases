import React from 'react'
import { useState } from 'react'

interface Prop {
    initialState?: number
}

interface CounterState {
    counter: number
    clicks: number
}
export const CounterBy = ({ initialState }: Prop) => {
    const [{ counter, clicks }, setCounter] = useState<CounterState>({
        counter: initialState ? initialState : 0,
        clicks: 0,
    })
    const handleClick = (value: number) => {
        setCounter((item) => ({
            counter: item.counter ? item.counter + value : 1,
            clicks: item.clicks + 1,
        }))
    }

    return (
        <>
            <h1>CounterBy: {counter}</h1>
            <h1>Clicks: {clicks}</h1>

            <button onClick={() => handleClick(1)}>+ 1</button>
            <button onClick={() => handleClick(5)}>+ 5</button>
        </>
    )
}

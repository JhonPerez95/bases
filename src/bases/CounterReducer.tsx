import { useReducer } from 'react'

interface CounterState {
    counter: number
    previos: number
    changes: number
}
const INITIAL_STATE: CounterState = {
    counter: 15,
    previos: 0,
    changes: 0,
}

type CounterAction =
    | { type: 'increaseBy'; payload: { value: number } }
    | { type: 'reset' }

const reducerCount = (
    state: CounterState,
    acc: CounterAction
): CounterState => {
    const { counter, changes } = state
    switch (acc.type) {
        case 'reset':
            return {
                counter: 0,
                previos: 0,
                changes: 0,
            }
        case 'increaseBy':
            return {
                counter: counter + acc.payload.value,
                previos: counter,
                changes: changes + 1,
            }
        default:
            return state
    }
}
export const CounterReducer = () => {
    const [counterState, dispatch] = useReducer(reducerCount, INITIAL_STATE)
    const handleReset = () => {
        dispatch({ type: 'reset' })
    }

    const increaseBy = (value: number) => {
        dispatch({ type: 'increaseBy', payload: { value } })
    }
    return (
        <>
            <h1>CounterReducer: {counterState.counter}</h1>
            <pre>{JSON.stringify(counterState, null, 2)}</pre>
            <button onClick={handleReset}>Reset</button>
            <button onClick={() => increaseBy(1)}>+1</button>
            <button onClick={() => increaseBy(5)}>+5</button>
            <button onClick={() => increaseBy(10)}>+10</button>
        </>
    )
}

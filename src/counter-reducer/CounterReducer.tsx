import { useReducer } from 'react'
import { doIncreaseBy, doReset } from './actions/actions'
import { CounterState } from './interfaces/interfaces'
import { reducerCount } from './state/reducerCounter'

const INITIAL_STATE: CounterState = {
    counter: 10,
    previos: 0,
    changes: 0,
}

export const CounterReducer = () => {
    const [counterState, dispatch] = useReducer(reducerCount, INITIAL_STATE)
    const handleReset = () => {
        dispatch(doReset())
    }

    const increaseBy = (value: number) => {
        dispatch(doIncreaseBy(value))
    }
    return (
        <>
            <h1>CounterReducer Segmentado: {counterState.counter}</h1>
            <pre>{JSON.stringify(counterState, null, 2)}</pre>
            <button onClick={handleReset}>Reset</button>
            <button onClick={() => increaseBy(1)}>+1</button>
            <button onClick={() => increaseBy(5)}>+5</button>
            <button onClick={() => increaseBy(10)}>+10</button>
        </>
    )
}

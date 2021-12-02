import { CounterAction } from '../actions/actions'
import { CounterState } from '../interfaces/interfaces'

export const reducerCount = (
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

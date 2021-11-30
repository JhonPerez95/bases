import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

interface Props {
    initialState?: number
}

export const Counter = ({ initialState }: Props) => {
    const [counter, setCounter] = useState(initialState)

    const handleClick = () => {
        setCounter((pre) => (pre ? pre + 1 : 1))
    }
    return (
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={handleClick}>+ 1</button>
        </>
    )
}

Counter.propTypes = {
    initialValue: PropTypes.number,
}

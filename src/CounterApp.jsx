import { useState } from 'react'
import PropTypes from 'prop-types'

export const Counter = ({ value }) => {

    const [counter, setCounter] = useState(value)

    const handleAdd = () => {
        setCounter(counter + 1)
    }

    const handleRemove = () => {
        if (counter > 0) {
            setCounter(counter -1)
        }
    }

    const handleReset = () => {
        setCounter(value)
    }

    return (
        <>
            <h2>CounterApp</h2>
            <p>{counter}</p>

            <button onClick={handleAdd}>+1</button>
            <button onClick={handleRemove}>-1</button>
            <button aria-label='btn-reset' onClick={handleReset}>Reset</button>
        </>
    )
}

Counter.propTypes = {
    value: PropTypes.number.isRequired
}

Counter.defaultProps = {
    value: 0
}
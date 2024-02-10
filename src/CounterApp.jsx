import { useState } from 'react'
import PropTypes from 'prop-types'

export const Counter = ({ value }) => {

    const [counter, setCounter] = useState(value)
    const handleAdd = () => {
        setCounter(counter + 1)
    }

    return (
        <>
            <h2>CounterApp</h2>
            <p>{counter}</p>

            <button onClick={handleAdd}>+1</button>
        </>
    )
}

Counter.propTypes = {
    value: PropTypes.number.isRequired
}

Counter.defaultProps = {
    value: 0
}
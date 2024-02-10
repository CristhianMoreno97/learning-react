import PropTypes from 'prop-types'

export const Counter = ({ value }) => {
    return(
        <>
            <h2>CounterApp</h2>
            <p>{ value }</p>

            <button>+1</button>
        </>
    )
}

Counter.propTypes = {
    value: PropTypes.number.isRequired
}

Counter.defaultProps = {
    value: 0
}
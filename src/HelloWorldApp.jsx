import ProTypes from 'prop-types'

export const HelloWorld = ({ name }) => {
    return (
        <>
            <h1>Hello {name}</h1>
            <p>Vite + React</p>
        </>
    )
}

HelloWorld.propTypes = {
    name: ProTypes.string.isRequired
}
import { render, screen } from "@testing-library/react"
import { HelloWorld } from "../src/HelloWorldApp"

describe('Testing in HelloWorldApp.jsx', () => {
    const name = 'Cristhian'
    const title = 'Hello ' + name

    test('should match the snapshot', () => {
        const { container } = render(<HelloWorld name={name} />)
        expect(container).toMatchSnapshot()
    })

    test('should display the message "Hello World"', () => {
        render(<HelloWorld name={name} />)
        expect(screen.getByText(title)).toBeTruthy()
        // screen.debug()
    })

    test('should show the title in an h1 node', () => {
        render(<HelloWorld name={name} />)
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title)
    })

})
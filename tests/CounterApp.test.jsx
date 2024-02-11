import { fireEvent, render, screen } from "@testing-library/react"
import { Counter } from "../src/CounterApp"

describe('Testing in CounterApp.jsx', () => {
    const initialValue = 500

    test('should match the snapshot', () => {
        const { container } = render(<Counter value={initialValue} />)
        expect(container).toMatchSnapshot()
    })

    test('should display the value of 100', () => {
        render(<Counter value={100} />)
        expect(screen.getByText(100)).toBeTruthy()
    })

    test('The value should increase with the +1 button', () => {
        render(<Counter value={initialValue} />)
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText(initialValue + 1)).toBeTruthy()
    })

    test('The value should decreased with the -1 button', () => {
        render(<Counter value={initialValue} />)
        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText(initialValue - 1)).toBeTruthy()
    })

    test('should take the initial value', () => {
        render(<Counter value={initialValue} />)
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }))
        expect(screen.getByText(initialValue)).toBeTruthy()
    })
})
import React from 'react'
import ReactDOM from 'react-dom'
import Button from '../Button';
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-render'

afterEach(cleanup);

it("renders without crahing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div);
})

it("renders button correctly", () => {
    const {getByTestId} = render(<Button label="Click me"></Button>);
    expect(getByTestId('button')).toHaveTextContent("Click me")
})

it("renders button correctly", () => {
    const {getByTestId} = render(<Button label="save"></Button>);
    expect(getByTestId('button')).toHaveTextContent("save")
})

it("matches snapshot", () => {
    renderer(<Button label="save"></Button>)
})
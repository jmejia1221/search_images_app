import React from "react";
import {render, fireEvent, getByTestId, queryByText} from "@testing-library/react";
import Button from "./index";

test('It should execute a click', () => {
    const mockHandler = jest.fn(() => 'Clicked!');
    const button = render(<Button onClick={mockHandler}>click</Button>);
    const mock = button.getByRole('button');
    fireEvent.click(mock);
})

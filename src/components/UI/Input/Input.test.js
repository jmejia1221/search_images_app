import React, {useState} from "react";
import {render, fireEvent} from "@testing-library/react";
import Input from "./index";

function InputContainer() {
    const [value, setValue] = useState('');

    const getValue = value => value;

    const handleChange = e => {
        e.preventDefault();
        const inputValue = e.currentTarget.value;
        setValue((getValue(inputValue)));
    }

    return <Input type="text" value={value} label="search-input" onChange={handleChange} />
}

const setUp = () => {
    const utils = render(<InputContainer />);
    const input = utils.getByLabelText('search-input');
    return {
        input,
        ...utils
    }
}

test('It should has a value', () => {
    const {input} = setUp();
    fireEvent.change(input, {target: {value: 'Hello'}});
    expect(input.value).toBe('Hello');
})
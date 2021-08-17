import React from "react";
import { render, screen } from "@testing-library/react";
import Modal from "./index";

test("Renders Modal component", () => {
    render(
        <Modal>
            Hello World!
        </Modal>
    );
    const text = screen.getByText("Hello World!");
    expect(text).toBeInTheDocument();
});
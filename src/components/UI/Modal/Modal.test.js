import React from "react";
import { render, screen } from "@testing-library/react";
import Modal from "./index";

test("Renders Modal component", () => {
    render(
        <Modal isShowModal={true}>
            Hello World!
        </Modal>
    );
    const text = screen.getByText("Hello World!");
    expect(text).toBeInTheDocument();
});

test("Close Modal component", () => {
   const closeModalFn = jest.fn(() => false);
   const modal = render(
       <Modal isShowModal={closeModalFn()}>
           Hello
       </Modal>
   );
   const text = modal.queryByText("Hello");
   expect(text).not.toBeInTheDocument();
});
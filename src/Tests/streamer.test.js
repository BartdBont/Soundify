import React, { createContext, useContext } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Streamer from "../Components/Streamer";
import { StateProvider } from "../StateProvider";
import reducer, { initialState } from "./../reducer"

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders streamer", () => {
    act(() => {
        render(<StateProvider initialState={initialState} reducer={reducer}><Streamer /></StateProvider>, container);
    });
});
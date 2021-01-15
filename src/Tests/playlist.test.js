import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import YourPlaylist from "../Components/YourPlaylist";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: () => ({
        id: '2',
    })
}));

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


it("renders with or without songs", async () => {

    act(() => {
        render(<YourPlaylist />, container);
    });

    expect(container.querySelector("strong").textContent).toBe("PLAYLIST");
});
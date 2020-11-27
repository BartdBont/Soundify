import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { useParams } from "react-router-dom";
import YourPlaylist from "../Components/YourPlaylist";
import PlaylistService from "../Services/PlaylistService";

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

it("renders with or without songs", () => {
    const fakePlaylist = {
        name: "vibes",
    };

    act(() => {
        render(<YourPlaylist />, container);
    });

    // const spy = jest.spyOn(YourPlaylist.prototype, `setPlaylist`).mockImplementation(() => {
    //     Promise.resolve({
    //         json: () => Promise.resolve(fakePlaylist)
    //     })
    // })

    // expect(spy).toHaveBeenCalled();
    expect(container.querySelector("strong").textContent).toBe("PLAYLIST");
    // expect(container.YourPlaylist.playlist).toBe(fakePlaylist.name);

});
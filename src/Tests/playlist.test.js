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

// const getPlaylist = require('../Components/YourPlaylist')
const axios = require('axios');

jest.mock(('axios'), () => ({
    ...jest.requireActual('axios'),
    instance : axios.create({
        baseURL: "none",
    }),
}))

it("renders with or without songs", async () => {
    const fakePlaylist = {
        name: "vibes",
    };

    // axios.get.mockResolvedValue({
    //     data: [
    //         {
    //             name: "vibes"
    //         }
    //     ]
    // })

    // console.log(global)

    const spy = jest.spyOn(axios, "get").mockImplementation(() => {
        Promise.resolve({
            json: () => Promise.resolve(fakePlaylist)
        })
    })

    act(() => {
        render(<YourPlaylist />, container);
    });

    

    expect(spy).toHaveBeenCalled();
    expect(container.querySelector("strong").textContent).toBe("PLAYLIST");
    // expect(container.querySelector("h2").textContent).toContain("vibes");

    jest.resetAllMocks();
});
import {act, render, screen} from '@testing-library/react';
import Project from './Project'
import React from "react";
import {unmountComponentAtNode} from "react-dom";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

test('renders welcome message', () => {
    act(() => {
        render(<Project name={"test"} location={"https://test.com/test"} />, container);
    });

    expect(screen.getByText("test").attributes.hasOwnProperty("href")).toBeTruthy();
    expect(screen.getByText("test").attributes.getNamedItem("href").value).toBe("https://test.com/test");
});

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Toggle from "./toggle";

test("toggle button renders to screen", () => {
  render(<Toggle />);
});

test("toggle button fires with correct functionality", () => {
  const { getByText } = render(<Toggle />);

  const darkModeToggle = getByText(/click/i);

  fireEvent.click(darkModeToggle);
});

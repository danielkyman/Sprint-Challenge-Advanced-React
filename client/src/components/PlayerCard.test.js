import React from "react";
import { render } from "@testing-library/react";
import PlayerCard from "./PlayerCard";

test("player card renders to screen correctly", () => {
    render(<PlayerCard />);
  });

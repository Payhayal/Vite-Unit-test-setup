import { render, screen } from "@testing-library/react";
import { describe, expect, it, test } from "vitest";
import App from "./App";
import userEvent from "@testing-library/user-event";

// globals: true oldugu zmn importa gerek yok

test("renders heading on the screen?", () => {
  render(<App />);

  const heading = screen.getByRole("heading", { name: "Vite + React" });

  expect(heading).toBeInTheDocument();
});

// describe => covers tests that are related to each other
describe("Is button working?", () => {
  // test functions
  it("Is the value of counter increasing when clicked?", async () => {
    render(<App />);
    const user = userEvent.setup();
    // get necessary elements
    const btn = screen.getByRole("button");

    // button is 0 at the beginning
    expect(btn).toHaveTextContent("0");

    await user.click(btn);
    // button is now "1" when clicked
    expect(btn).toHaveTextContent("1");

    // when button double clicked
    await user.dblClick(btn);
    // button is now "3" when double clicked
    expect(btn).toHaveTextContent("3");
  });
});

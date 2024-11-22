import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Input } from "./input";

describe("Input Component", () => {
  it("renders the input with default styles", () => {
    render(<Input placeholder="Test input" data-testid="input" />);
    const input = screen.getByTestId("input");

    expect(input).toBeInTheDocument();
    expect(input).toHaveClass(
      "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
    );
  });

  it("renders input with a placeholder", () => {
    render(<Input placeholder="Test input" data-testid="input" />);
    const input = screen.getByTestId("input");

    expect(input).toHaveAttribute("placeholder", "Test input");
  });

  it("handles input value change", async () => {
    const user = userEvent.setup();
    render(<Input placeholder="Test input" data-testid="input" />);
    const input = screen.getByTestId("input");

    await user.type(input, "Hello, world!");

    expect(input).toHaveValue("Hello, world!");
  });

  it("handles input focus", async () => {
    const user = userEvent.setup();
    render(<Input placeholder="Test input" data-testid="input" />);
    const input = screen.getByTestId("input");

    await user.click(input);
    expect(input).toHaveFocus();
  });

  it("applies custom className", () => {
    render(<Input placeholder="Test input" className="custom-class" data-testid="input" />);
    const input = screen.getByTestId("input");

    expect(input).toHaveClass("custom-class");
  });

  it("renders input as disabled", () => {
    render(<Input placeholder="Test input" disabled data-testid="input" />);
    const input = screen.getByTestId("input");

    expect(input).toBeDisabled();
    expect(input).toHaveClass("disabled:cursor-not-allowed disabled:opacity-50");
  });

  it("correctly handles input type", () => {
    render(<Input type="email" placeholder="Email" data-testid="input" />);
    const input = screen.getByTestId("input");

    expect(input).toHaveAttribute("type", "email");
  });

  it("correctly handles number input type", () => {
    render(<Input type="number" placeholder="Number" data-testid="input" />);
    const input = screen.getByTestId("input");

    expect(input).toHaveAttribute("type", "number");
  });

  it("does not allow input when disabled", async () => {
    render(<Input disabled placeholder="Test input" data-testid="input" />);
    const input = screen.getByTestId("input");

    await userEvent.type(input, "Hello, world!");
    expect(input).toHaveValue("");
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Checkbox } from "./checkbox";

describe("Checkbox Component", () => {
  it("renders the Checkbox with default styles", () => {
    render(<Checkbox data-testid="checkbox" />);
    const checkbox = screen.getByTestId("checkbox");

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveClass(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
    );
  });

  it("renders in unchecked state by default", () => {
    render(<Checkbox data-testid="checkbox" />);
    const checkbox = screen.getByTestId("checkbox");

    expect(checkbox).not.toHaveAttribute("data-state", "checked");
  });

  it("renders in checked state when controlled", () => {
    render(<Checkbox data-testid="checkbox" data-state="checked" />);
    const checkbox = screen.getByTestId("checkbox");

    expect(checkbox).toHaveAttribute("data-state", "checked");
  });

  it("handles user interaction (checking and unchecking)", async () => {
    const user = userEvent.setup();
    render(<Checkbox data-testid="checkbox" />);
    const checkbox = screen.getByTestId("checkbox");

    // Check the checkbox
    await user.click(checkbox);
    expect(checkbox).toHaveAttribute("data-state", "checked");

    // Uncheck the checkbox
    await user.click(checkbox);
    expect(checkbox).not.toHaveAttribute("data-state", "checked");
  });

  it("applies custom className", () => {
    render(<Checkbox data-testid="checkbox" className="custom-class" />);
    const checkbox = screen.getByTestId("checkbox");

    expect(checkbox).toHaveClass("custom-class");
  });

  it("is disabled when the disabled prop is set", () => {
    render(<Checkbox data-testid="checkbox" disabled />);
    const checkbox = screen.getByTestId("checkbox");

    expect(checkbox).toBeDisabled();
    expect(checkbox).toHaveClass("disabled:cursor-not-allowed disabled:opacity-50");
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./card";

describe("Card Component", () => {
  it("renders the Card with default styles", () => {
    render(<Card>Card Content</Card>);
    const card = screen.getByText("Card Content");

    expect(card).toBeInTheDocument();
    expect(card).toHaveClass("rounded-xl border bg-card text-card-foreground shadow");
  });

  it("applies custom className to the Card", () => {
    render(<Card className="custom-class">Card Content</Card>);
    const card = screen.getByText("Card Content");

    expect(card).toHaveClass("custom-class");
  });

  it("renders the CardHeader with styles", () => {
    render(<CardHeader>Header Content</CardHeader>);
    const header = screen.getByText("Header Content");

    expect(header).toBeInTheDocument();
    expect(header).toHaveClass("flex flex-col space-y-1.5 p-6");
  });

  it("renders the CardTitle with styles", () => {
    render(<CardTitle>Card Title</CardTitle>);
    const title = screen.getByText("Card Title");

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass("font-semibold leading-none tracking-tight");
  });

  it("renders the CardDescription with styles", () => {
    render(<CardDescription>Description Text</CardDescription>);
    const description = screen.getByText("Description Text");

    expect(description).toBeInTheDocument();
    expect(description).toHaveClass("text-sm text-muted-foreground");
  });

  it("renders the CardContent with styles", () => {
    render(<CardContent>Content Area</CardContent>);
    const content = screen.getByText("Content Area");

    expect(content).toBeInTheDocument();
    expect(content).toHaveClass("p-6 pt-0");
  });

  it("renders the CardFooter with styles", () => {
    render(<CardFooter>Footer Content</CardFooter>);
    const footer = screen.getByText("Footer Content");

    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass("flex items-center p-6 pt-0");
  });

  it("renders a nested Card with subcomponents", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Nested Title</CardTitle>
          <CardDescription>Nested Description</CardDescription>
        </CardHeader>
        <CardContent>Main Content</CardContent>
        <CardFooter>Footer Area</CardFooter>
      </Card>
    );

    expect(screen.getByText("Nested Title")).toBeInTheDocument();
    expect(screen.getByText("Nested Description")).toBeInTheDocument();
    expect(screen.getByText("Main Content")).toBeInTheDocument();
    expect(screen.getByText("Footer Area")).toBeInTheDocument();
  });
});

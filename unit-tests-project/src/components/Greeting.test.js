import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders 'Hello World!' as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldelement = screen.getByText("Hello World!");
    expect(helloWorldelement).toBeInTheDocument();
  });

  test("renders 'good to see you' if the button was not clicked", () => {
    render(<Greeting />);

    const paragraph = screen.getByText("good to see you", { exact: false });
    expect(paragraph).toBeInTheDocument();
  });

  test("renders 'Changed!' if the button was clicked", () => {
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)

    const paragraph = screen.getByText("Changed!");
    expect(paragraph).toBeInTheDocument();
  });

  test("does not render 'good to see you' if the button was clicked", () => {
    render(<Greeting />)

    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)

    const paragraph = screen.queryByText("good to see you", { exact: false })
    expect(paragraph).toBeNull()
  })
});

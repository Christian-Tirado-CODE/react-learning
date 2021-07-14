import Greeting from "./Greeting";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
/*

The three A's in Testing:

    1. Arrange - Setup the test data, conditions and environment.

    2. Act - Run logic that should be tested(execute functions)

    3. Assert - Compare execution results with expected results.

*/

describe("Greeting Component", () => {
    test("Render Hello World as a test", () => {
        //Arrange
        render(<Greeting />);
    
        // Act
    
        //Assert
       const element = screen.getByText("Hello World!");
       expect(element).toBeInTheDocument();
    });

    test("renders 'It's good to see you!' text if user has not clicked button", () => {
        render(<Greeting />);

       const element = screen.getByText("It's good to see you", {exact: false});
       expect(element).toBeInTheDocument();

    });

    test("renders 'Text Changed' text if user clicked button", () => {
        //Arrange
        render(<Greeting />);

       // Act
        const btnElement = screen.getByRole('button');
         userEvent.click(btnElement);

       // Assert
       const outputElement = screen.getByText("Text has changed", {exact: false});
       expect(outputElement).toBeInTheDocument();

    });

    test("does not render 'It's good to see you!' text if user clicked button", () => {
        //Arrange
        render(<Greeting />);

       // Act
        const btnElement = screen.getByRole('button');
         userEvent.click(btnElement);

       // Assert
       const outputElement = screen.queryByText("It's good to see you", {exact: false});
       expect(outputElement).toBeNull();

    });
});





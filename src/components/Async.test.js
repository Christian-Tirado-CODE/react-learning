import {render, screen} from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
    test("renders post if request succeeds", async () => {
        /* WE ARE OVERWRITING  THE BUILT-IN FUNCTION WITH A DUMMY FETCH FUNCTION
           WHERE WE SET THE ACTUAL VALUE THE PROMISE SHOULD RETURN.
            THIS ALLOWS US TO PREVENT SENDING  UNNECESSARY REQUESTS TO THE API(IF THERE ARE DOZENS OF TESTS
            THAT SEND REQUESTS IT CAN INCREASE THE NETWORK TRAFFIC AND IF THERE ARE ANY POST REQUESTS
            THAT ALSO CAN MODIFY THE DATABASE UNINTENTIONALLY. THE TESTS WILL FAIL IF THE SERVER IS DOWN.
            FOR THIS REASONS IT IS BETTER TO MAKE FAKE REQUESTS TO THE SERVER.
            THE SERVER
                )
        */
        window.fetch = jest.fn;
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: '1', title: 'First Post'}]
        });
        render(<Async />);

        const listItemsElement = await screen.findAllByRole('listitem');
        expect(listItemsElement).not.toHaveLength(0);
    });
});
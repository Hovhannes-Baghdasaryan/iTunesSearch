import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
	render(<App />);
	const linkElement = screen.getByText("iTunes Music Searcher"); // Testing that does document have a text named in the getByText
	expect(linkElement);
});

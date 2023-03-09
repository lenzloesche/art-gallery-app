import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

test("A navigation link labeled 'Spotlight' and a link labeled 'Pieces' is displayed", async () => {
  render(<Navigation />);
  const navLinks = await screen.findAllByRole("link");
  const foundSpotlight = navLinks.find((navLink) =>
    navLink.innerHTML.includes("Spotlight")
  );
  expect(foundSpotlight).toBeInTheDocument();
  const foundPieces = navLinks.find((navLink) =>
    navLink.innerHTML.includes("Pieces")
  );
  expect(foundPieces).toBeInTheDocument();
});

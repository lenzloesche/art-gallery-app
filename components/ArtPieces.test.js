import ArtPieces from "./ArtPieces";
import { render, screen } from "@testing-library/react";

test("All art pieces are displayed as a list", () => {
  const pieces = [];
  for (let i = 0; i < 11; i++) {
    pieces.push({
      imageSource:
        "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
      slug: i,
      dimensions: { height: 50, width: 50 },
    });
  }
  render(<ArtPieces pieces={pieces} />);
  const images = screen.getAllByRole("listitem");
  expect(images.length).toBe(11);
});

import ArtPieces from "./ArtPieces";
import { render, screen } from "@testing-library/react";

const pieces = [];
for (let i = 0; i < 11; i++) {
  pieces.push({
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    slug: "testslug" + i,
    dimensions: { height: 50, width: 50 },
    name: "testname" + i,
    artist: "testartist" + i,
  });
}

test("All art pieces are displayed as a list", () => {
  render(<ArtPieces pieces={pieces} />);
  const images = screen.getAllByRole("listitem");
  expect(images.length).toBeGreaterThan(10);
});

test("Each art pieces image is displayed", () => {
  render(<ArtPieces pieces={pieces} />);
  const images = screen.getAllByRole("img");
  expect(images.length).toBe(11);
});

test("Each art pieces title is displayed", () => {
  render(<ArtPieces pieces={pieces} />);
  const titles = screen.getAllByRole("listitem");
  expect(titles.length).toBeGreaterThan(10);
});

test("Each art pieces artist is displayed", () => {
  render(<ArtPieces pieces={pieces} />);
  const artist = screen.getAllByRole("listitem");
  expect(artist.length).toBeGreaterThan(10);
});

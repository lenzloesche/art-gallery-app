import Spotlight from "./Spotlight";
import { render, screen } from "@testing-library/react";

const pieces = [];
for (let i = 0; i < 11; i++) {
  pieces.push({
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    slug: "testslug" + i,
    dimensions: { height: 50, width: 50 },
    name: "testtitle" + i,
    artist: "testartist" + i,
  });
}

test("The art piece image is displayed", () => {
  render(<Spotlight pieces={pieces} />);
  const images = screen.getAllByRole("img");
  expect(images.length).toBe(1);
});

test("The art piece artist is displayed", () => {
  render(<Spotlight pieces={pieces} />);
  const listItems = screen.getAllByRole("listitem");

  const doesExist = listItems.find((listItem) =>
    listItem.innerHTML.includes("testartist")
  );
  expect(doesExist).toBeTruthy();
});

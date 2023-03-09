import Image from "next/image";

export default function ArtPieces({ pieces }) {
  console.log(pieces);
  return (
    <>
      {pieces.map((picture) => {
        return (
          <li key={picture.slug}>
            <Image
              alt="image"
              height={Math.floor(picture.dimensions.height * 0.1)}
              width={Math.floor(picture.dimensions.width * 0.1)}
              src={picture.imageSource}
            />
            <ul>
              <li>Title: {picture.name}</li>
              <li>Artist: {picture.artist}</li>
            </ul>
          </li>
        );
      })}
    </>
  );
}

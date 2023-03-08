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
              height={picture.dimensions.height * 0.1}
              width={picture.dimensions.width * 0.1}
              src={picture.imageSource}
            />
          </li>
        );
      })}
    </>
  );
}

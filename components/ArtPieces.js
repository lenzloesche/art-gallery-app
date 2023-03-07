import Image from "next/image";

export default function ArtPieces({ pieces }) {
  return (
    <>
      {pieces.map((picture) => {
        return (
          <Image
            key={picture.name}
            alt="image"
            height={picture.dimensions.height * 0.1}
            width={picture.dimensions.width * 0.1}
            src={picture.imageSource}
          />
        );
      })}
    </>
  );
}

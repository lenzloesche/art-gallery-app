import Image from "next/image";

export default function ArtPiecePreview({ piece }) {
  return (
    <>
      <Image
        key={piece.name}
        alt="image"
        height={Math.floor(piece.dimensions.height * 0.1)}
        width={Math.floor(piece.dimensions.width * 0.1)}
        src={piece.imageSource}
      />
      <ul>
        <li>Title: {piece.name}</li>
        <li>Artist: {piece.artist}</li>
      </ul>
      <h1>This works</h1>
    </>
  );
}

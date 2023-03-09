import Image from "next/image";

export default function Spotlight({ pieces }) {
  const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];

  return (
    <div>
      <h1>Spotlight</h1>
      <Image
        alt="image"
        height={Math.floor(randomPiece.dimensions.height * 0.1)}
        width={Math.floor(randomPiece.dimensions.width * 0.1)}
        src={randomPiece.imageSource}
      />
      <ul>
        <li>Title: {randomPiece.name}</li>
        <li>Artist: {randomPiece.artist}</li>
      </ul>
    </div>
  );
}

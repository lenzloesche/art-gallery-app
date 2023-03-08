import ArtPieces from "./../components/ArtPieces";
import ArtPiecePreview from "../components/ArtPiecePreview";
import Spotlight from "../components/Spotlight";

export default function HomePage() {
  if (data === undefined) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <Spotlight pieces={data} />
      <h1>Hello from Next.js</h1>
      <ArtPiecePreview piece={data[0]} />
      <ArtPieces pieces={data} />
    </div>
  );
}

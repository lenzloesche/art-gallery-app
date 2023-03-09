import ArtPieces from "./../components/ArtPieces";
import ArtPiecePreview from "../components/ArtPiecePreview";
import Spotlight from "../components/Spotlight";

export default function SpotlightPage({ data }) {
  if (data === undefined) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <Spotlight pieces={data} />
    </div>
  );
}

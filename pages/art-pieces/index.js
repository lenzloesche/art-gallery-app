import ArtPieces from "./../../components/ArtPieces";

export default function ArtPiecesPage({ data }) {
  if (data === undefined) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <ArtPieces pieces={data} />
    </div>
  );
}

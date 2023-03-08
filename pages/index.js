
import Image from "next/image";
import ArtPieces from "./../components/ArtPieces";
import ArtPiecePreview from "../components/ArtPiecePreview";


export default function HomePage() {
 
  if (data === undefined) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>Hello from Next.js</h1>
      <ArtPiecePreview piece={data[0]} />
      <ArtPieces pieces={data} />
    </div>
  );
}

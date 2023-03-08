import useSWR from "swr";
import Image from "next/image";
import ArtPieces from "./../components/ArtPieces";
import ArtPiecePreview from "../components/ArtPiecePreview";
import Spotlight from "../components/Sportlight";

const url = "https://example-apis.vercel.app/api/art";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function HomePage() {
  const { data } = useSWR(url, fetcher);
  console.log(data);
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

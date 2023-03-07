import useSWR from "swr";
import Image from "next/image";

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
      <h1>Hello from Next.js</h1>
      {data.map((picture) => {
        return (
          <Image
            alt="image"
            height={picture.dimensions.height}
            width={picture.dimensions.width}
            src={picture.imageSource}
          />
        );
      })}
    </div>
  );
}

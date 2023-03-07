import useSWR from "swr";
import Image from "next/image";

const url = "https://example-apis.vercel.app/api/art";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function HomePage() {
  const { data } = useSWR(url, fetcher);
  console.log(data);
  return (
    <div>
      <h1>Hello from Next.js</h1>
      <Image
        alt="image"
        height={data[0].dimensions.height}
        width={data[0].dimensions.width}
        src={data[0].imageSource}
      />
    </div>
  );
}

import GlobalStyle from "../styles";
import useSWR from "swr";

const url = "https://example-apis.vercel.app/api/art";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data } = useSWR(url, fetcher);
  console.log(data);
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

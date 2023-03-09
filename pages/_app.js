import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "../components/Layout";

const url = "https://example-apis.vercel.app/api/art";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data } = useSWR(url, fetcher);
  console.log(data);
  return (
    <>
      <GlobalStyle />
      <Layout />
      <Component {...pageProps} data={data} />
    </>
  );
}

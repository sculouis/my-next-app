import "../styles/main.scss";

import TopMenu from "../layouts/topmenu";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopMenu />
      <Component {...pageProps} />
    </>
  );
}

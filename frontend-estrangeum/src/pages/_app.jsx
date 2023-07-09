import { NavBar } from "@/components";
import { UserProvider } from "@/contexts/userContext";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Estrangeum</title>
      </Head>
      <NavBar />
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
}

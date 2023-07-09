import { NavBar } from "@/components";
import { UserProvider } from "@/contexts/userContext";
import "@/styles/globals.css";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Estrangeum</title>
      </Head>
      <UserProvider>
        <NavBar />
        <Component {...pageProps} />
      </UserProvider>
      <ToastContainer />
    </>
  );
}

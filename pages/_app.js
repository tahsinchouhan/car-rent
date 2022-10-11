import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="mx-auto text-black">
        <div className="z-50">
          <Navbar />
        </div>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <Component {...pageProps} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MyApp;

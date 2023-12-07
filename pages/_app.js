import "../styles/globals.css";
import AppContext from "../Context/CartContext";

function MyApp({ Component, pageProps }) {
  return (
    <AppContext>
      <Component {...pageProps} />
    </AppContext>
  );
}

export default MyApp;

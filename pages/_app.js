import { ChakraProvider, Spinner } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Header from "/Components/header";
import Layout from "/Components/Layouts/layout";
import "/styles/globals.css";

const color = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ color });

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />)
    </ChakraProvider>
  );
}

export default MyApp;

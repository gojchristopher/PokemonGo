import { Button, Box, SimpleGrid } from "@chakra-ui/react";
import Head from "next/head";
import pokemonGo from "../public/pngegg.png";
import Layout from "../Components/Layouts/layout";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <SimpleGrid justifyItems="center" row={2}>
          <Box mt={5}>
            <Image src={pokemonGo} height={400} alt="Pokemon" width={400} />
          </Box>
          <Box>
            {/*Button Section For Navigating to SSR Pokemon List */}
            <Link passHref href="/SSRpokemon/">
              <Button
                m={10}
                borderColor="tomato"
                border="1px"
                color="tomato"
                _hover={{ color: "white", backgroundColor: "tomato" }}
              >
                SSR Pokemon List
              </Button>
            </Link>

            {/*Button Section For Navigating to SSG Pokemon List */}
            <Link passHref href="/SSGpokemon/">
              <Button
                m={10}
                border="1px"
                borderColor="tomato"
                color="tomato"
                _hover={{ color: "white", backgroundColor: "tomato" }}
              >
                SSG Pokemon List
              </Button>
            </Link>
          </Box>
        </SimpleGrid>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
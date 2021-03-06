import { useState } from "react";
import styles from "/styles/Home.module.css";
import {
  Box,
  Button,
  Container,
  SimpleGrid,
  usePanGesture,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import usePagination from "/Components/pagination";
import { TypeColor } from "/Components/colorTypes";

function SSGPokemonList({ data }) {
  const itemsPerPage = 10;
  const { nextPage, prevPage, currentData, currentPage } = usePagination(
    itemsPerPage,
    data
  );
  return (
    <Box position="relative" height="100%" width="100%">
      <Container
        borderRadius={10}
        height="100%"
        width="100%"
        centerContent
        display="flex"
        justifyContent="center"
      >
        <>
          <SimpleGrid
            width="max-content"
            height="max-content"
            columns={[1, 2, 3, 4, 5]}
            spacing="30px"
          >
            {currentData().map((pokemon) => (
              <>
                <Link
                  passHref
                  href={`/ssg/pokemon/${pokemon.id}`}
                  key={pokemon.id}
                >
                  <Box
                    key={pokemon.id}
                    borderRadius={10}
                    className={styles.cardClick}
                    width={200}
                    height="270px"
                    // boxShadow="10px 10px 5px white"
                    // boxShadow="0 4px 8px 0 white, 0 6px 20px 0 white"
                    boxShadow={`0 4px 8px 0 ${TypeColor(
                      pokemon.types[0].type.name
                    )}, 0 6px 20px 0 ${TypeColor(pokemon.types[0].type.name)}`}
                  >
                    <Box
                      // className={styles.cardImage}
                      // borderColor={TypeColor(pokemon.types[0].type.name)}
                      borderColor="#ef4444"
                      key={pokemon.id}
                      maxW="xl"
                      background="#dc2626"
                      borderWidth="5px"
                      borderRadius={10}
                      overflow="hidden"
                      // p="2"
                    >
                      <Box
                        m={1}
                        borderColor="#CAEFFF"
                        borderRadius={10}
                        borderWidth="2px 2px 6px 2px"
                        background={TypeColor(pokemon.types[0].type.name)}
                      >
                        <Image
                          src={pokemon.image}
                          alt={pokemon.name}
                          layout="responsive"
                          width={50}
                          height={50}
                        />
                      </Box>
                      <Box width={200} height={75}>
                        <Box
                          mt="1"
                          fontWeight="semibold"
                          as="h4"
                          ml={5}
                          color="white"
                          lineHeight="tight"
                          isTruncated
                        >
                          {pokemon.name}
                        </Box>
                        <Box display="flex" alignItems="baseline">
                          <Box
                            color="gray.400"
                            fontWeight="semibold"
                            letterSpacing="wide"
                            fontSize="xs"
                            ml={5}
                            textTransform="uppercase"
                          >
                            Height {pokemon.height} &bull; Weight{" "}
                            {pokemon.weight}
                          </Box>
                        </Box>

                        <Box>
                          <Box as="span" color="gray.400" ml={5} fontSize="sm">
                            Base Experience: {pokemon.base_experience}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Link>
              </>
            ))}
          </SimpleGrid>

          {/**Pagination Controls Section */}
          <Box m={5}>
            <SimpleGrid justifyItems="center" columns={3} gap={2}>
              <Box>
                <Button
                  border="1px"
                  borderColor="tomato"
                  color="tomato"
                  onClick={prevPage}
                  _hover={{ color: "white", background: "tomato" }}
                  disabled={currentPage > 1 ? false : true}
                >
                  Prev
                </Button>
              </Box>
              <Box>
                <Box
                  color="white"
                  background="tomato"
                  borderRadius="full"
                  textAlign="center"
                  alignContent="center"
                  height={10}
                  fontSize="2xl"
                  width={10}
                >
                  {currentPage}
                </Box>
              </Box>
              <Box>
                <Button
                  borderColor="tomato"
                  border="1px"
                  color="tomato"
                  _hover={{ color: "white", background: "tomato" }}
                  onClick={nextPage}
                  disabled={currentPage < 10 ? false : true}
                >
                  Next
                </Button>
              </Box>
            </SimpleGrid>
          </Box>
        </>
      </Container>
    </Box>
  );
}

export default SSGPokemonList;

import type { NextPage } from "next";
import flashcards from "../public/flashcards.json";

// Components
import FlashCard from "../components/FlashCard/FlashCard";
import { SimpleGrid, Flex } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <SimpleGrid columns={5} gap={5} w={"100%"} justifyItems="center">
      {flashcards.map(({ word, translation }) => (
        <FlashCard word={word} translation={translation} />
      ))}
    </SimpleGrid>
  );
};

export default Home;

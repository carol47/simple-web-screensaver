import React from "react";

// Components
import { Box, Flex } from "@chakra-ui/react";

type iProps = {
  word: string;
  translation: string;
};

const FlashCard: React.FC<iProps> = ({ word, translation }) => (
  <Flex
    w={200}
    h={320}
    bg="green.100"
    borderRadius={"sm"}
    justifyContent="center"
    alignItems="center"
    direction="column"
  >
    <Box fontSize={"3xl"}>{word}</Box>
    <div>{translation}</div>
  </Flex>
);

export default FlashCard;

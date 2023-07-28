import {
  Box,
  Flex,
  HStack,
  Button,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { MdOutlineAdd } from "react-icons/md";
import { BsSortDownAlt } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { setCardsData } from "../store/reducers/cardsReducer";
import getRandomInt from "../helpers/generateRandomIntHelper";
import { ButtonTexts, CardValues } from "../constants/TextConstants";
import getSortedArray from "../helpers/sortCardsHelper";

export default function Header() {
  const uniqueId = uuidv4();
  const cards = useAppSelector((state) => state.cards.cardsData);
  const dispatch = useAppDispatch();

  const handleAddCard = () => {
    dispatch(
      setCardsData([
        ...cards,
        { id: uniqueId, value: getRandomInt(CardValues.MAX) },
      ])
    );
  };

  const handleSortButton = () => {
    dispatch(setCardsData(getSortedArray(cards)));
  };

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
        <HStack spacing={8} alignItems={"center"}>
          <HStack as={"nav"} spacing={4} display="flex">
            <Button colorScheme="teal" size="md" onClick={handleAddCard}>
              <Text mr="5px">{ButtonTexts.ADD_CARD}</Text>
              <MdOutlineAdd />
            </Button>
            <Button colorScheme="red" size="md" onClick={handleSortButton}>
              <Text mr="5px">{ButtonTexts.SORT_CARDS}</Text>
              <BsSortDownAlt />
            </Button>
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
}

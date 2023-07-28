import { Box, SimpleGrid } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import SimplCard from "./Card";
import { setCardsData } from "../store/reducers/cardsReducer";
import getUpdatedCardsData from "../helpers/removeCardHelper";

export default function Main() {
  const cards = useAppSelector((state) => state.cards.cardsData);
  const dispatch = useAppDispatch();

  const handleDeleteButton = (id: string) => {
    dispatch(setCardsData(getUpdatedCardsData(cards, id)));
  };

  return (
    <SimpleGrid
      columns={{ base: 1, lg: 2 }}
      spacing={10}
      py={6}
      overflowY="auto"
      height="90vh"
      pb="125px"
    >
      {cards?.map((card) => {
        return (
          <Box key={card.id} display="flex" justifyContent="center">
            <SimplCard
              cardData={card}
              handleDeleteButton={handleDeleteButton}
            />
          </Box>
        );
      })}
    </SimpleGrid>
  );
}

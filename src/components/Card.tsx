import { Text, Card, CardBody, IconButton } from "@chakra-ui/react";
import { CardDataType } from "../types/GlobalTypes";
import { AiOutlineClose } from "react-icons/ai";

export default function SimplCard({
  cardData,
  handleDeleteButton,
}: {
  cardData: CardDataType;
  handleDeleteButton: (id: string) => void;
}) {
  return (
    <Card minW="sm" height="200px">
      <CardBody
        justifyContent="center"
        alignItems="center"
        display="flex"
        borderColor="black"
      >
        <IconButton
          variant="link"
          aria-label="Remove Card"
          position="absolute"
          right="0"
          top="10px"
          icon={<AiOutlineClose size="25px" />}
          onClick={() => handleDeleteButton(cardData.id)}
          _hover={{ color: "red" }}
        />

        <Text color="blue.600" fontSize="2xl">
          {cardData.value}
        </Text>
      </CardBody>
    </Card>
  );
}

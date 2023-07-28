import { CardDataType } from "../types/GlobalTypes";

export default function getUpdatedCardsData(data:CardDataType[],idToRemove:string) {
    const updatedData = data.filter(item => item.id !== idToRemove);
    return updatedData
}
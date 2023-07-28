import { CardDataType } from "../types/GlobalTypes";

export default function getSortedArray(data:CardDataType[]) {
    const sortedData = data.slice().sort((a, b) => a.value - b.value);
    return sortedData
}
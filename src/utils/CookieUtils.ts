import { CardDataType } from '../types/GlobalTypes'
import cookies from '../helpers/addCookies'
import { CookieSetOptions } from 'universal-cookie/cjs/types'

const CARD_DATA_COOKIE_NAME = 'cardsData'
const DEFAULT_COOKIE_OPTIONS: CookieSetOptions = {
    path: '/'
}

export const setCardsDataCookie = (
    cardsData: CardDataType
): void => {
    cookies.set(CARD_DATA_COOKIE_NAME, cardsData, DEFAULT_COOKIE_OPTIONS)
}

export const removeCardDataCookie = (): void => {
    cookies.remove(CARD_DATA_COOKIE_NAME, DEFAULT_COOKIE_OPTIONS)
}

export const getCardsDataCookie = (): CardDataType[] => {
    return cookies.get(CARD_DATA_COOKIE_NAME)
}

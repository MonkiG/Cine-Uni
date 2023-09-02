import { describe, test, expect } from "vitest";
import getRandomInt from "../src/helpers/getRandomInt";

describe('getRandomInt function test', () => {
    test('Should return an integer', () => {
        const myNumber = getRandomInt(null, 5)
        const myNumber2 = getRandomInt(null, 0)
        
        expect(Number.isInteger(myNumber)).toBe(true)
        expect(Number.isInteger(myNumber2)).toBe(true)
    })

    test('Should be between range', () => {
        const min = 6
        const max = 10
        const myNumber = getRandomInt(min, max)
        const myNumber2 = getRandomInt(null, myNumber)

        expect(min <= myNumber &&  myNumber <= max).toBe(true)
        expect(0 <= myNumber2 &&  myNumber2 <= myNumber).toBe(true)

    })
})
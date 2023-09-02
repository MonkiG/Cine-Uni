import { describe, test, expect } from "vitest";
import Client from "../classes/Client";

describe('Client class test', () => {
    test('Should return an object', () => {
        const myClient = new Client()

        expect(typeof myClient).toBe('object')
    })

    test('Should have name, tickets and id', () => {
        const myClient = new Client()

        expect(myClient.name).toBeTruthy()
        expect(myClient.id).toBeTruthy()
        expect(myClient.tickets).toBeTruthy()
    })
})
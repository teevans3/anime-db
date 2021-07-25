import { expect, jest, beforeEach } from '@jest/globals';
import handler from '../index';

let req;
let res;

// mocking fetch call
global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve({media: {data: {}}})
    })
);

describe("Testing API calls - returning proper responses:", () => {

    // reset fetch back to global fetch
    beforeEach(() => {
        fetch.mockClear();
    })

    it("Should return 405 if method is not GET", async () => {
        req = {
            method: "POST"
        };
        res = {
            status: jest.fn(() => res),
            end: jest.fn()
        };

        const response = await handler(req, res);

        expect(res.status).toBeCalledWith(405);
        expect(res.end).toHaveBeenCalledTimes(1);
    });

    it("Should return 200 if method is GET", async () => {
        req = {
            method: "GET"
        }
        res = {
            status: jest.fn(() => res),
            json: jest.fn()
        }

        const response = await handler(req, res);

        expect(res.status).toBeCalledWith(200);
        expect(res.json).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledTimes(1);
    })

    it("Should return 500 if error is caught", async () => {
        // have fetch call fail
        fetch.mockImplementationOnce(() => Promise.reject("API call failed"));
        
        req = {
            method: "GET"
        }
        res = {
            status: jest.fn(() => res),
            json: jest.fn()
        }

        const response = await handler(req, res);

        expect(res.status).toBeCalledWith(500);
        expect(res.json).toHaveBeenCalledTimes(1);
    })
});
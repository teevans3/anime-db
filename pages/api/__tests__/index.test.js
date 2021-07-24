import { beforeEach, expect, jest } from '@jest/globals';
import handler from '../index';


describe("Request Method Authentication", () => {
    let req;
    let res;

    beforeEach(() => {
        req = {};
        res = {
            status: jest.fn(() => res),
            end: jest.fn()
        };
    });

    it("Should return 405 if method is not GET", async () => {
        req.method = "POST";

        const response = await handler(req, res);

        expect(res.status).toBeCalledWith(405);
        expect(res.end).toHaveBeenCalledTimes(1);
    });

    // FIGURE OUT HOW TO MOCK FETCH CALL????
    it ("Should return 200 if method is GET", async () => {
        req.method = "GET";

        const response = await handler(req, res);
        jest.mock(fetch, () => jest.fn())

        fetch.mockImplementation(() => response)

        expect(res.status).toBeCalledWith(200);
    })
});
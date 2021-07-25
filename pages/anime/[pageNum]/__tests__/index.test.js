import { expect, jest } from '@jest/globals';
import {getStaticProps, getStaticPaths} from '../index';

let req;
let res;

const context = {
    params: {
        pageNum: 1
    }
}

// mocking fetch call
global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve({
            data: {
                Page: {
                    pageInfo: {
                        // adding total (pages) value for testing getStaticPaths
                        total: 100
                    },
                    media: {}
                }
            }
        })
    })
);

// reset fetch back to global fetch
beforeEach(() => {
    fetch.mockClear();
})

describe("getStaticProps - returning proper responses:", () => {

    it("Should return props with error null if fetch call succeeds", async () => {

        const response = await getStaticProps(context);

        expect(response.props.error).toEqual(null);
    })

    it("Should return props with error NOT null if fetch call fails", async () => {
        // have fetch call fail
        fetch.mockImplementationOnce(() => Promise.reject("API call failed"));

        const response = await getStaticProps(context);

        expect(response.props.error).toEqual(expect.anything());
    })

})

describe("getStaticPaths - returning proper responses:", () => {

    it("Should return paths with length of at least 1 if fetch succeeds", async () => {

        const response = await getStaticPaths(context);

        expect(response.paths.length).toBeGreaterThan(0);
    })

    it("Should return fallback false if fetch call succeeds", async () => {
        
        const response = await getStaticPaths(context);

        expect(response.fallback).toEqual(false);
    })

    it("Should return paths with length of 0 if fetch fails", async () => {
        // have fetch call fail
        fetch.mockImplementationOnce(() => Promise.reject("API call failed"));

        const response = await getStaticPaths(context);

        expect(response.paths.length).toEqual(0);
    })

    it("Should return fallback false if fetch call fails", async () => {
        // have fetch call fail
        fetch.mockImplementationOnce(() => Promise.reject("API call failed"));

        const response = await getStaticPaths(context);

        expect(response.fallback).toEqual(false);
    })
})
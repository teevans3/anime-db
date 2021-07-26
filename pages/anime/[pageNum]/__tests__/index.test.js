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
                    media: [
                        // adding one media item for testing getStaticProps return value
                        {id: '1', title: 'title', image: 'image'},
                    ]
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

    it("Should return props with media having length at of least 1 if fetch call succeeds", async () => {

        const response = await getStaticProps(context);

        expect(response.props.media.length).toBeGreaterThan(0);
    })

    it("Should return props with pageInfo object not being empty if fetch call succeeds", async () => {

        const response = await getStaticProps(context);

        expect.objectContaining({total: 100});
    })

    it("Should return props with media having length of 0 if fetch call fails", async () => {
        // have fetch call fail
        fetch.mockImplementationOnce(() => Promise.reject("API call failed"));

        const response = await getStaticProps(context);

        expect(response.props.media.length).toEqual(0);
    })

    it("Should return props with pageInfo object being empty if fetch call fails", async () => {
        // have fetch call fail
        fetch.mockImplementationOnce(() => Promise.reject("API call failed"));
        
        const response = await getStaticProps(context);

        expect.not.objectContaining({total: 100});
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
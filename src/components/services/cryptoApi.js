import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'bc862130abmsh9b078eeb00e5407p107fcejsn659a6d04374a'

}

 const baseUrl = 'https://coinranking1.p.rapidapi.com';

 const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({

    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) =>  createRequest(`/coins?limit=${count}`),
        })
    })

});

export const {
    useGetCryptosQuery, 
} = cryptoApi;


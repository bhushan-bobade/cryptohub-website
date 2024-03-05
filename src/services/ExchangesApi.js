import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const ExchangesHeaders = {
   'x-rapidapi-host': 'coingecko.p.rapidapi.com',
   'x-rapidapi-key': '83efb745f9msh7a4478a0ecb1507p1c06a0jsn456acb810563'
}

const baseUrl = 'https://coingecko.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: ExchangesHeaders});

export const ExchangesApi = createApi({
    reducerPath: 'ExchangesApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
       getExchanges: builder.query({
          query: () => createRequest( `/exchanges`),
 
       })
    })
 });
 
 
export const { useGetExchangesQuery } = ExchangesApi;
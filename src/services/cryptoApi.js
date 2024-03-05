import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
   'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
   'x-rapidapi-key': '83efb745f9msh7a4478a0ecb1507p1c06a0jsn456acb810563'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
   reducerPath: 'cryptoApi',
   baseQuery: fetchBaseQuery({ baseUrl }),
   endpoints: (builder) => ({
      getCryptos: builder.query({
         query: (count) => createRequest( `/coins?limit=${count}`),

      }),
      getCryptoDetails: builder.query({
         query: (coinId) => createRequest( `/coin/${coinId}`),
       }),
       getCryptoHistory: builder.query({
         query: ({ coinId, timePeriod }) => createRequest(`coin/${coinId}/history?timeperiod=${timePeriod}`),
       })
   })
});



export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = cryptoApi;



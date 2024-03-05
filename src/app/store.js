import {configureStore} from '@reduxjs/toolkit';

import { cryptoApi } from '../services/cryptoApi';
import { cryptoNewsApi } from '../services/cryptoNewsApi';
import { ExchangesApi } from '../services/ExchangesApi';

export default configureStore({
    reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    [ ExchangesApi.reducerPath]: ExchangesApi.reducer,
    },
});
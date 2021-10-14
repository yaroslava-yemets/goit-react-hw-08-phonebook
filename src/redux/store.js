import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {  
    persistStore,
    persistReducer,
    FLUSH, 
    REHYDRATE, 
    PAUSE, 
    PERSIST, 
    PURGE, 
    REGISTER 
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger'
import contactsReducer from './contactForm/contacts-reducer';
import authReducer from './auth/auth-slice';

console.log('authReducer', authReducer);

const middleware = [...getDefaultMiddleware({
        // serializableCheck: {
        //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        // },
        serializableCheck: false,
    }), 
    logger,
];

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

// const store = configureStore({
//     reducer: {
//         contacts: contactsReducer,
//     },
// })

// const persistor = persistStore(store);

// export default { store, persistor };

export default store;


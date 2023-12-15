// 'use client'

import { configureStore, AnyAction, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import { compose, applyMiddleware, Middleware, createStore, combineReducers } from 'redux';
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

import { HYDRATE, createWrapper, Context } from "next-redux-wrapper";
// import { ecommerce } from "../service/service";

import { composeWithDevTools } from 'redux-devtools-extension';
// import monitorReducersEnhancer from './enhancers/monitorReducers'
// import loggerMiddleware from './middleware/logger'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';
import thunkMiddleware from 'redux-thunk'
import thunk from 'redux-thunk'
import logger from "redux-logger";

// import storage from '../redux/costumStorage';
import { categoryReducer } from './slice/categorySlice'
import { categorySlice } from './slice/categorySlice';
import { productSlice } from './slice/productslice';
import { subCategorySlice } from './slice/subcategorySlice';
// import { cartSlice } from './slice/cartSLice';
// import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'
// import devToolsEnhancer from 'remote-redux-devtools';



// const bindmiddleware = (middleware: any) => {
//     if (process.env.NODE_ENV !== "production") {
//         const { composeWithDevTools } = require("redux-devtools-extension");
//         return composeWithDevTools(applyMiddleware(...middleware));
//     }
//     return applyMiddleware();
// };


// const middlewareEnhancer = applyMiddleware(thunk)

// const composeWithDevTools =
//     (window as any).__REDUX_DEVTOOLS_EXTENSION__ && window as any.__REDUX_DEVTOOLS_EXTENSION__()

// const composedEnhancers = composeWithDevTools(middlewareEnhancer,)
// const composeEnhancers = composeWithDevTools({ trace: true }); // <<< set options here
// const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });
// const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
// const composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

let middleware: any = []
// export default configureStore({
//     reducer: rootReducer,
//     devTools: true,
//     enhancers: composedEnhancers,
// })

// export const makeStore = configureStore({
//     reducer: rootReducer,
//     // enhancers: composeEnhancers
// })
// export const makeStore = (ctx: Context) => {
//     return configureStore({
//         reducer: rootReducer,
//         //     middleware: (gDM) =>
//         //         gDM<composeEnhancers>({
//         //             thunk: {
//         //                 // https://github.com/reduxjs/redux-toolkit/issues/2228#issuecomment-1095409011
//         //                 extraArgument: ctx
//         //             }
//         //         })
//         //             .concat(rootReducer.middleware),
//     });
// };




// const persistConfig = {
//     key: 'root',
//     storage,
// }

// const authPersistConfig = {
//     key: "root",
//     storage: storage,
//     whitelist: ["isAuth", "jid"],
// };

const combinedReducer = combineReducers({
    [categorySlice.name]: categorySlice.reducer,
    [subCategorySlice.name]: subCategorySlice.reducer,
    [productSlice.name]: productSlice.reducer,
    // [cartSlice.name]: cartSlice.reducer,
    // users: usersReducer
})
// const combinedReducer = combineReducers({
//     category: persistReducer(persistConfig, categoryReducer),
// })
// const persistedReducer = persistReducer(persistConfig, combinedReducer)


//**** */ store


export const store = configureStore({
    reducer: combinedReducer,
    devTools: true,
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({ serializableCheck: false }).concat(logger),
    // middleware: [thunk]
});

// export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;


// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const makeStore = () => store;

// export const wrapper = createWrapper(makeStore);
// export const wrapper = createWrapper(store, { debug: true });
//******** */




//********************** makeStore*/
// const reducer = (state: ReturnType<typeof combineReducers>, action: AnyAction) => {
//     if (action.type === HYDRATE) {
//         const nextState = {
//             ...state, // use previous state
//             ...action.payload, // apply delta from hydration
//         };
//         return nextState;
//     } else {
//         return combinedReducer(state, action);
//     }
// };
// const makeStore = (preloadedState,) =>
//     configureStore({
//         // reducer: rootReducer,
//         reducer,
//         // preloadedState,
//         devTools: process.env.NODE_ENV !== 'production',
//         middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
//         // enhancers: composedEnhancers,
//         // middleware: [loggerMiddleware, ...getDefaultMiddleware()],
//         // enhancers: [composedEnhancer]
//         // middleware: (getDefaultMiddleware) =>
//         // getDefaultMiddleware().concat(eLearningApi.middleware),
//     });

// export const persistor = persistStore(makeStore())
// export type AppStore = ReturnType<typeof makeStore>;
// export type AppState = ReturnType<AppStore['getState']>;
// export type AppDispatch = AppStore['dispatch'];
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
// export const wrapper = createWrapper(makeStore, { debug: true });
// export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
//********************** */

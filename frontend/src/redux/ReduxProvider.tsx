"use client";

// import { Provider } from "react-redux";
import { Providers } from '../redux/provider'
import { store } from "./store";
import { persistStore } from "redux-persist";

// persistStore(store); // persist the store

export default function ReduxProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return <Providers>{children}</Providers>;
}
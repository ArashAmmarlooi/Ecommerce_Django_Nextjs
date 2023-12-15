// 'use client'

import Navbar from '../app/components/navbar/navbar';
import Footer from '../app/components/footer/footer';

import { store } from '../src/redux/store';
import { fetchCategory } from 'src/redux/slice/categorySlice';
import { fetchSubCategory } from 'src/redux/slice/subcategorySlice';
import FilterBlur from './components/filterblur/filtercomp/filterblur';
import ReduxProvider from "../src/redux/ReduxProvider";
import './global.scss';
const API_URL = process.env.API_URL;


async function getData() {
    const catres = await fetch(`${API_URL}/v1/category`, { next: { revalidate: 0 } })
    const subcatres = await fetch(`${API_URL}/v1/subcategory`, { next: { revalidate: 0 } })
    const category = await catres.json()
    const subcategory = await subcatres.json()

    // await store.dispatch(fetchCategory(category));

    if (!catres.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    if (!subcatres.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return { category, subcategory }
}

export default async function RootLayout({
    children, ...pageProps
}) {
    pageProps.params.newProp = "testing";
    let getdat = await getData();
    const data = await getData();
    const { category, subcategory } = getdat;
    // const dispatch = useDispatch()
    store.dispatch(fetchCategory(category))
    store.dispatch(fetchSubCategory(subcategory))
    console.log(store.getState());

    return (
        <html lang="en">
            <body>
                <FilterBlur />
                <ReduxProvider>
                    <Navbar data={data} />
                    {children}
                    <Footer />
                </ReduxProvider >
            </body>
        </html>
    )
}
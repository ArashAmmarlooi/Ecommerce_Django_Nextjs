import React, { useState, useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "../../redux/hooks";

type Repo = {
    name: String
    categroy: String
}
// async function getData() {
//   const res = await fetch('http://127.0.0.1:8000/Ecommerce/api/v1/subcategory')
//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }
//   const data = res.json()
//   console.log(data, 'data in fetch page');

//   return data
// }






export default function About() {
    // const product = useAppSelector(state => state)
    // console.log(product, 'products with app seletor in about');
    // const [data, setData] = useState<any>();
    // console.log(repo, 'repo');
    // useEffect(() => {
    //   (async function get() {
    //     setData(await getData());
    //   })();
    //   // const data = getData()
    //   console.log(data, 'in navbar');
    //   // setData(data);

    // }, []);

    return (
        <>
            <section>
                about
            </section>
        </>
    )
}
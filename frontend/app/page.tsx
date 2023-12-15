// 'use client'

import React, { useState, use } from "react";
import type { InferGetServerSidePropsType, GetServerSideProps, GetStaticProps } from 'next'
// import { fetchCategory } from "../redux/slice/categorySlice";
// import { fetchSubCategory } from "../redux/slice/subcategorySlice";
// import { wrapper, AppThunk } from '../redux/store';
// import { RootState } from "../redux/store";
import { store } from "../src/redux/store";
import { useDispatch } from "react-redux";
import { AppDispatch } from '../src/redux/store';
import { fetchCategory } from "src/redux/slice/categorySlice";
// import { useAppDispatch } from "src/redux/hooks";

import variables from '../app/variables.module.scss';
import Styles from '../src/styles/home.module.scss';
import Image from 'next/image';
import Homepicture from '../public/assets/homepicture.gif';
import Giftbox from '../public/assets/giftbox.png';
import Moraghbeatpoost from '../public/assets/moraghbeatpoost.png';
import Residegybemoo from '../public/assets/residegybemoo.png';
import Roshanayderakhshandegy from '../public/assets/roshanayderakhshandegy.png';
import Salamatbadan from '../public/assets/salamatbadan.png';
import Zibaypoost from '../public/assets/zibaypoost.png';
import Bioaqua from '../public/assets/Bioaqua.png';
import Plus from '../public/assets/Plus.png';
import Dove from '../public/assets/Dove.png';
import Gucci from '../public/assets/Gucci.png';
import Schon from '../public/assets/Schon.png';

// import { AppState } from "../redux/store";
// import { makeStore } from '../redux/store'

// type Repo = {
//   name: String
//   categroy: String
// }
// async function getData() {
//   const res = await fetch('http://127.0.0.1:8000/Ecommerce/api/v1/subcategory')
//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }
//   const data = res.json()
//   console.log(data, 'data in fetch page');

//   return data
// }
// export async function getStaticProps() {
//   const response = await fetch("http://127.0.0.1:8000/Ecommerce/api/v1/subcategory");
//   const data = await response.json();
//   console.log('static site in index rendered');

//   return {
//     props: {
//       data,
//     },
//   };
// }

// async function getQuotes() {
//   return await fetch("http://127.0.0.1:8000/Ecommerce/api/v1/subcategory", {
//     cache: "no-store",
//   })
// }

// export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
//   (store) => async () => {
//     // if (store.getState().category.category.length == 0) category = await fetch((`${process.env.API_URL}/api/v1/category`));
//     let pageProps: any = {};

//     // let category = await fetch(`${process.env.API_URL}/api/v1/category`);
//     // const cat = await category.json();
//     // let subcategory = await fetch(`${process.env.API_URL}/api/v1/subcategory`);
//     // const sub = await subcategory.json();

//     // store.dispatch(fetchCategory(cat));
//     // store.dispatch(fetchSubCategory(sub));
//     // store.dispatch(repo)
//     // console.log(store.getState().category, 'store get state');
//     // pageProps["category"] = cat;
//     // pageProps["subcategory"] = sub;
//     // store.dispatch(fetchProduct(repo))
//     //   const category = await store.dispatch(getCategory.initiate());
//     // const category = eLearningApi.endpoints.getCategory.select()(
//     //   store.getState()
//     // );
//     //   const course = await store.dispatch(getCourse.initiate());
//     // const course = eLearningApi.endpoints.getCourse.select()(store.getState());
//     // const category = store.dispatch(getCategory.initiate());
//     // const course = store.dispatch(getCourse.initiate());
//     // const blog = store.dispatch(getBlog.initiate());
//     // const { data: Category } = eLearningApi.endpoints.getCategory.select()(
//     //   store.getState()
//     // );

//     //   await Promise.all(getRunningOperationPromises());

//     return {
//       props: { pageProps },
//     };
//   }
// );

async function getData() {
  const catres = await fetch('http://127.0.0.1:8000/Ecommerce/api/v1/category')
  const subcatres = await fetch('http://127.0.0.1:8000/Ecommerce/api/v1/subcategory')
  const category = await catres.json()
  const subcategory = await subcatres.json()
  // await store.dispatch(fetchCategory(category));
  // dispatch(fetchCategory(category))



  if (!catres.ok) {
    throw new Error('Failed to fetch data')
  }

  if (!subcatres.ok) {
    throw new Error('Failed to fetch data')
  }

  return { category, subcategory }
}

export default function Home(props) {
  // let store = makeStore().getState();
  console.log(props);
  // const data = await getData();
  // await store.dispatch(fetchCategory(data));
  // const { category } = store.getState().category;
  // console.log(category);

  // console.log(data, 'props in home');
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  // dispatch(fetchCategory('string'))
  // }, [])



  return (
    <>
      <main>
        <section className={Styles.homesection}>
          <div>
            {/* {repo.map(elem => <li key={elem.id}>{elem.name}</li>)} */}
          </div>
          <div></div>
          <Image
            src={Homepicture}
            height={350}
            width={1200}
            alt="Follow us on Twitter" />
          <div className={Styles.homeparag}>
            <h2>پوستت رو دوست داشته باش</h2>
            <p>محصولات مراقبتی پوست</p>
            <span>خرید</span>
          </div>
        </section>


        <section className={Styles.productsection}>
          <div className={Styles.sepecialbtn}>
            <p>پیشنهاد ویژه</p>
            <Image
              src={Giftbox}
              height={80}
              width={80}
              alt="Follow us on Twitter" />
          </div>


          <div className={Styles.Productswrraper}>
            <div>
              <p>زیبایی پوست</p>
              <Image
                src={Zibaypoost}
                height={230}
                width={230}
                alt='' />
            </div>
            <div>
              <p>سلامت بدن</p>
              <Image
                src={Salamatbadan}
                height={230}
                width={230}
                alt='' />
            </div>
            <div>
              <p>رسیدگی به مو</p>

              <Image
                src={Residegybemoo}
                height={230}
                width={230}
                alt='' />
            </div>
            <div>
              <p>روشنایی و درحشندگی</p>
              <Image
                src={Roshanayderakhshandegy}
                height={230}
                width={230}
                alt='' />
            </div>
            <div>
              <p>مراقبت از پوست</p>
              <Image
                src={Moraghbeatpoost}
                height={230}
                width={230}
                alt='' />
            </div>
            <div className={Styles.allproduct}>
              <span>
                <p>مشاهده همه</p>
                <Image
                  src={Plus}
                  height={30}
                  width={30}
                  alt='' />
              </span>

            </div>
          </div>
        </section>

        <section className={Styles.brandwrapper}>
          <h1>محبوب ترین برند ها </h1>
          <div className={Styles.brandlogos}>
            <span>
              <Image
                src={Bioaqua}
                height={100}
                width={100}
                alt='' />
            </span>

            <span>
              <Image
                src={Dove}
                height={100}
                width={100}
                alt='' />
            </span>

            <span>
              <Image
                src={Gucci}
                height={100}
                width={100}
                alt='' />
            </span>

            <span>
              <Image
                src={Schon}
                height={100}
                width={100}
                alt='' />
            </span>
          </div>
        </section>
      </main>
    </>
  )
}
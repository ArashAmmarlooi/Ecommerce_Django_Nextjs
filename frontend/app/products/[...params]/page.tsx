// 'use client'
import React from "react";
import Image from 'next/image';
import Link from "next/link";
import { usePathname } from 'next/navigation'
import type { InferGetServerSidePropsType, GetServerSideProps, GetStaticProps, GetStaticPaths } from 'next'
import queryString from 'query-string';
import { toPersianDigits } from '../../../src/utils/javascript'
import FilterComp from "../../components/filtercomp/filtercomp";
import { ParsedUrlQuery } from "querystring";
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState } from "src/redux/store";
import styles from './products.module.scss';
import Chevron from '../../../public/assets/chevron.png';
import Add from '../../../public/assets/Add.png';
import Star from '../../../public/assets/Star.svg';
import Item from '../../../public/assets/item.png';
import Bar from '../../../public/assets/bar.svg';
import { store } from "src/redux/store";
import { useAppSelector } from "src/redux/hooks";
import { fetchCategory } from "src/redux/slice/categorySlice";
import { fetchProduct } from "src/redux/slice/productslice";
import Resfiltersort from "app/components/resfiltersort/resfiltersort";
import Breadcrump from "app/components/breadcrump/breadcrump";
import Pagefeature from "app/components/pagefeature/pagefeature";


// type Repo = {
//     name: String
//     categroy: String
// }
// interface Params extends ParsedUrlQuery {
//     slug: string;
// }
const API_URL = process.env.API_URL
console.log(API_URL);




async function getData(params, searchParams) {
    console.log(params);
    console.log(searchParams);
    let stringified = queryString.stringify(searchParams);
    console.log(stringified);
    // console.log(window.location.href);

    let resproducts;
    let products;
    if (params.length == 1 && Object.keys(searchParams).length === 0) {
        resproducts = await fetch(`${API_URL}/v1/products/${params}`, { next: { revalidate: 0 } });
        console.log(products);
        products = resproducts.json();
    }

    else if (params.length > 0 && Object.keys(searchParams).length === 0) {
        resproducts = await fetch(`${API_URL}/v1/products/${params[0]}/${params[1]}`, { next: { revalidate: 0 } });
        products = resproducts.json();
        console.log(products);
    }
    else if (params.length == 1 && Object.keys(searchParams).length > 0) {
        resproducts = await fetch(`${API_URL}/v1/products/${params}?${stringified}`, { next: { revalidate: 0 } });
        products = resproducts.json();
        console.log(products);
    }
    else if (params.length > 0 && Object.keys(searchParams).length !== 0) {
        resproducts = await fetch(`${API_URL}/v1/products/${params[0]}/${params[1]}?${stringified}`, { next: { revalidate: 0 } });
        products = resproducts.json();
        console.log(products);
    }


    if (!resproducts.ok) {
        throw new Error('Failed to fetch data')
    }

    return products
}

async function getAllproducts() {
    const resproductsall = await fetch(`${API_URL}/v1/products`, { next: { revalidate: 0 } });
    const allproducts = resproductsall.json();

    if (!resproductsall.ok) {
        throw new Error('Failed to fetch data')
    }

    return allproducts
}




const Products = async (props) => {

    console.log(props);
    const { params } = props.params
    const { searchParams } = props

    var firstWord = decodeURIComponent(params[0].replace(/_.*/, ''))
    const dataproducts = await getData(params, searchParams);
    console.log(dataproducts);
    const products = await getAllproducts();
    store.dispatch(fetchProduct(products))

    let { category } = store.getState();
    let { subcategory } = store.getState();
    return (
        <>
            <Breadcrump params={params} />
            <section>
                {<p style={{ direction: 'rtl', marginRight: '65px' }}>زیر دسته بندی ها</p>}
                {params.length == 1 && <div className={styles.subcategorylistwrraper}>
                    {subcategory.subcategory.map((elem, index) =>
                        (decodeURIComponent(elem.category.replace(/ .*/, '')) == firstWord && subcategory.subcategory.length != 0) &&
                        <Link href={`/products/${decodeURIComponent(`${params[0]}`)}/${decodeURIComponent(elem.slug)}`}>
                            <div className={styles.subcategorybox}>
                                <Image
                                    src={elem.image}
                                    width={50}
                                    height={50}
                                    alt="catimage"
                                />
                                <p>{elem.name}</p>
                            </div>
                        </Link>
                    )}
                </div>}
                <section className={styles.productsfilterswrapper}>

                    <div className={styles.filterwrapper}>
                        <FilterComp product={products} params={params} category={category} />
                    </div>

                    <div className={styles.productwrapper}>
                        <span className={styles.topfilters}>
                            <span className={styles.sort}>
                                <Image
                                    src={Bar}
                                    width={20}
                                    height={20}
                                    alt="Follow us on Twitter"
                                />
                                <p>مرتب سازی</p>
                                <p>پر تخفیف ترین</p>
                                <p>بشترین امتیاز</p>
                                <p>جدید ترین</p>
                                <p>پر بازدید ترین</p>
                            </span>

                            <div className={styles.resfiltersort}><Resfiltersort /></div>

                            {<p>تعداد محصول : {dataproducts && toPersianDigits(dataproducts.length)}</p>}
                        </span>

                        <section className={styles.productcontent}>
                            {dataproducts.length > 0 ? dataproducts.map((elem, index) =>
                                <div className={styles.productbox} key={elem.id}>
                                    <Link href={`/product/${elem.id}`}>
                                        <div className={styles.productimage}>
                                            <Image
                                                src={elem.image}
                                                fill
                                                alt="Follow us on Twitter"
                                            />
                                        </div>

                                        <span className={styles.namescore}>
                                            <p>
                                                {elem.name}
                                            </p>
                                            <span style={{ width: '122px', marginLeft: '10px' }}>
                                                <p>امتیاز: {toPersianDigits(elem.rating)}</p>
                                                <Image
                                                    src={Star}
                                                    width={15}
                                                    height={15}
                                                    alt=""
                                                />
                                            </span>

                                        </span>

                                        <span className={styles.pricebox}>
                                            <span className={styles.pricecont}>
                                                قیمت <p style={{ color: 'rgb(223, 64, 223)' }}> : {toPersianDigits(elem.price)}ریال </p>
                                            </span>
                                            {elem.discount === '1' && <span className={styles.discountcover}></span>}
                                            <div>{elem.discount === '1' && <span className={styles.discount} style={{ color: 'rgb(223, 64, 223)' }}>تخفیف : <p className={styles.discbox}>{toPersianDigits(elem.discount_price)}</p>ریال</span>}</div>
                                        </span>

                                        <span className={styles.cardspan}>
                                            {(elem.in_stock === '0' || elem.in_stock === null) ?
                                                <p>کالا موجود نیست</p> :
                                                <><p>افزودن به سبد</p>
                                                    <Image
                                                        src={Add}
                                                        width={30}
                                                        height={30}
                                                        alt=""
                                                    /> </>}

                                        </span>


                                    </Link>
                                </div>
                            ) : <div className={styles.productnotfound}>
                                <Image
                                    src={Item}
                                    width={100}
                                    height={100}
                                    alt=""
                                />
                                <p>محصولی یافت نشد</p>
                            </div>}
                        </section>
                    </div>
                    <div></div>
                </section>

            </section >
            <Pagefeature />
        </>
    )
}

export default Products;
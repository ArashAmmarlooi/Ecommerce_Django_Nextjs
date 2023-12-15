// 'use client'
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import styles from './product.module.scss';
import Star from '../../../public/assets/Star.svg';
import { store } from '../../../src/redux/store';

import { toPersianDigits } from '../../../src/utils/javascript'
import Breadcrump from "app/components/breadcrump/breadcrump";
import Pagefeature from "app/components/pagefeature/pagefeature";
import Tabcomp from "app/components/tabcomp/tabcomp";
import Productbascketbar from "app/components/productbascketbar/productbascketbar";
const API_URL = process.env.API_URL

async function getproduct(params) {
    console.log(params);
    const productres = await fetch(`${API_URL}/v1/product/${params.id}`, { next: { revalidate: 0 } });
    const product = productres.json();

    if (!productres.ok) {
        throw new Error('Failed to fetch data')
    }

    return product
}

async function SplitSentencesIntoParagraphs(productspectext) {
    const sentences = productspectext.split(',');

    return (
        <div>
            {sentences.map((sentence, index) => (
                <p key={index}>{sentence.trim()}</p>
            ))}
        </div>
    );
}

const Product = async (props) => {
    let quantity;
    let { params } = props
    console.log(params);

    let product = await getproduct(params);

    let productspectext = product.productspecification[0].specification;
    let splittext = await SplitSentencesIntoParagraphs(productspectext);
    console.log(splittext);
    // let { category } = store.getState().category;
    // let { subcategory } = store.getState().subcategory;
    return (
        <>
            <Breadcrump params={params} product={product} />
            <section className={styles.productdetailwrraper}>
                <div className={styles.productimage}>
                    <Image src={product.image} fill alt='productimg' />
                </div>

                <div className={styles.productspecification}>
                    <h2>{product.name}</h2>
                    <span className={styles.commentbar}>
                        <span>امتیاز: {toPersianDigits(product.rating)}
                            <Image
                                src={Star}
                                width={15}
                                height={15}
                                alt=""
                            />
                        </span>
                        |
                        <p style={{ color: 'rgb(223, 64, 223)' }}>3 نظر</p>
                        |
                        <p style={{ color: 'rgb(223, 64, 223)' }}>4 علاقه مندی</p>
                    </span>
                    <p>دسته بندی : {product.category}</p>
                    <h3 style={{ fontSize: '15px' }}>ویژگی های محصول</h3>
                    <div className={styles.specificationbcont}>{splittext}</div>
                </div>

                <Productbascketbar product={product} />
            </section>
            <Tabcomp product={product} />
            <Pagefeature />

        </>
    )
}

export default Product;
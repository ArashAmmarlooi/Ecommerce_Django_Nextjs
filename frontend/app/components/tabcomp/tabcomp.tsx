'use client'

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from 'next/image';
import styles from './tabcomp.module.scss';
import Bar from '../../../public/assets/bar.svg';



function tab(e) {
    let tabmenuitem = document.querySelectorAll('.tabcomp_tabmenu__oVuBl span') as any;
    let tabmenuactive = document.querySelector('.tabcomp_spanactive__zCrpl') as any;

    let tabcontent = document.querySelectorAll('.tabcomp_tabcontent__wZfcS div') as any;
    let tabcontetnactive = document.querySelector('.tabcomp_divactive__HfRsX') as any;
    tabmenuitem.forEach(elem => {
        tabmenuactive.classList.remove('tabcomp_spanactive__zCrpl')
        tabcontetnactive.classList.remove('tabcomp_divactive__HfRsX');
    })

    tabcontent[e.currentTarget.dataset.id].classList.add('tabcomp_divactive__HfRsX');
    e.currentTarget.classList.add('tabcomp_spanactive__zCrpl')
}

const Tabcomp = (props) => {
    let { product } = props
    useEffect(() => {

        console.log(props);

    }, [])
    return (
        <>
            <section className={styles.tabsection}>
                <div className={styles.tabmenu}>
                    <span data-id='0' onClick={(index) => tab(index)} className={styles.spanactive}>توضیحات محصول</span>
                    <span data-id='1' onClick={(index) => tab(index)}>مشخصات محصول</span>
                    <span data-id='2' onClick={(index) => tab(index)}>راهنمای استفاده</span>
                    <span data-id='3' onClick={(index) => tab(index)}>درباره برند</span>
                </div>

                <div className={styles.tabcontent}>
                    <div data-id='0' className={`${styles.tabdescription} ${styles.divactive}`}>
                        <h1>مقدمه محصول : </h1>
                        <p>{product.productspecification[0].introduction}</p>
                        <h1>توضیحات محصول : </h1>
                        <p style={{ lineHeight: '30px' }}>{product.discription}</p>
                    </div>

                    <div data-id='1' className={styles.tabspecification}>
                        <table>
                            <tbody>
                                <tr>
                                    <th>کد محصول : </th>
                                    <td>{product.id}</td>
                                </tr>
                                <tr>
                                    <th>بافت محصول : </th>
                                    <td>{product.productspecification[0].producttype}</td>
                                </tr>
                                <tr>
                                    <th>نوع محفظه : </th>
                                    <td>{product.productspecification[0].boxtype}</td>
                                </tr>
                                <tr>
                                    <th>کارای محصول : </th>
                                    <td>{product.productspecification[0].performance}</td>
                                </tr>
                                <tr>
                                    <th>سن استفاده : </th>
                                    <td>{product.productspecification[0].age}</td>
                                </tr>
                                <tr>
                                    <th>جنسیت: </th>
                                    <td>{product.productspecification[0].gender}</td>
                                </tr>
                                <tr>
                                    <th>نوع پوست : </th>
                                    <td>{product.productspecification[0].skintype}</td>
                                </tr>
                                <tr>
                                    <th>کشور سازنده : </th>
                                    <td>{product.productspecification[0].country}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div data-id='2' className={styles.tabinstruction}>
                        <p>{product.productspecification[0].instruction}</p>
                    </div>

                    <div data-id='3' className={styles.tabbranddescription}>
                        <p>{product.productspecification[0].discription}</p>
                    </div>
                </div>
            </section>
        </>

    );
}



export default Tabcomp;
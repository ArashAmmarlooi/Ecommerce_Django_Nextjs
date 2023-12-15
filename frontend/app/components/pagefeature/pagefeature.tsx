'use client'

import React, { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import Productdetailfastdelivery from '../../../public/assets/productdetailfastdelivery.svg';
import Productdetailfastparcel from '../../../public/assets/productdetailfastparcel.svg';
import Productdetailgive from '../../../public/assets/productdetailgive.svg';
import Productdetailpricetag from '../../../public/assets/productdetailpricetag.svg';
import styles from './pagefeature.module.scss';

function filterpopup() {
    let filterwrapper = document.querySelector('.products_filterwrapper__9OMlw') as any;
    let filterblur = document.querySelector('.filterblur') as any;
    document.body.style.overflow = 'hidden';
    filterblur.style.display = 'block'
    console.log(filterblur);
    filterwrapper.style.display = 'flex';
}
function sortpopup() {
    // alert('hi')
    // let sortmenu = document.getElementsByClassName('products_sort__a978R') as any
    // console.log(sortmenu);
    // sortmenu.style.display = 'flex';
}




const Pagefeature = () => {

    useEffect(() => {
        let closefilter = document.querySelector('.filtercomp_closefilter__EZ3kb')
        console.log(closefilter, 'close filter');

    }, [])
    return (
        <section className={styles.featureswrapper}>
            <div><p>ضمانت اصل بودن کالا</p><Image src={Productdetailfastdelivery} width={30} height={30} alt='' /></div>
            <div><p>بازگشت کالا تا 7 روز</p><Image src={Productdetailfastparcel} width={30} height={30} alt='' /></div>
            <div><p>ارسال رایگان</p><Image src={Productdetailgive} width={30} height={30} alt='' /></div>
            <div><p>خدمات پس از فروش</p><Image src={Productdetailpricetag} width={30} height={30} alt='' /></div>
        </section>
    );
}



export default Pagefeature;
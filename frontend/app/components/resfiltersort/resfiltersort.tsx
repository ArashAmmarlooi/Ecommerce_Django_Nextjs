'use client'

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from 'next/image';
import styles from './resfiltersort.module.scss';
import Bar from '../../../public/assets/bar.svg';

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




const Resfiltersort = () => {

    useEffect(() => {
        let closefilter = document.querySelector('.filtercomp_closefilter__EZ3kb')
        console.log(closefilter, 'close filter');

    }, [])
    return (
        <div className={styles.resmenu}>
            <span className={styles.filterpopup} onClick={filterpopup}>
                <Image
                    src={Bar}
                    width={20}
                    height={20}
                    alt="Follow us on Twitter"
                />
                <p>فیلترها</p>
            </span>
            <span className={styles.sortpopup} onClick={sortpopup}>
                <Image
                    src={Bar}
                    width={20}
                    height={20}
                    alt="Follow us on Twitter"
                />
                <p>مرتب سازی</p>
            </span>
        </div>
    );
}



export default Resfiltersort;
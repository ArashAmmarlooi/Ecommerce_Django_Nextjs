'use client'

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from 'next/image';
import { useSelector } from 'react-redux';

import { useAppDispatch, useAppSelector } from "../../../src/redux/hooks";
import { useRouter } from 'next/navigation';
import Bascket from '../../../public/assets/Basket.svg';
import Profile from '../../../public/assets/Profile.svg';
import Logotype from '../../../public/assets/Logotype.svg';

import styles from "./navbar.module.scss";
import { fetchCategory } from "src/redux/slice/categorySlice";
import { fetchSubCategory } from "src/redux/slice/subcategorySlice";


let tabitem;
let tabcontent;
let submenu;

type Repo = {
    name: any
    category: any
}


function tablihover(event, index) {
    tabitem.forEach((item) => {
        item.classList.remove("navbar_lactive___E5oP");
        tabcontent.forEach((item) => {
            item.style.display = 'none'
        });
    });

    if (tabitem != undefined) tabitem[index].classList.add("navbar_lactive___E5oP");
    if (tabcontent != undefined) tabcontent[index].style.display = 'block'
}


function productlistenter() {
    if (submenu) submenu.classList.add('navbar_submenuactive__7dRNE');
}

function productlistexit() {
    if (submenu) submenu.classList.remove('navbar_submenuactive__7dRNE');
}


const Navbar = (props) => {
    const router = useRouter();
    let dispatch = useAppDispatch();
    const { category, subcategory } = props.data;
    useEffect(() => {
        console.log(props, 'props in navbar');
        console.log(category, subcategory, 'cat sub selector in nav menu');

    }, [])

    // category = props.initialState;
    // subcategory = props.initialState;
    // const { category, subcategory } = props 
    // const { category } = useAppSelector(state => state.category)
    // const { subcategory } = useAppSelector(state => state.subcategory)
    // console.log(category, subcategory, 'app selector data in nav menu');
    // console.log(, 'subcategory');

    const submenuuls = useRef(null);
    useEffect(() => {
        tabitem = document.querySelectorAll('.navbar_categorydivmenu__UNB_W li');
        console.log(tabitem, 'tabitem in nav');
        tabcontent = document.querySelectorAll('.navbar_subcategorydivmenu__dfA4V ul');
        submenu = document.querySelector('.navbar_submenu__KTDWP')
        if (tabitem != undefined) tabitem[0].className = 'navbar_lactive___E5oP';
        if (tabcontent != undefined) tabcontent[0].style.display = 'block';
        // dispatch(fetchCategory(category))
        // dispatch(fetchSubCategory(subcategory))
    }, [])

    return (
        <div className={styles.navmenu}>
            <div className={styles.menulist}>
                <ul>
                    <li>
                        <Link href="/">
                            <Image
                                src={Logotype}
                                height={40}
                                width={100}
                                alt="Follow us on Twitter"
                            />
                        </Link>

                    </li>
                    <li>
                        <Link href="" onMouseOver={productlistenter}>محصولات</Link>
                        <div className={styles.submenu} onMouseLeave={productlistexit}>
                            <div className={styles.categorydivmenu}>
                                <ul>
                                    {category != undefined && category.map((elem, index) =>
                                        <li onMouseOver={() => tablihover(event, index)} key={elem.id}>
                                            <Link href={`/products/${elem.slug}`}   >
                                                {elem.name}
                                            </Link>
                                        </li>
                                    )}

                                </ul>
                            </div>

                            <div className={styles.subcategorydivmenu}>
                                {category != undefined && category.map((catelem, index) =>
                                    <ul ref={submenuuls} key={catelem.id}>
                                        {subcategory != undefined && subcategory.map((subelem, index) =>
                                            (subelem.category_id === catelem.id) &&
                                            <li key={subelem.id}>
                                                <Link href={`/products/${encodeURIComponent(catelem.slug)}/${encodeURIComponent(subelem.slug)}`}>
                                                    {subelem.name}
                                                </Link>
                                            </li>
                                        )}
                                        <Image src={catelem.image} width={180} height={180} alt='' />
                                    </ul>
                                )}
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link href="/about">درباره</Link>
                    </li>
                    <li>
                        <Link href="/about">تماس</Link>
                    </li>
                </ul>
            </div>

            <div className={styles.profilelist}>
                <div className={styles.profileboxes}>
                    <Link href="/cart">
                        <span>
                            <Image
                                src={Bascket}
                                height={15}
                                width={15}
                                alt="Follow us on Twitter" />
                        </span>
                    </Link>
                    <span>
                        <Image
                            src={Profile}
                            height={15}
                            width={15}
                            alt="Follow us on Twitter" />
                    </span>
                </div>
            </div>
        </div >
    );
};


export default Navbar;
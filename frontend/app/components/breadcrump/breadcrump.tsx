'use client'
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation';
import styles from './breadcrump.module.scss'



const Breadcrump = (props) => {
    const router = useRouter()
    const path = usePathname()
    useEffect(() => {

    }, [path])
    return (
        <>
            <div className={styles.breadcrump}>
                <p><Link href='/'>آرایشچی</Link></p> &ensp;/
                {props.params.length === 1 && <p>{decodeURIComponent(props.params[0]).replace(/_/g, " ")}</p>}
                {props.params.length > 1 && <><p><Link href={`/products/${props.params[0]}`}>{decodeURIComponent(props.params[0]).replace(/_/g, " ")}</Link></p>
                    &ensp; / <p>{decodeURIComponent(props.params[1]).replace(/_/g, " ")}</p></>}

                {Object.keys(props.params).includes('id') && <><p><Link href={`/products/${encodeURIComponent(props.product.category.replace(/ /g, "_"))}`}>{props.product.category}</Link></p>
                    &ensp; / <p><Link href={`/prodaucts/${encodeURIComponent(props.product.category.replace(/ /g, "_"))}/${encodeURIComponent(props.product.subcategory.replace(/ /g, "_"))}`}>{props.product.subcategory}</Link></p>
                    &ensp; / <p>{props.product.name}</p></>}
            </div >
        </>
    )
}

export default Breadcrump;
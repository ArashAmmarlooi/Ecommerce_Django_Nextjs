'use client'

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from 'next/image';
import styles from './product.bascketbar.module.scss';
import Bar from '../../../public/assets/bar.svg';
import { store } from '../../../src/redux/store'
import { clientStore } from '../../../src/redux/clientStore'
import Productdetailfastdelivery from '../../../public/assets/productdetailfastdelivery.svg';
import Productdetailfastparcel from '../../../public/assets/productdetailfastparcel.svg';
import Productdetailgive from '../../../public/assets/productdetailgive.svg';
import Productdetailpricetag from '../../../public/assets/productdetailpricetag.svg';
import Productdetailreceipt from '../../../public/assets/productdetailreceipt.svg';
import Heart from '../../../public/assets/heart.svg';
import { toPersianDigits } from '../../../src/utils/javascript'
import { fetchCart } from "src/redux/slice/cartSLice";
let arr: any = [];
let cartobj: any = {};
let id = 0;
let newCart;

const Productbascketbar = (props) => {
    const [cart, setCart] = useState<any>([]);

    let [count, setCount] = useState(1)
    let { product } = props


    function increase() {
        if (count < product.count) setCount(count => count += 1)

    }
    function decrease() {
        setCount(count => Math.max(count - 1, 1))
    }

    function addtocart() {
        let existeditem = arr.find(item => item.productid == product.id)
        if (existeditem) {
            const index = arr.findIndex(item => item.productid == product.id)
            const updatedCart = { ...arr[index], addminoscount: arr[index].addminoscount++ };
            newCart = [...arr];
            console.log(newCart);

        }
        else {
            arr.push({
                'id': id++,
                'productid': product.id,
                'name': product.name,
                'price': product.price,
                'image': product.image,
                'productcount': product.count,
                'addminoscount': count
            })


        }
        localStorage.setItem("cart", JSON.stringify(arr)) as any;
    }

    useEffect(() => {
    }, [])


    return (
        <>
            <div className={styles.productbascketbar}>
                <div className={styles.descbox}>
                    <span>
                        <Image src={Productdetailpricetag} width={35}
                            height={35} alt='productimg' />
                        {/* <p> برند {product.brand}</p> */}
                    </span>
                    <span>
                        <Image src={Productdetailfastparcel} width={35}
                            height={35} alt='productimg' />
                        <p>ارائه تضمین اصل بودن کالا</p>
                    </span>
                    <span>
                        <Image src={Productdetailfastdelivery} width={35}
                            height={35} alt='productimg' />
                        <p>ارسال رایگان بالای ۵۰۰,۰۰۰ تومان</p>
                    </span>
                    <span>
                        <Image src={Productdetailgive} width={35}
                            height={35} alt='productimg' />
                        <p>ضمانت بازگشت کالا 7 روزه</p>
                    </span>
                    <span>
                        <Image src={Productdetailreceipt} width={35}
                            height={35} alt='productimg' />
                        <p style={{ backgroundColor: 'rgb(215, 71, 144 ,0.4)' }}>مشاوره رایگان بگیرید</p>
                    </span>
                </div>

                <div className={styles.pricebox}>
                    <span className={styles.spanprice}>قیمت : {toPersianDigits(product.price)} ریال</span>

                    <div className={styles.countlikebox}>
                        <span className={styles.likeicon}>
                            <Image src={Heart} width={35}
                                height={35} alt='productimg' />
                        </span>

                        <div className={styles.countbox}>
                            <span onClick={() => increase()} style={{ cursor: 'pointer' }}>+</span>
                            <p>
                                {count}
                            </p>
                            <span onClick={() => decrease()} style={{ cursor: 'pointer' }}>-</span>
                        </div>
                    </div>
                    {(product.in_stock === '0' || product.in_stock === null) ? <p>کالا موجود نیست</p> : <p onClick={addtocart} className={styles.bascketbtn}>افزودن به سبد خرید</p>}
                </div>
            </div>
        </>
    );
}



export default Productbascketbar;
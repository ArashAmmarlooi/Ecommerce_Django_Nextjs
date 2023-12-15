'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image"
import Product from "app/product/[id]/page";
import styles from './cart.module.scss';
import { toPersianDigits } from '../../src/utils/javascript'
import Productdetailfastparcel from '../../public/assets/productdetailfastparcel.svg';

// import { useAppDispatch, useAppSelector } from "../../redux/hooks";
let product;








export default function Cart() {
    let [count, setCount] = useState(1)
    let [cart, setCart] = useState<any>([]);


    function increase() {
        console.log(cart.count);
        // if (count < cart.count) setCount(count => count += 1)
        setCount(count => count += 1)

    }
    function decrease() {
        setCount(count => Math.max(count - 1, 1))
    }

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart") as any))
        console.log(cart);
    }, [])
    console.log(cart);
    var sum = cart.reduce((sum, card) => sum + Number(card.price), 0);
    console.log(sum);
    return (
        <>
            <h1 style={{ fontSize: '20px', marginRight: '65px' }}>سبد خرید</h1>
            <section className={styles.cartsection}>
                <div className={styles.productcontent}>
                    {cart && cart.map(elem =>
                        <>
                            <div className={styles.cartcontent}>
                                <div className={styles.imagecontent} key={elem.id}>{<Image src={elem.image} width={65} height={65} alt='' />}</div>

                                <div className={styles.speccontent}>
                                    <div>{elem.name}</div>
                                    <div style={{ display: 'flex', direction: 'rtl', gap: '10px', alignItems: 'center', opacity: '0.4', fontSize: '12px' }}>
                                        <Image src={Productdetailfastparcel} width={20} height={20} alt='' /><p>تضمین اصل بودن کالا </p>
                                    </div>
                                    <div className={styles.countcontent}>
                                        <span>
                                            <p>تعداد</p>
                                            <div className={styles.countbox}>
                                                <span onClick={() => increase()} style={{ cursor: 'pointer' }}>+</span>
                                                <span>
                                                    {elem.count}
                                                </span>
                                                <span onClick={() => decrease()} style={{ cursor: 'pointer' }}>-</span>
                                            </div>
                                        </span>
                                    </div>
                                </div>

                                <div className={styles.pricebox}>
                                    <p>مبلغ محصول : 12323 ریال</p>
                                    <p>مبلغ کل : 11231 ریال</p>
                                </div>
                            </div>
                        </>
                    )}

                </div>
                <div className={styles.pricecontent}>
                    <h2 style={{ fontSize: '20px', marginRight: '30px' }}>جزییات  پرداخت</h2>
                    <div>
                        <p>مبلغ کل: {toPersianDigits(sum)} ریال</p>
                        <p>تخفیف</p>
                        <p>هزینه ارسال : رایگان</p>
                    </div>
                    <div>
                        <p style={{ color: 'rgb(223, 64, 223)' }}>قابل پرداخت : {toPersianDigits(sum)} زیال </p>
                    </div>
                    <p className={styles.bascketbtn}>ثبت سفارش</p>
                </div>

            </section>
        </>
    )
}
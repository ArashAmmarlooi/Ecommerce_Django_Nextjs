'use client'
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image"
import Product from "app/product/[id]/page";
import styles from './cart.module.scss';
import { toPersianDigits } from '../../src/utils/javascript';
import Productdetailfastparcel from '../../public/assets/productdetailfastparcel.svg';
import Shopbascket from '../../public/assets/shopbascket.svg';
import { cartSlice } from "src/redux/slice/cartSLice";

// import { useAppDispatch, useAppSelector } from "../../redux/hooks";
let product;
let newCart;
let p;
let sumtotal;
let sumproducts;




function Productsum(addminoscount, price) {
    let multi = Number(addminoscount) * Number(price)
    return toPersianDigits(multi)
}

export default function Cart() {
    let ref = useRef(null);

    let [cart, setCart] = useState<any>([]);
    let [sumproducts, setSumproducts] = useState<any>(0);
    // let [count, setCount] = useState(cart.addminoscount)
    // console.log(count);

    function Sumproducts(sumproducts, p) {
        let arr: any = [];
        let engarr: any = []
        if (p) {
            p.forEach(elem =>
                arr.push(elem.textContent.match(/[۰۱۲۳۴۵۶۷۸۹]/g).join(""))
            )
            arr.forEach(elem => {
                engarr.push(elem.replace(/[۰۱۲۳۴۵۶۷۸۹]/g, d => d.charCodeAt(0) - 1776))
            });
            let sumproduct = engarr.reduce((acc, elem) => acc + Number(elem), 0)
            setSumproducts(sumproduct)
            // arr.push(p.textContent)
            // let numb = Number(p.textContent.match(/\d/g).join(""));
            // numb = numb.join("");
            // sum += numb
            // console.log(numb);
            // console.log(sum);
        }
    }

    function increase(e) {


        const index = cart.findIndex(obj => {
            return obj.id == e.currentTarget.dataset.id;
        });
        if (cart[index].addminoscount < cart[index].productcount) {
            const updatedCart = { ...cart[index], addminoscount: cart[index].addminoscount++ };
            const newCart = [...cart];
            setCart(newCart)
            localStorage.setItem("cart", JSON.stringify(newCart));

        }
    }
    function decrease(e) {
        const index = cart.findIndex(obj => {
            return obj.id == e.currentTarget.dataset.id;
        });
        const updatedCart = { ...cart[index], addminoscount: cart[index].addminoscount-- };
        newCart = [...cart];
        setCart(newCart)

        if (cart[index].addminoscount < 1) {
            newCart.splice(index, 1);
            setCart(newCart)
            localStorage.setItem("cart", JSON.stringify(newCart));
        }

    }

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart") as any))
    }, [])

    useEffect(() => {
        p = document.querySelectorAll('#totalsum') as any;
        Sumproducts(sumproducts, p)
    }, [p, cart])
    // if (cart) sum = cart.reduce((sum, card) => sum + Number(card.price), 0);
    return (
        <>
            <h1 style={{ fontSize: '20px', marginRight: '65px' }}>سبد خرید</h1>
            <section className={styles.cartsection}>
                <div className={styles.productcontent}>
                    {cart && cart.length != 0 ? cart.map((elem, index) =>
                        <>
                            <div key={elem.id} className={styles.cartcontent}>
                                <div className={styles.imagecontent} key={elem.id}>{<Image src={elem.image} width={65} height={65} alt='' />}</div>

                                <div className={styles.speccontent}>
                                    <div>{elem.name}</div>
                                    <div style={{ display: 'flex', direction: 'rtl', gap: '10px', alignItems: 'center', opacity: '0.4', fontSize: '12px' }}>
                                        <Image src={Productdetailfastparcel} width={20} height={20} alt='' /><p>تضمین اصل بودن کالا </p>
                                    </div>
                                    <div className={styles.countcontent}>
                                        <span>
                                            <p>تعداد</p>
                                            <div key={elem.id} className={styles.countbox}>
                                                <span data-id={elem.id} onClick={increase} style={{ cursor: 'pointer' }}>+</span>
                                                <span ref={ref} data-id={elem.id}>
                                                    {elem.addminoscount}
                                                </span>
                                                <span data-id={elem.id} onClick={decrease} style={{ cursor: 'pointer' }}>-</span>
                                            </div>
                                        </span>
                                    </div>
                                </div>

                                <div className={styles.pricebox}>
                                    <p>مبلغ محصول : {toPersianDigits(elem.price)} ریال</p>
                                    <p data-id={index} id='totalsum'>مبلغ کل : {Productsum(elem.addminoscount, elem.price)} ریال</p>
                                </div>
                            </div>
                        </>
                    ) : <div className={styles.noproduct}><Image src={Shopbascket} width={80} height={80} alt="" /><p >محصولی در سبد وجود ندارد</p></div>}

                </div>

                <div className={styles.pricecontent}>
                    <div className={styles.pricecbox}>
                        <h2 style={{ fontSize: '20px', marginRight: '30px' }}>جزییات  پرداخت</h2>
                        <div >
                            <p>مبلغ کل:{toPersianDigits(sumproducts)} ریال</p>
                            <p>  تخفیف : </p>
                            <p>هزینه ارسال : رایگان</p>
                            <p>مالیات : </p>
                        </div>
                        <div>
                            <p style={{ color: 'rgb(223, 64, 223)' }}>قابل پرداخت : {toPersianDigits(sumproducts)} زیال </p>
                        </div>
                    </div>
                    <div className={styles.bascketbtnwrraper}>
                        <p className={styles.bascketbtn}>ثبت سفارش</p>
                    </div>
                </div>
            </section>
        </>
    )
}

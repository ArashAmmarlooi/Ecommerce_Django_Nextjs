'use client'
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation';
import styles from './breadcrump.module.scss';
import Add from '../../../public/assets/Add.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
let arr: any = [];
let newArr;
let id = 0;

function addcart(dataproducts, index, elem, count) {
    console.log(dataproducts);
    if (dataproducts[index].id == elem.id) {
        let existeditem = arr.find(item => item.productid == dataproducts[index].id)
        console.log(existeditem);
        if (existeditem) {
            const indexarr = arr.findIndex(item => item.productid == dataproducts[index].id)
            console.log(indexarr);
            const updatedCart = { ...arr[indexarr], addminoscount: arr[indexarr].addminoscount++ };
            newArr = [...arr];
            console.log(newArr);
            console.log(arr);

        }
        else {
            arr.push({
                'id': id++,
                'productid': dataproducts[index].id,
                'name': dataproducts[index].name,
                'price': dataproducts[index].price,
                'image': dataproducts[index].image,
                'productcount': dataproducts[index].count,
                'addminoscount': count
            })
            console.log(arr);

        }
        toast(`محصول به سبد اضافه شد ${arr.length}`);
        localStorage.setItem("cart", JSON.stringify(arr)) as any;
    }

}
// }

const Addtocart = (props) => {

    console.log(props);
    let [count, setCount] = useState(1)
    const router = useRouter();
    const path = usePathname();
    let { dataproducts } = props
    let { index } = props
    let { elem } = props
    console.log(elem);
    useEffect(() => {
        console.log(props);

    }, [])
    return (
        <>
            <p>افزودن به سبد</p>
            <Image
                onClick={() => addcart(dataproducts, index, elem, count)}
                src={Add}
                width={30}
                height={30}
                alt=""
            />
            <ToastContainer />
        </>
    )
}

export default Addtocart;
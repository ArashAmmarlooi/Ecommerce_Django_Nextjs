'use client'
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { useSearchParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../../src/redux/hooks";
import queryString from 'query-string';
import { usePathname } from 'next/navigation'
import { ParsedUrlQuery } from "querystring";
import { useRouter } from 'next/navigation';
import { store } from "src/redux/store";
import Link from "next/link";
import { fetchProduct, productSlice } from "../../../src/redux/slice/productslice";
import styles from './filtercomp.module.scss';
import Chevron from '../../../public/assets/chevron.png';
import Add from '../../../public/assets/Add.png';
import Star from '../../../public/assets/Star.svg';

let pelem: any;
let subelem: any;
interface Params extends ParsedUrlQuery {
    slug: string;
}
let category;
let product;
let state: Boolean = false;


function toggle(list, div) {
    list.forEach(item => {
        // item.nextSibling.style.height = '0px'
        // item.nextSibling.style.removeProperty('height');
        // arr = item.nextSibiling
        console.log(item, 'item');
        // item.nextSibiling.style.removeProperty('height');
        item.onclick = (e) => {
            state = !state
            console.log(state, 'state');
            item.nextSibling.style.transition = 'all 0.2s ease-in'
            if (state) {
                item.nextSibling.style.height = '0px';
            }
            else {
                item.nextSibling.style.removeProperty('height');
                // item.nextSibiling.style.height = '20px'
                item.nextSibling.style.removeProperty('overflow');
            }
        }
    })
}

function deletefilters() {

}

function closefilter() {
    let filterblur = document.querySelector('.filterblur') as any;
    let filterwrapper = document.querySelector('.products_filterwrapper__9OMlw') as any;
    document.body.style.overflow = 'auto';
    filterblur.style.display = 'none'
    filterwrapper.style.display = 'none';
}




const FilterComp = (props) => {
    const [width, setWidth] = useState(0)

    console.log(props, ' props in filter component ');
    console.log(props.params);
    const router = useRouter();
    console.log(router, 'router');
    const pathname = usePathname()
    console.log(store.getState());
    const searchParams = useSearchParams()
    console.log(searchParams);

    const dispatch = useAppDispatch()
    const [allBrands, setAllBrands] = useState<any>([]);

    // category = useAppSelector(state => state.category.category);
    // product = useAppSelector(state => state.product.product);
    const product = props.product
    const { category } = props.category
    console.log(category);
    console.log(product);
    const onCheckBoxChange = (e: any) => {
        // e.preventDefault();
        let checkboxes = document.querySelectorAll("input[type='checkbox']:checked") as any;
        // console.log(checkboxes[0].value);
        let string: string = 'brand';
        let stringified;
        let object: object = {};
        let arr: any = []
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].value !== 'in_stock' && checkboxes[i].value !== 'discount') {
                arr.push(checkboxes[i].value)
                object[`${string}`] = arr
            }
            else if (checkboxes[i].value == 'in_stock') {
                object[checkboxes[i].value] = 1
            }
            else if (checkboxes[i].value == 'discount') {
                object[checkboxes[i].value] = 1

            }
        }
        // query = queryString.stringify({ brand })
        console.log(object);
        stringified = queryString.stringify(object);
        if (props.params.length > 1) router.replace(`/products/${props.params[0]}/${props.params[1]}/?${stringified}`)
        if (props.params.length == 1) router.replace(`/products/${props.params[0]}/?${stringified}`)

    };


    function allbrands() {
        let prod = product.map(elem => elem.brand).filter((value, index, array) => array.indexOf(value) === index)
        return prod
    };

    useEffect(() => {
        const list = document.querySelectorAll<any>('.filtercomp_acardeon__SMqL_ span');
        const div = document.querySelectorAll<any>('.filtercomp_acardeon__SMqL_ div');
        setAllBrands(allbrands);
        // dispatch(fetchProduct(props.product))
        toggle(list, div)
        allbrands()

    }, [])
    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener("resize", onResize)
        }
    }, [setWidth])

    //and then
    useEffect(() => {

        let filterwrraper = document.querySelector('.products_filterwrapper__9OMlw') as any;
        if (width > 1100) {
            console.log(filterwrraper);
            // filterwrraper.style.display = 'block';
        } else if (width < 1100) {
            // filterwrraper.style.display = 'none';

        }


    }, [width]);


    return (
        <>
            <div className={styles.filtercontent}>
                <span style={{ borderBottom: '1px solid rgb(201, 201, 201)' }}>
                    <h1>فیلتر ها</h1>
                    <span style={{ borderBottom: '1px solid #gray' }}> {searchParams.size !== 0 && <p onClick={deletefilters} className={styles.filterdelete}>حذف فیلتر ها X</p>}</span>
                    <p onClick={closefilter} className={styles.closefilter}>x</p>
                </span>

                <div className={styles.acardeon}>
                    <span>
                        <p>دسته بندی</p>
                        <Image
                            src={Chevron}
                            width={17}
                            height={13}
                            alt="Follow us on Twitter"
                        />
                    </span>
                    <div className={styles.categorydiv} id='1'>
                        {category != undefined && category.map(elem =>
                            <Link key={elem.id} style={{ color: pathname === `/products/${encodeURIComponent(elem.slug)}` ? 'rgb(223, 64, 223)' : 'gray' }} href={`/products/${elem.slug}`}>
                                {elem.name}
                            </Link>

                        )}
                    </div>
                </div>

                <div className={styles.acardeon}>
                    <span>
                        <p>برند</p>
                        <Image
                            src={Chevron}
                            width={17}
                            height={13}
                            alt=""
                        />
                    </span>
                    <div id='2'>
                        {allBrands.map((elem, index) =>
                            <label className={styles.container} > {elem}
                                <input
                                    type="checkbox"
                                    name={elem}
                                    id={index}
                                    value={elem}
                                    onChange={e => onCheckBoxChange(e)}
                                // checked={elem === radioState}// notice checked here
                                />
                            </label>
                        )}
                    </div>
                </div>

                <div className={styles.acardeon}>
                    <span>
                        <p>محدوده قیمت</p>
                        <Image
                            src={Chevron}
                            width={17}
                            height={13}
                            alt=""
                        />
                    </span>
                    <div id='3'>
                        <div className={styles.slidecontainer}>
                            <input type="range" min="1" max="100" value="50" className={styles.slider} id="myRange" />
                            <p className={styles.pricerangep}>محدوده قیمت: <span id="demo"></span></p>
                        </div>
                    </div>
                </div >

                <span>
                    <p>کالاهای موجود</p>
                    <label className={`${styles.toggle} ${styles.label}`}>
                        <input value='in_stock' onChange={onCheckBoxChange} type="checkbox" className={styles.toggleinput} />
                        <div className={styles.togglecontrol}></div>
                    </label>

                </span>
                <span>
                    <p>تخفیف دار</p>
                    <label className={`${styles.toggle} ${styles.label}`}>
                        <input value='discount' onChange={onCheckBoxChange} type="checkbox" className={styles.toggleinput} />
                        <div className={styles.togglecontrol}></div>
                    </label>
                </span>
                {/* <span>
                    <p>برند ها</p>
                    <Image
                        src={Chevron}
                        width={20}
                        height={15}
                        alt="Follow us on Twitter"
                    />
                </span> */}
            </div >

        </>
    )
}

export default FilterComp;
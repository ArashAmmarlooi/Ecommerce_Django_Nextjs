'use client'
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';



const FilterBlur = (props) => {
    const router = useRouter()
    const path = usePathname()
    console.log(router);
    console.log(path);
    useEffect(() => {
        let filterblur = document.querySelector('.filterblur') as any;
        filterblur.style.display = 'none';
        document.body.style.overflow = 'auto'

    }, [path])

    return (
        <>
            <div className='filterblur'></div>
        </>
    )
}

export default FilterBlur;
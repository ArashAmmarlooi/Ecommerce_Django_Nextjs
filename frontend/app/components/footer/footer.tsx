import React from "react";
import Link from "next/link";
import Image from 'next/image';
import Logotype from '../../../public/assets/Logotype.svg'
import Shape from '../../../public/assets/Shape.svg'
import Instagram from '../../../public/assets/instagram.svg'
import Site from '../../../public/assets/site.svg'
import Whatsapp from '../../../public/assets/whatsapp.svg'
import Telegram from '../../../public/assets/telegram.svg'

import Styles from "./footer.module.scss";



const Footer = () => {
    return (
        <>
            <section className={Styles.footer}>
                <div className={Styles.logocont}>
                    <Image
                        className={Styles.logo}
                        src={Logotype}
                        width={180}
                        height={80}
                        alt=""
                    />
                    <span className={Styles.topbtn}>
                        <p>بازگشت به بالا</p>
                        <Image
                            src={Shape}
                            width={10}
                            height={10}
                            alt=""
                        />
                    </span>
                </div>

                <div className={Styles.textfooter}>
                    <span>تلفن پشتیبانی : 021 - 1234567</span>
                    <span>.روز هفته ، 24 ساعته پاسخگوی شما هستیم7 </span>
                </div>

                <div className={Styles.socialcont}>
                    <h3> با ما همراه باشید...</h3>
                    <span>
                        <Image
                            src={Instagram}
                            width={20}
                            height={20}
                            alt=""
                        />
                        <Image
                            src={Site}
                            width={20}
                            height={20}
                            alt=""
                        />
                        <Image
                            src={Whatsapp}
                            width={20}
                            height={20}
                            alt=""
                        />
                        <Image
                            src={Telegram}
                            width={20}
                            height={20}
                            alt=""
                        />
                    </span>
                </div>
            </section>
        </>
    );
};
export default Footer;
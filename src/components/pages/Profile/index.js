import {PageLayout} from '../../common';
import React from 'react';
import 'swiper/swiper-bundle.min.css';
import {Helmet} from 'react-helmet-async';

export default function Profile() {
    return (
        <PageLayout>
            <Helmet>
                <title>پروفایل</title>
                <link rel="canonical" href="https://www.tacobell.com/"/>
            </Helmet>

            <section>
                پروفایل...
            </section>
        </PageLayout>
    )
}

import {PageLayout} from '../common';
import React from 'react';
import 'swiper/swiper-bundle.min.css';
import {Helmet} from 'react-helmet-async';

export default function Explore() {
    return (
        <PageLayout>
            <Helmet>
                <title>اکسپلور</title>
                <link rel="canonical" href="https://www.tacobell.com/"/>
            </Helmet>

            <section>
                اکسپور...
            </section>
        </PageLayout>
    )
}

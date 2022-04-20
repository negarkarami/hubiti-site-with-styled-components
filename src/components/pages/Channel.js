import {PageLayout} from '../common';
import React from 'react';
import 'swiper/swiper-bundle.min.css';
import {Helmet} from 'react-helmet-async';

export default function Channel() {
    return (
        <PageLayout>
            <Helmet>
                <title>کانال</title>
                <link rel="canonical" href="https://www.tacobell.com/"/>
            </Helmet>

            <section>
                کانال...
            </section>
        </PageLayout>
    )
}

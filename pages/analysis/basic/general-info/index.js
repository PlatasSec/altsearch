import Head from 'next/head'
import React from 'react'
import SarchNav from '../../../../components/analysis/SearchNav'

export default function Index() {

    return (
        <>
            <Head>
                <title>Analysis - General Info</title>
            </Head>

            <SarchNav />
            <GeneralInfo />
        </>

    )

}
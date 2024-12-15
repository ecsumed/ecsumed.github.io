"use client"

import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/three_background'),
  { ssr: false }
)

export default function Page() {
    return (

        <div className="">
            <DynamicComponentWithNoSSR />
        </div >
    )
}


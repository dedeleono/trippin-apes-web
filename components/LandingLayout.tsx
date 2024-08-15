import React, { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href='../public/favicon.ico' rel='favicon' />
        <meta
            name="description"
            content="A community-first PFP project on Solana, backed by strong and ownable branding, cheeky storytelling, innovative long-term utility, and a passionate community of free-thinking degens."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content="Trippin' Ape Tribe" />
        <meta name="og:description" content="A community-first PFP project on Solana, backed by strong and ownable branding, cheeky storytelling, innovative long-term utility, and a passionate community of free-thinking degens." />
        <meta name="og:image" content="https://trippin-apes-web.vercel.app/imgs/Bg1.jpeg" />
        <meta name="twitter:image" content="https://trippin-apes-web.vercel.app/imgs/Bg1.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TrippinApeNFT" />
        <meta name="twitter:creator" content="@TrippinApeNFT" />
    </Head>
      {children}
  </>
)

export default Layout

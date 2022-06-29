import React, { PropsWithChildren } from 'react'
import { Navigation } from './Navigation'
import { Footer } from './Footer'

const Layout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}

export default Layout

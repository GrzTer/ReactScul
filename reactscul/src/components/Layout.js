import Header from './header'
import { Outlet } from 'react-router'
import Footer from './footer'

const Layout = () => {
  return (
    <>
      <Header />
      <>
        <Outlet />
      </>
      <Footer />
    </>
  )
}

export default Layout

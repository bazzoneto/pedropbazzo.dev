import Header from 'components/Header/mobile'
import Footer from 'components/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout

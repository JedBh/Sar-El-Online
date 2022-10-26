import Navbar from './Navbar'
import Footer from './Footer'

const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout

import Cart from "../Components/IconGroup/CartIcon/Cart"
import Footer from "../Pages/Footer/Footer"
import Header from "../Pages/Header/Header"
import Body from "../Pages/Web_Body/Body"


function Layout() {
  return (
    <div className="max-[660px]:px-3">
      <Header />
      <Body />
      <div>
        <div className="fixed right-4 top-1/3 min-[377px]:hidden"><Cart className='bg-slate-700' /></div>
      </div>
      <Footer />
    </div>

  )
}

export default Layout
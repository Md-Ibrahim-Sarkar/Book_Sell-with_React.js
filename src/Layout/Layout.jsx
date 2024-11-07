import Cart from "../Components/IconGroup/CartIcon/Cart"
import Footer from "../Pages/Footer/Footer"
import Header from "../Pages/Header/Header"
import Body from "../Pages/Web_Body/Body"


function Layout() {
  return (
    <div className="">
      <Header />
      <div className="max-[660px]:px-3 ">
      <Body />
      <Footer />
      </div>
    </div>

  )
}

export default Layout
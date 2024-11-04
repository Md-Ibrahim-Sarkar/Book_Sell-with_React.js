import Cart from "../Components/IconGroup/CartIcon/cart"
import Header from "../Pages/Header/Header"
import Body from "../Pages/Web_Body/Body"


function Layout() {
  return (
    <div>

      <Header />
      <Body />

      <div>
        <div className="fixed right-4 top-1/2 min-[639px]:hidden"><Cart /></div>
      </div>

    </div>

  )
}

export default Layout
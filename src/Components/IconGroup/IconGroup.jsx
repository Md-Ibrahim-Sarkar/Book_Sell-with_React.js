import Cart from "./CartIcon/cart"
import Notification from "./NotificationIcon/Notification"
import ModeToggle from "./ThemeToggleIcon/ModeToggle"


function IconGroup() {
  return (
    <div className="flex gap-4">

      <Notification />
      <ModeToggle />
      <Cart className='max-[640px]:hidden' />

    </div>
  )
}

export default IconGroup
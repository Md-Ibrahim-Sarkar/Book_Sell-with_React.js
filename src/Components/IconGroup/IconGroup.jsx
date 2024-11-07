import Cart from "./CartIcon/Cart"
import Notification from "./NotificationIcon/Notification"
import ModeToggle from "./ThemeToggleIcon/ModeToggle"


function IconGroup() {
  return (
    <div className="flex gap-4">

      <Notification className='max-[377px]:hidden hover:scale-110' />
      <ModeToggle className='hover:scale-110' />
      <Cart className=' hover:scale-110' />

    </div>
  )
}

export default IconGroup
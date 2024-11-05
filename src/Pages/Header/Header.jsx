
import IconGroup from "../../Components/IconGroup/IconGroup";

function Header() {
  return (
    <div className="border-b border-[#595959]">
      <div className="container mx-auto md:px-3">
        <div className="flex justify-between py-5 items-center max-[655px]:px-3">
          <div>
            <span className="text-main-Color text-2xl font-semibold cursor-pointer ">DivineBook</span>
          </div>
          <IconGroup />
        </div>
      </div>
    </div>
  )
}

export default Header
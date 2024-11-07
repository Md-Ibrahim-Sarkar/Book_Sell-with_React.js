
import { RiMenuSearchLine } from "react-icons/ri";
import { TbFilterUp } from "react-icons/tb";




function MobileToggle() {



  return (
    <div className='flex relative justify-between  container mx-auto px-1 min-[540px]:hidden py-3 border-b border-[#595959]'>
      <RiMenuSearchLine className='w-10 h-6' />
      <TbFilterUp onClick={()=> setonOpen(true)} className='w-10 h-6' />

    </div>
  )
}

export default MobileToggle
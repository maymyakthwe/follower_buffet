import Logo from '@/assets/Logo.png'
import Links from '@/components/Links'
import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/types';
import { Bars3Icon} from '@heroicons/react/16/solid';
import { useState } from 'react';


type Props = {
    selectedPage:SelectedPage;
    setSelectedPage:(value:SelectedPage)=>void;
}

const Navbar = ({selectedPage,setSelectedPage}: Props) => {

  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)")
  const [toggleMenu,setToggleMenu] = useState<boolean>(false)

  return (
    <div className='z-[100] w-full flex items-center  bg-color-nav text-color-text text-[22px] sticky top-0'>
        <div className='w-full flex items-center justify-between py-2'>
            {/* Logo Image */}
                <img className='w-[120px] pl-8 md:pl-4' src={Logo} alt="" />
            {/* Nav Links */}

            {isAboveMediumScreen?<div className='pr-8'>
                <div className='flex items-center justify-between gap-6'>
                  <Links page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                  <Links page="Pricing" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                  {/* <Links page="Question" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> */}
                  <Links page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                </div>
            </div>:
            <div className='pr-4'>
              <Bars3Icon className='h-8 w-8 p-1 rounded bg-color-text text-white'
              onClick={()=>setToggleMenu(!toggleMenu)}/> 
              {toggleMenu?
              <div className='absolute top-[100%] right-0 h-max pb-0 border-2 flex gap-4  bg-color-nav rounded'>
                  <div className='h-max flex flex-col items-center justify-between '>
                    <div className='border-b-2   w-[150px] h-[50px]'>
                      <Links page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    </div>
                    <div className='border-b-2   w-[150px] h-[50px]'>
                      <Links page="Pricing" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    </div>
                    {/* <div className='border-b-2   w-[150px] h-[50px]'>
                      <Links page="Question" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    </div> */}
                    <div className=' w-[150px] h-[50px]'>
                      <Links page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    </div>
                  </div>
                </div>:<div></div>}
            
            </div>}
            
        </div>
    </div>
  )
}

export default Navbar
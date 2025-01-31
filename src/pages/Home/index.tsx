import { SelectedPage } from '@/types';
import HomeGrapgic from '@/assets/HomeGraphic.png'
import btmLogo1 from '@/assets/btmLogo1.jpg'
import btmLogo2 from '@/assets/btmLogo2.jpg'
import btmLogo3 from '@/assets/btmLogo3.jpg'
import btmLogo4 from '@/assets/btmLogo4.jpg'
import btmLogo5 from '@/assets/btmLogo5.jpg'
import btmLogo6 from '@/assets/btmLogo6.jpg'
import btmLogo7 from '@/assets/btmLogo7.jpg'
import btmLogo8 from '@/assets/btmLogo8.jpg'
import btmLogo9 from '@/assets/btmLogo9.jpg'
import {  motion} from 'framer-motion';

const imgArray : Array<string> =[
  btmLogo1,
  btmLogo2,
  btmLogo3,
  btmLogo4,
  btmLogo5,
  btmLogo6,
  btmLogo7,
  btmLogo8,
  btmLogo9,
]



type Props = {
    setSelectedPage:(value:SelectedPage)=>void;
}

const Home = ({setSelectedPage}: Props) => {

  return (
    <section id='home' className={'bg-gradient-135 from-color-bg-left to-color-bg-right h-[700px] w-full portrait:sm:h-[100vh] portrait:h-[850px]'}>
      <motion.div className={'h-full'}
      onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}>
        {/* Top */}
          <div className={'h-1/2 relative portrait:h-1/3'}>
          {/* Top-Text */}
            <div 
            className={'absolute bottom-0 p-2 sm:pl-10 md:pl-24 pb-8 w-1/2  sm:text-left text-center portrait:sm:w-3/4 portrait:w-full'}>
              <motion.div className='text-5xl xl:text-7xl pb-6 portrait:lg:text-7xl portrait:md:5xl  portrait:sm:4xl'
              initial="hidden"
              whileInView="visible"
              viewport={{once:true,amount:0.5}}
              transition={{duration:0.5}}
              variants={{
                  hidden:{opacity:0,x:-50},
                  visible:{opacity:1,x:0}
              }}>BUY FOLLOWERS FAST & EASY</motion.div>
              <motion.div className='text-2xl xl:text-4xl portrait:lg:text-4xl portrait:md:2xl  portrait:sm:xl'
              initial="hidden"
              whileInView="visible"
              viewport={{once:true,amount:0.5}}
              transition={{delay:0.2,duration:0.5}}
              variants={{
                  hidden:{opacity:0,x:-50},
                  visible:{opacity:1,x:0}
              }}>Follower Buffet by Chick Charms</motion.div>
            </div>
          </div>
        {/* Bottom */}
        <div className={'bg-color-bottom-bg rounded-t-[50px] h-1/2 relative portrait:h-2/3'}>
          <div className={'flex p-2 sm:pl-10 md:pl-24 relative portrait:flex-col'}>
            <motion.div
            className='text-white md:text-2xl pt-8 portrait:md:pb-16 pb-10 sm:text-left text-center'
            initial="hidden"
            whileInView="visible"
            viewport={{once:true,amount:0.5}}
            transition={{delay:0.4,duration:0.5}}
            variants={{
                hidden:{opacity:0,x:-50},
                visible:{opacity:1,x:0}
            }}>
              The best social media marketing page
            </motion.div>
            <img className=
              'absolute xl:w-[500px] md:w-[400px] xl:bottom-[-100px] xl:right-[100px] lg:bottom-[-60px] lg:right-[60px] bottom-[-0px] right-[0px] portrait:static portrait:lg:w-[500px] portrait:md:w-[400px]  w-[300px] mx-auto' 
              src={HomeGrapgic} alt="" />
          </div>
          <div className={'flex gap-24 absolute lg:bottom-[10px] bottom-[50px] w-full overflow-hidden'}>
            <motion.div 
              initial={{x:"0"}}
              animate={{x: "-100%"}}
              transition={{duration:15,ease:'linear'}}
              className='flex flex-shrink-0 gap-12 lg:gap-24 '>
              {imgArray.map((img,index)=>{
                return <img src={img} key={index} alt='logo-img' 
                className=' w-[60px] lg:w-[100px] rounded-full'/>
              })}
            </motion.div>
            <motion.div 
              initial={{x:"0"}}
              animate={{x: [0, "-100%", "-200%"]}}
              transition={{duration:30,repeat:Infinity,ease:'linear'}}
              className='flex flex-shrink-0 gap-12 lg:gap-24 '>
              {imgArray.map((img,index)=>{
                return <img src={img} key={index} alt='logo-img' 
                className=' w-[60px] lg:w-[100px] rounded-full'/>
              })}
            </motion.div>
            <motion.div 
              initial={{x:"0"}}
              animate={{x: ["-100%", "-200%" ,"-300%"]}}
              transition={{delay:15,duration:30,repeat:Infinity,ease:'linear'}}
              className='flex flex-shrink-0 gap-12 lg:gap-24 '>
              {imgArray.map((img,index)=>{
                return <img src={img} key={index} alt='logo-img' 
                className=' w-[60px] lg:w-[100px] rounded-full'/>
              })}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Home
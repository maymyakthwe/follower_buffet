
import { SelectedPage } from '@/types';
import {  motion} from 'framer-motion';


type Props = {
    setSelectedPage:(value:SelectedPage)=>void;
}


const Question = ({setSelectedPage}: Props) => {
  return (
    <section id='contact' className='w-full h-max min-h-[1000px] bg-color-bottom-bg flex items-center relative text-white'>
      <motion.div
      className={'w-full py-24  text-center'}
      onViewportEnter={()=>setSelectedPage(SelectedPage.Contact)}>
      
      {/* headline */}
      <motion.h1 className='text-4xl mb-6'
        initial="hidden"
        whileInView="visible"
        viewport={{once:true,amount:0.5}}
        transition={{duration:0.5}}
        variants={{
            hidden:{opacity:0,y:50},
          visible:{opacity:1,y:0}
        }}>
        Contact <span className='text-color-text-hover'>Us</span>
      </motion.h1>
      <motion.p className='text-xl mx-8 lg:mx-[120px] xl:mx-[200px] text-color-white-07'
        initial="hidden"
            whileInView="visible"
            viewport={{once:true,amount:0.5}}
            transition={{delay:0.2,duration:0.5}}
            variants={{
                hidden:{opacity:0,y:50},
              visible:{opacity:1,y:0}
            }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi magni beatae maxime provident omnis architecto hic tempore, molestiae ex, aperiam rem quia, illum illo excepturi perferendis? Harum, exercitationem. Cumque, placeat!</motion.p>
      {/* content */}
      <div className='lg:flex-row flex flex-col items-center justify-center mt-20'>
        {/* left content */}
        <div className='lg:w-1/2 lg:pl-20 xl:pl-40 mb-16 lg:mb-0'>
          {/* name */}
          <motion.div   className='w-[300px] lg:w-[350px] xl:w-[400px] h-[50px] mb-8'
            initial="hidden"
            whileInView="visible"
            viewport={{once:true,amount:0.5}}
            transition={{delay:0.2,duration:0.5}}
            variants={{
                hidden:{opacity:0,y:50},
              visible:{opacity:1,y:0}
            }}>
              <input type="text" id='name' className='bg-color-nav text-color-black-03 w-full rounded-md p-4 ' placeholder='Name'/>
          </motion.div>
          {/* email */}
          <motion.div  className='w-[300px] lg:w-[350px] xl:w-[400px] h-[50px] mb-8'
            initial="hidden"
            whileInView="visible"
            viewport={{once:true,amount:0.5}}
            transition={{delay:0.2,duration:0.5}}
            variants={{
                hidden:{opacity:0,y:50},
              visible:{opacity:1,y:0}
            }}>
              <input type="email" id='name' className='bg-color-nav text-color-black-03 w-full rounded-md p-4 mb-8' placeholder='Email'/>
          </motion.div>
          {/* message */}
          <motion.div  className='w-[300px] lg:w-[350px] xl:w-[400px]  mb-8'
            initial="hidden"
            whileInView="visible"
            viewport={{once:true,amount:0.5}}
            transition={{delay:0.2,duration:0.5}}
            variants={{
                hidden:{opacity:0,y:50},
              visible:{opacity:1,y:0}
            }}>
              <textarea className='bg-color-nav w-full text-color-black-03 rounded-md p-4 ' rows={5} cols={5} name="" id=""></textarea>
          </motion.div>
          {/* submit */}
          <motion.div  className='w-[300px] lg:w-[350px] xl:w-[400px]  mb-8'
            initial="hidden"
            whileInView="visible"
            viewport={{once:true,amount:0.5}}
            transition={{delay:0.2,duration:0.5}}
            variants={{
                hidden:{opacity:0,y:50},
              visible:{opacity:1,y:0}
            }}>
            <button className='bg-color-text-hover text-white w-full py-2 rounded-xl mb-2'>
              Submit
            </button>
          </motion.div>
        </div>

          {/* right content */}
          <div className='w-2/3 lg:w-1/2 text-start text-lg lg:pl-12'>
            {/* location */}
          <motion.div className='flex items-center mb-16'
            initial="hidden"
            whileInView="visible"
            viewport={{once:true,amount:0.5}}
            transition={{delay:0.2,duration:0.5}}
            variants={{
                hidden:{opacity:0,y:50},
              visible:{opacity:1,y:0}
            }}>
             {/* logo */}
             <div className='my-2 mx-4 text-color-text-hover'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
             </div>
             {/* text */}
             <div>
              <h3 className='text-color-text-hover'>Location:</h3>
              <p >123 Maple Lane, Springfield, MA, 01103, USA</p>
             </div>
          </motion.div>
          {/* email */}
          
            <motion.div className='flex items-center mb-16'
              initial="hidden"
              whileInView="visible"
              viewport={{once:true,amount:0.5}}
              transition={{delay:0.2,duration:0.5}}
              variants={{
                  hidden:{opacity:0,y:50},
                visible:{opacity:1,y:0}
              }}>
             {/* logo */}
             <div className='my-2 mx-4 text-color-text-hover'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
             </div>
             {/* text */}
             <div>
              <h3 className='text-color-text-hover'>Email:</h3>
              <p >johndoe123@example.com</p>
             </div>
          </motion.div>
        
          {/* phone Number */}
          
             <motion.div className='flex  items-center mb-16'
               initial="hidden"
            whileInView="visible"
            viewport={{once:true,amount:0.5}}
            transition={{delay:0.2,duration:0.5}}
            variants={{
                hidden:{opacity:0,y:50},
              visible:{opacity:1,y:0}
            }}>
             {/* logo */}
             <div className='my-2 mx-4 text-color-text-hover'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>

             </div>
             {/* text */}
             <div>
              <h3 className='text-color-text-hover'>Phone:</h3>
              <p >+1 (555) 123-4567</p>
             </div>
          </motion.div>
          </div>
          </div>
        
      </motion.div>
    </section>
  )
}

export default Question

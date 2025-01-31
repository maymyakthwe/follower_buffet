// import { SelectedPage } from '@/types';
import { motion } from 'framer-motion';


const Footer = () => {

  return (
    <section id='footer' className='h-max bg-color-bottom-bg-08'>
      <motion.div className='w-full h-full bg-color-off-100 lg:flex justify-between text-color-white-07 pt-24 pb-12 pl-8 lg:pl-0'>
       {/* logo div */}
       <div className=' mb-16 lg:my-0 lg:basis-1/4 px-8'>
          <h1 className='text-2xl mb-2 lg:mb-6 font-bold tracking-wide'>FOLLOWER BUFFET</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
       </div>
       {/* subscribe */}
       <div className=' mb-16 lg:my-0 lg:basis-1/4 px-8'>
       <p>Consectetur adipisicing elit Dicta consequuntur optio, nisi architecto earum asperiores, dolores sequi ullam.</p>
       <div>
        <input type="text" className='bg-color-white-05 rounded-sm px-2 my-4 mr-2' placeholder='Enter your email...'/>
        <button className='bg-color-text px-2 rounded-sm'>Subscribe</button>
        </div>
       </div>
       {/* links */}
        <div className='  lg:my-0 lg:basis-1/4 px-8'>
                <h4 className='font-bold'>Links</h4>
                <p className='my-4'> Duod tempore ab quam provident</p>
                <p className='my-4'> Quam provident vitae accusamus</p>
                <p> Huam provident vitae accusamus</p>
            </div>

       </motion.div>
    </section>
  )
}

export default Footer
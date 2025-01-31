import { SelectedPage } from '@/types';
import { motion } from 'framer-motion';
import PricingPlan from './PricingPlan';
import { plans } from './plan';

type Props = {
    setSelectedPage:(value:SelectedPage)=>void;
}

const Pricing = ({setSelectedPage}: Props) => {

  return (
    <section id='pricing' className='h-max min-h-[900px] bg-color-bottom-bg flex items-center relative '>
      <motion.div className='w-full py-24'
       onViewportEnter={()=>setSelectedPage(SelectedPage.Pricing)}>
       
        {/* Heading */}
        <div className='text-center pb-16 text-white flex flex-col gap-8'>
          <motion.h1 className='text-5xl'
          initial="hidden"
          whileInView="visible"
          viewport={{once:true,amount:0.5}}
          transition={{duration:0.5}}
          variants={{
              hidden:{opacity:0,y:50},
              visible:{opacity:1,y:0}
          }}>CHOOSE YOUR PLAN</motion.h1>
          <motion.p className='text-xl text-color-white-07'
            initial="hidden"
            whileInView="visible"
            viewport={{once:true,amount:0.5}}
            transition={{delay:0.2,duration:0.5}}
            variants={{
                hidden:{opacity:0,y:50},
              visible:{opacity:1,y:0}
            }}>We Guarantees the Best Quality & Price</motion.p>
        </div>
        {/* each plan */}
        <div className='flex flex-wrap gap-4 w-full justify-center'>
          {plans.map((plan,index)=>{
            return <PricingPlan plan={plan} key={index} number={index}/>
          })}
        </div>
      </motion.div>
    </section>
  )
}

export default Pricing
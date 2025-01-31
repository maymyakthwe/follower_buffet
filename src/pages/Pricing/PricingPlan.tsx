import { StarIcon } from '@heroicons/react/16/solid'
import { Plan } from "@/types"
import { motion } from 'framer-motion'

type Props = {
    plan:Plan
    number:number
}

const PricingPlan = ({plan,number}: Props) => {
  const delay=(number*0.2)+0.2;

  return (
    <motion.div className='bg-color-off-100 p-8 rounded-md  basis-[300px] h-max'
          initial="hidden"
          whileInView="visible"
          viewport={{once:true,amount:0.5}}
          transition={{delay: delay ,duration:0.5}}
          variants={{
              hidden:{opacity:0,y:50},
              visible:{opacity:1,y:0}
          }}>
            <div className='text-white'> 
              {/* title */}
              <div className='text-2xl font-bold'>{plan.title}</div>
              {/* line */}
              <div className='border-color-text-hover border-2 w-2/3 mt-4 mb-6 '></div>
              {/* price */}
              <div className='text-sm md:text-base'><span className='text-3xl font-bold'> {plan.price} </span> mmk </div>
              {/* features */}
              <div className='mt-4  text-color-white-07'>
                <li className='mt-2 flex gap-4 items-center'>
                  <span className='rounded-full bg-color-text-hover w-[6px] h-[6px]'></span> 
                  Followers : 
                  <span className='flex font-bold '>
                    1000
                  </span>
                </li>
                <li className='mt-2 flex gap-4 items-center'>
                  <span className='rounded-full bg-color-text-hover w-[6px] h-[6px]'></span> 
                  Quality : 
                  <span className='flex font-bold text-color-text-hover'>
                    {plan.star.map(()=>( <StarIcon className='w-[12px]'/> ))}
                  </span>
                </li>
                <li className='mt-2 flex gap-4 items-center'>
                  <span className='rounded-full bg-color-text-hover w-[6px] h-[6px]'></span> 
                  Time : 
                  <span className='flex font-bold '>
                    {plan.time}days
                  </span>
                </li>
                <li className='mt-2 flex gap-4 items-center'>
                  <span className='rounded-full bg-color-text-hover w-[6px] h-[6px]'></span> 
                  Drop Rate: 
                  <span className='flex font-bold '>
                    {plan.dropRate}%
                  </span>
                </li>
                <li className='mt-2 flex gap-4 items-center'>
                  <span className='rounded-full bg-color-text-hover w-[6px] h-[6px]'></span> 
                  Guarantee: 
                  <span className='flex font-bold '>
                    {plan.guarantee}
                  </span>
                </li>
               
              </div>
            </div>
          </motion.div>
  )
}

export default PricingPlan
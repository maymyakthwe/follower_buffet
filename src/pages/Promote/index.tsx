import PromoteGraphic from '@/assets/PromoteGraphic.jpeg'
import {  motion} from 'framer-motion';


const Promote = () => {
  return (
    <section id='promote' className='w-full h-max min-h-[1000px] bg-color-bottom-bg-08 flex items-center relative'>
      <motion.div
      className={'w-full py-24 flex '}
      >
        {/* left content */}
        <div className='xl:w-3/5'>
          {/* prmote headline */}
          <motion.h1 className=' md:w-[500px] text-4xl px-12 xl:pl-24 text-white'
            initial="hidden"
            whileInView="visible"
            viewport={{once:true,amount:0.5}}
            transition={{delay:0.2,duration:0.5}}
            variants={{
                hidden:{opacity:0,x:-50},
                visible:{opacity:1,x:0}
            }}>
            Built for Small Business Owners like you</motion.h1>
          {/* boxes */}
            <motion.div className='flex justify-start py-12 xl:py-24 text-white pl-12 xl:pl-20 flex-wrap '
             initial="hidden"
                    whileInView="visible"
                    viewport={{once:true,amount:0.5}}
                    transition={{duration:0.4}}
                    variants={{
                        hidden:{opacity:0,x:-50},
                        visible:{opacity:1,x:0}
                    }}>

              {/* each-box */}
              <div className='xl:basis-[290px] basis-[350px] lg:pr-6 xl:px-4 py-8 grow'>
                {/*logo*/}
                <div className='text-white p-4 rounded-md border-2 border-white w-max '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
                </div>
                {/* mini-headline */ }
                <div className='text-2xl py-4'>
                  Boost Credibility
                </div>
                {/* text */}
                <div className='text-color-white-07'>
                  For influencers, a higher follower count enhances their perceived authority and attracts brand collaborations.
                </div>
              </div>


              {/* each-box */}
              <div className='xl:basis-[290px] basis-[350px] lg:pr-6 xl:px-4 py-8 grow'>
                {/*logo*/}
                <div className='text-white p-4 rounded-md border-2 border-white w-max '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                </svg>
                </div>
                {/* mini-headline */ }
                <div className='text-2xl py-4'>
                  Expand Network
                </div>
                {/* text */}
                <div className='text-color-white-07'>
                  For professionals, a strong follower base builds industry connections and boosts career opportunities.
                </div>
              </div>


              {/* each-box */}
              <div className='xl:basis-[290px] basis-[350px] lg:pr-6 xl:px-4 py-8 grow'>
                {/*logo*/}
                <div className='text-white p-4 rounded-md border-2 border-white w-max '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                </svg>
                </div>
                {/* mini-headline */ }
                <div className='text-2xl py-4'>
                  Increase Reach
                </div>
                {/* text */}
                <div className='text-color-white-07'>
                  For small businesses, more followers amplify visibility, driving customer engagement and potential sales.
                </div>
              </div>


              {/* each-box */}
              <div className='xl:basis-[290px] basis-[350px] lg:pr-6 xl:px-4 py-8 grow'>
                {/*logo*/}
                <div className='text-white p-4 rounded-md border-2 border-white w-max '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
                </div>
                {/* mini-headline */ }
                <div className='text-2xl py-4'>
                  Enhance Presence
                </div>
                {/* text */}
                <div className='text-color-white-07'>
                For artists, a larger audience showcases talent to more people, increasing chances of recognition.
                </div>
              </div>
            </motion.div>
        </div>
          {/* right content*/}
          <motion.div className='w-2/5 h-full  justify-center items-center hidden xl:inline' 
            initial="hidden"
            whileInView="visible"
            viewport={{once:true,amount:0.5}}
            transition={{duration:0.6}}
            variants={{
                hidden:{opacity:0,x:-50},
                visible:{opacity:1,x:0}
            }}>
            {/* wrapper */}
            <div className='xl:ml-12 xl:w-[400px] h-full lg:w-[350px]  bg-white rounded-lg overflow-hidden border-2 border-white' >
            <img className='cursor-pointer object-cover transition duration-500 hover:scale-110' src={PromoteGraphic} alt="Question-Graphic" />
            </div>
          </motion.div>
      </motion.div>
    </section>
  )
}

export default Promote

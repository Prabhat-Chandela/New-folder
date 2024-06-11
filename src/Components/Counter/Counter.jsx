import React from "react"
import CountUp from "react-countup";
import { motion as m } from "framer-motion"

function Counter() {

    return (
        <div
            className='grid grid-cols-3 gap-2'>

            <div className='col-span-1 bg-transparent flex flex-col items-center gap-1 overflow-hidden ' >
                <h2 className="text-black font-robotoBold text-[4vw] drop-shadow-md">
                    <CountUp
                        start={0}
                        end={50}
                        duration={2.75}
                    /><mark className="bg-transparent text-red-600">+</mark>
                </h2>
                <h4 className="text-xs font-robotoMedium lg:tracking-[0.3vw] drop-shadow-xl">
                    STORIES OF <mark className="bg-transparent text-red-600">LEADERS</mark>
                </h4>


            </div>

            <div className='col-span-1 bg-transparent flex flex-col items-center gap-1 overflow-hidden'>
                <h2 className="text-black font-robotoBold text-[4vw] drop-shadow-md">
                    <CountUp
                        start={0}
                        end={65}
                        duration={2.75}
                    /><mark className="bg-transparent text-red-600">K+</mark>
                </h2>
                <h4 className="text-xs font-robotoMedium lg:tracking-[0.3vw] drop-shadow-xl">
                    EMAIL <mark className="bg-transparent text-red-600">SUBSCRIBERS</mark>
                </h4>

            </div>

            <div className='col-span-1 bg-transparent flex flex-col items-center gap-1 overflow-hidden'>
                <h2 className="text-black font-robotoBold text-[4vw] drop-shadow-md">
                    <CountUp
                        start={0}
                        end={1}
                        duration={2.75}
                    /><mark className="bg-transparent text-red-600">M+</mark>
                </h2>
                <h4 className="text-xs font-robotoMedium lg:tracking-[0.3vw] drop-shadow-xl">
                    LEADS <mark className="bg-transparent text-red-600">GENERATED</mark>
                </h4>

            </div>

        </div>
    )
}

export default Counter
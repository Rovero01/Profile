import { useState } from "react";
import { MdOutlineExpandMore } from "react-icons/md";
import logo from '../Assets/png/plus hospital.jpg'
import { TbLayoutDashboardFilled,TbProgressCheck  } from "react-icons/tb";
import { BsGraphUpArrow, BsPeopleFill } from "react-icons/bs";
import { LuFiles } from "react-icons/lu";
import { RiProgress6Line } from "react-icons/ri";
import { MdRateReview,MdGroups,MdFactCheck,MdSpeakerNotes,MdGroupAdd    } from "react-icons/md";
import { FaPeopleRoof } from "react-icons/fa6";




export default function Pms(){
    let [trig, setTrig] = useState({
        more:true,
        sidebar:0
    })

    let [datax,setDatax]= useState({
        numbers: generateData()
    })

    function generateData(){
        return [
            [Math.round(Math.random()*48),Math.round(Math.random()*48),Math.round(Math.random()*48),Math.round(Math.random()*48)],
            [Math.round(Math.random()*48),Math.round(Math.random()*48),Math.round(Math.random()*48)]
        ]
    }

    let dataTop = [
        [
            {name: 'On Progress',icon:<RiProgress6Line color="red" size={25}/>},{name: 'Manager Review',icon:<MdRateReview color="red" size={25}/>},
            {name: 'Ready to Review',icon:<TbProgressCheck  color="red" size={25}/>},{name: 'In Review Meeting',icon:<MdGroups  color="red" size={25}/>},
        ],
        [ 
            {name: 'Doing Performance',icon:<MdSpeakerNotes  color='green' size={25}/>},{name: 'Done Performance',icon:<MdFactCheck  color='green' size={25}/>},
            {name: 'All Eligible',icon:<MdGroupAdd  color='green' size={25}/>},{name: 'Total All',icon:<FaPeopleRoof color='green' size={25}/>},
        ]
    ]

    let mapper = ['No','FULL NAME', 'DEPARTMENT','POSITION','LEVEL','MANAGER','STATUS', 'REFRESH']

    let x ='flex w-fit items-center gap-2 py-2 text-xl ml-1 h-fit duration-300 ease-in'
    let x1 ='translate-x-4 border-l-4 border-green-500 px-7'
    let x2 ='hover:translate-x-4 hover:bg-gray-50 px-10 cursor-pointer'

    return <div className="flex h-full">
        <div className={` ${trig.more? 'w-[15%]':'w-[2%]'} overflow-hidden h-screen border-1 ease-in-out duration-500`}>
                     <div className="flex justify-end p-2"><span onClick={()=>setTrig({...trig, more : !trig.more})}
                     className={`${trig.more ? 'rotate-90' : '-rotate-90'} duration-500 cursor-pointer`}><MdOutlineExpandMore size={25} /></span>
                     </div>
            <div className={`flex flex-col font-semibold ${trig.more? 'opacity-100':'opacity-0'} duration-300`}>
                    
            <div className="flex justify-center"><img src={logo} alt="logo" width={300}/></div>
            <div className={`${x} mt-7 ${trig.sidebar === 0 ? x1 : x2}`}> <TbLayoutDashboardFilled /> Dashboard</div>
            <div className={`${x} mt-3 ${trig.sidebar === 1 ? x1 : x2}`}> <BsPeopleFill /> Employee</div>
            <div className={`${x} mt-3 ${trig.sidebar === 2 ? x1 : x2}`}> <LuFiles /> Master Data</div>
            <div className={`${x} mt-3 ${trig.sidebar === 3 ? x1 : x2}`}> <BsGraphUpArrow /> Performance</div>
            </div>

        </div>

        <div className={` ${trig.more ? 'w-[85%]' : 'w-[98%]'} border ease-in-out duration-500 flex flex-col`}>

            {/* topbar */}
            <div className="flex justify-end h-[8%]">
                <div className="flex gap-5 p-3 mr-3">
                    <div className="flex items-center font-semibold text-xl text-white bg-red-500 px-2 py-3 rounded-full">HRS</div>
                    <div className="flex flex-col gap-2 font-semibold cursor-pointer">
                        <div className="flex items-center gap-2"> <span>Harvey Reginald Specter</span> <MdOutlineExpandMore size={20}/> </div>
                        <span>Senior Partner</span>
                    </div>
                </div>
            </div>

            {/* body */}
            <div className="bg-sky-50 h-[92%] w-full flex flex-col px-10 py-3">
                    {/* part 1 */}
                    <div className="flex flex-col bg-white p-8 gap-8 rounded-lg shadow-md">
                        <div className="flex flex-col gap-2 w-full">
                            <span className="text-2xl">Hi, Harvey Reginald Specter</span>
                            <span className="text-sm">Welcome to Performance Management System</span>
                        </div>
                        <div className=" rounded-lg w-fit px-3 py-2 bg-red-500 text-white cursor-pointer">
                            Start Performance Review
                        </div>
                    </div>

                    {/* part 2 */}

                    <div className="flex flex-col mt-10">
                        
                        <div className="flex gap-5 items-center">
                            <span className="text-xl font-bold">Performance Period :</span>
                            <select onChange={()=> setDatax({...datax, numbers: generateData()})} className="rounded-md border border-gray-300 shadow-md" name="years" id="years">
                                {Array(3).fill(null).map((data,index)=>{
                                    return <option value={`${new Date().getFullYear()-index}`}>{new Date().getFullYear()-index}</option>
                                })}
                            </select>
                        </div>

                        {dataTop.map((data2,index2)=>{
                            return <div className="flex gap-2">{data2.map((data,idx)=> <div className={`flex gap-5 my-2 items-center border border-gray-300 rounded-lg p-4 w-1/4
                                bg-white`}>
                                {data.icon}
                                <div className="flex flex-col">
                                    <span className="text-lg font-semibold">{ datax.numbers[index2][idx] ? datax.numbers[index2][idx] : datax.numbers.reduce((a,b)=> a + b.reduce((c,d)=> c+d ,0) ,0) }</span>
                                    <span className="text-sm opacity-60">Employees</span>
                                    <span className="text-lg font-semibold">{data.name}</span>
                                
                                </div>
                            </div>)}</div>
                        }
                        )}

                        <div className="flex flex-col mt-10 gap-5">
                            <span className="text-xl font-bold">Company Performance Status</span>
                            <div className="flex flex-col">
                                <div className="flex "></div>
                            </div>
                        </div>

                    </div>

            </div>
        </div>
    </div>
}
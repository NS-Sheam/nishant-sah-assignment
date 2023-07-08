import { BiSolidContact } from "react-icons/bi";
import SearchSection from "./SearchSection";
import { FaAngleDown, FaAngleRight, FaSearch } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import LeftTable from "./LeftTable";
import RightTop from "./RightTop";
import RightDown from "./RightDown";

const Home = () => {
    return (
        <div className="w-full">
            <SearchSection />
            <p className="text-xl bg-slate-200 text-blue-400 py-2 font-bold text-center shadow-xl">Name</p>
            <div className="py-2 flex flex-col lg:flex-row items-start">
                <div className="lg:w-1/3 w-full py-4">
                    <div className="flex items-center justify-between p-2 gap-2 my-2 shadow-md">
                        <div className="p-1 text-red-600 bg-red-200 w-10 h-10 text-xl px-2 rounded-full flex justify-center items-center"><BiSolidContact /></div>
                        <div>
                            <p className="font-bold text-xl">Import Parties</p>
                            <p>Use contact from your phone or gmail to create parties </p>
                        </div>
                        <FaAngleRight className="text-2xl text-blue-600" />
                    </div>
                    <div className="flex items-center justify-between my-2">
                        <div className="p-1 text-slate-600 bg-slate-200 w-10 h-10 text-2xl rounded-full flex justify-center items-center"><FaSearch /></div>
                        <div className="dropdown">
                            <label tabIndex={0} className="btn m-1 bg-yellow-500 font-bold text-white"><AiOutlinePlus /> Add Party <FaAngleDown /></label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                    </div>
                    <LeftTable />
                </div>
                <div className="lg:w-2/3 py-4 px-2">
                    <RightTop />
                    <RightDown />
                </div>
            </div>
        </div>
    );
};

export default Home;
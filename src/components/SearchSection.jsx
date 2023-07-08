import { AiFillPlusCircle, AiFillSetting } from "react-icons/ai";
import { BiLogoWhatsapp } from "react-icons/bi";

const SearchSection = () => {
    return (
        <div className="flex flex-col lg:flex-row w-full gap-2">
            <input type="text" placeholder="Search Transection" className="input lg:w-1/2 text-xl" />
            <div className="lg:w-1/2">
                <div className="flex gap-2 flex-wrap justify-end">
                    <button className="w-36 shadow-lg flex justify-center items-center font-bold px-3 py-2 rounded-full bg-red-300 text-red-600"><AiFillPlusCircle /> Add Sale</button>
                    <button className="w-36 shadow-lg flex justify-center items-center font-bold px-3 py-2 rounded-full bg-blue-300 text-blue-600"><AiFillPlusCircle /> Add Sale</button>
                    <button className="w-36 shadow-lg flex justify-center items-center font-bold px-3 py-2 rounded-full bg-white text-blue-600"><AiFillPlusCircle /> Add Sale</button>
                    <div className="indicator relative text-3xl text-slate-400">
                        <div className="h-2 w-2 rounded-full bg-red-600 absolute right-0 top-0"></div>
                        <div className="grid place-items-center"><BiLogoWhatsapp /></div>
                    </div>
                    <div className="indicator relative text-3xl text-slate-400">
                        <div className="h-2 w-2 rounded-full bg-red-600 absolute right-0 top-0"></div>
                        <div className="grid place-items-center"><AiFillSetting /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchSection;
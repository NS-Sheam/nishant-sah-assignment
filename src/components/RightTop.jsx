import { AiOutlineMail, AiOutlineMessage } from "react-icons/ai";
import { BiAlarmAdd, BiLogoWhatsapp, BiRupee } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";

const RightTop = () => {
    return (
        <div className="flex justify-between items-start px-2">
            <div className="space-y-1">
                <h3 className="text-xl font-bold">Kps Sanhula</h3>
                <p className="">Phone: 82828282</p>
                <p className="flex justify-start items-cente gap-2">Email: <span className="text-blue-500 flex items-center justify-center gap-1"><AiOutlineMail /> Add Email ID</span></p>
                <p className="flex justify-start items-center gap-2">No Cradit Limit Set: <span className="text-blue-500 flex items-center justify-center gap-1"><BiRupee /> Set Cradit Limit</span></p>
            </div>
            <div className="text-right space-y-1">
                <div className="text-3xl flex items-center justify-end gap-2">
                    <AiOutlineMessage className="text-yellow-500" />
                    <div className="indicator relative text-green-400">
                        <div className="h-2 w-2 rounded-full bg-red-600 absolute right-0 top-0"></div>
                        <div className="grid place-items-center"><BiLogoWhatsapp /></div>
                    </div>
                    <BiAlarmAdd className="text-slate-400" />
                </div>
                <p className="">Phone: 82828282</p>
                <p className="flex justify-start items-center gap-2">Gstin: <span className="text-blue-500 flex items-center justify-center gap-1"><BsBoxSeam /> Add GSTIN</span></p>
            </div>
        </div>
    );
};

export default RightTop;
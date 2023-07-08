import { AiOutlineFilter } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";

const LeftTable = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table text-xl">
                {/* head */}
                <thead>
                    <tr className="uppercase">
                        <th className="flex items-center justify-center gap-1"><FaArrowUp />Party &nbsp; <AiOutlineFilter className="text-red-600" /></th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr className="bg-base-200">
                        <td>KPS Sanhula</td>
                        <td className="flex items-center justify-center gap-2"><span className="text-green-400">2.360.00</span> <BsThreeDotsVertical className="text-slate-400"/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default LeftTable;
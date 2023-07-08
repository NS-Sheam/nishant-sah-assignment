import { AiOutlineFilter } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa";

const RightDown = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th><span className="flex items-center justify-between">Type <AiOutlineFilter /></span></th>
                        <th><span className="flex items-center justify-between">Number <AiOutlineFilter /></span></th>
                        <th><span className="flex items-center justify-between"><FaArrowDown /> Date <AiOutlineFilter /></span></th>
                        <th><span className="flex items-center justify-between">Total <AiOutlineFilter /></span></th>
                        <th><span className="flex items-center justify-between">Balance <AiOutlineFilter /></span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>3</th>
                        <td>Sale</td>
                        <td>1</td>
                        <td>30/06/2023</td>
                        <td><span className="flex items-center"><BiRupee /> 2,360.00</span></td>
                        <td><span className="flex items-center"><BiRupee /> 2,360.00</span></td>
                        <td><BsThreeDotsVertical /></td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td>Sale</td>
                        <td>2</td>
                        <td>30/06/2023</td>
                        <td><span className="flex items-center"><BiRupee /> 814.00</span></td>
                        <td><span className="flex items-center"><BiRupee /> 0.00</span></td>
                        <td><BsThreeDotsVertical /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default RightDown;
import { AiFillBank, AiFillHome, AiFillWallet } from 'react-icons/ai';
import { BsFillCartFill, BsPeopleFill } from 'react-icons/bs';
import { BiSolidStore } from 'react-icons/bi';
import { GiNetworkBars } from 'react-icons/gi';
import { FaBars, FaCoins } from 'react-icons/fa';
import './App.css'
import { Link, Outlet } from 'react-router-dom'
import ActiveLink from './components/ActiveLink';
import whatsppImg from "./assets/whatsapp.png"

function App() {

  return (
    <div className="drawer lg:drawer-open">
      <label htmlFor="my-drawer-2" className="absolute m-4 right-0 drawer-button lg:hidden"><FaBars className="text-primaryBg" /></label>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center bg-white mt-10 lg:mt-0">
        <div className="flex w-full py-2">
          <div className="w-full lg:py-6 px-2">
            <Outlet />
          </div>
        </div>

      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        {/* Sidebar content here */}
        <div className="overflow-y-auto">
          <ul className="menu p-4 w-80 h-full bg-primaryBg text-white font-bold text-xl min-h-screen">
            <li className="text-3xl my-1 lg:py-3 lg:px-7">
              <Link to=""><div className='bg-white p-2 rounded-full'><AiFillHome className="text-red-500" /></div> <span className='hover:text-white'>Machinery</span>
              </Link></li>
              <div className='flex items-start justify-between gap-2 p-2 bg-green-900 my-1'>
                <div className='h-10 w-10'>
                  <img src={whatsppImg} alt="" />
                </div>
                <div>
                  <p className='text-green-500'>Your Personal Messenger</p>
                  <p className='text-white text-base font-normal'>Integrate Whatsapp to automatic transition messaging.</p>
                </div>
              </div>
            <li className="my-1">
              <ActiveLink to={`/`}><BsPeopleFill /> Parties
              </ActiveLink></li>
            <li className="my-1">
              <ActiveLink to="/orders"><FaCoins /> sales
              </ActiveLink></li>
            <li className="my-1">
              <ActiveLink to="/stats"><BsFillCartFill /> Parchase
              </ActiveLink></li>
            <li className="my-1">
              <ActiveLink to="/finance"><AiFillWallet /> Expences
              </ActiveLink></li>
            <li className="my-1 dropdown">
              <label tabIndex={0} className="hover:bg-bgHover hover:text-white lg:py-4 lg:px-7 lg:rounded-2xl"><AiFillBank /> Cash & Bank</label>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 bg-primaryBg">
                <li className='hover:bg-bgHover hover:rounded-lg my-1'><ActiveLink>Bank Account</ActiveLink></li>
                <li className='hover:bg-bgHover hover:rounded-lg my-1'><ActiveLink>Cash in hand</ActiveLink></li>
                <li className='hover:bg-bgHover hover:rounded-lg my-1'><ActiveLink>Chaques</ActiveLink></li>
                <li className='hover:bg-bgHover hover:rounded-lg my-1'><ActiveLink>Loan Account</ActiveLink></li>
              </ul>
            </li>
            <li className="my-1">
              <ActiveLink to="/login"><BiSolidStore /> My Online Store
              </ActiveLink></li>
            <li className="my-1">
              <ActiveLink to="/login"><BiSolidStore /> My Online Store
              </ActiveLink></li>
            <li className="my-1">
              <ActiveLink to="/login"><GiNetworkBars /> Report
              </ActiveLink></li>
          </ul>
        </div>


      </div>
    </div>
  )
}

export default App

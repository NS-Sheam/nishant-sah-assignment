import { NavLink } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const ActiveLink = ({to, children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive
                    ? "sidebar-li-style bg-bgHover"
                    : "sidebar-li-style hover:bg-bgHover hover:text-white"

            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;
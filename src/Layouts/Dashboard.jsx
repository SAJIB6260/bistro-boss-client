import { FaBars, FaBook, FaCalendar, FaHome, FaList, FaShoppingBag, FaShoppingCart, FaStar, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart();

    //TODO: Get isAdmin value  from the data base
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu p-4 uppercase font-medium space-y-2">
                   {
                    isAdmin ? 
                    <>
                    <li>
                        <NavLink to="/dashboard/adminHome">
                            <FaHome className="text-xl font-semibold"></FaHome>
                           Admin Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addItems">
                            <FaUtensils className="text-xl font-semibold"></FaUtensils>
                            add items
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manageItems">
                            <FaList className="text-xl font-semibold"></FaList>
                            manage items
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/bookings">
                        <FaBook className="text-xl font-semibold"></FaBook>
                            Manage Bookings
                        </NavLink>
                    </li>
                    <li>

                        <NavLink to="/dashboard/users">
                            <FaUsers className="text-xl font-semibold"></FaUsers>
                            all users
                        </NavLink>
                    </li>
                    </>
                    : 
                    <>
                     <li>
                        <NavLink to="/dashboard/userHome">
                            <FaHome className="text-xl font-semibold"></FaHome>
                            User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation">
                            <FaCalendar className="text-xl font-semibold"></FaCalendar>
                            reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/payment">
                            <FaWallet className="text-xl font-semibold"></FaWallet>
                            payment history
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart">
                            <FaShoppingCart className="text-xl font-semibold"></FaShoppingCart>
                            My Cart ({cart.length})
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review">
                            <FaStar className="text-xl font-semibold"></FaStar>
                            add review
                        </NavLink>
                    </li>
                    <li>

                        <NavLink to="/dashboard/bookings">
                            <FaBook className="text-xl font-semibold"></FaBook>
                            my booking
                        </NavLink>
                    </li>
                    </>
                   }
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome className="text-xl font-semibold"></FaHome>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu">
                            <FaBars className="text-xl font-semibold"></FaBars>
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                            <FaShoppingBag className="text-xl font-semibold"></FaShoppingBag>
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            <MdEmail className="text-xl font-semibold"></MdEmail>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard main part */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
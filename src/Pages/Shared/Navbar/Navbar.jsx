import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { LuShoppingCart } from "react-icons/lu";
import useCart from "../../../hooks/useCart";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart()

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>
        <li><Link to="/secret">Secret</Link></li>
        <li>
            <Link to="/dashboard/cart">
                <button className="btn">
                    <LuShoppingCart className="mr-2" />
                    <div className="badge badge-secondary">+{cart.length}</div>
                </button>
            </Link>
        </li>
        {
            user ? <>
                {/* <li><Link>{user?.displayName}</Link></li> */}
                <li onClick={handleLogOut} className="uppercase font-medium"><Link>LogOut</Link>
                </li>
            </> : <>
                <li><Link to="/login">Login</Link>
                </li></>
        }
    </>

    return (
        <>
            <div className="navbar sticky top-0 md:fixed z-10 text-white bg-opacity-80 bg-[#540409] md:bg-opacity-20 max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black bg-opacity-50 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-lg">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal items-center px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
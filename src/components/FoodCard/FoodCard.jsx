import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";



const FoodCard = ({item}) => {
    const { name, image, price, recipe, _id } = item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch ] = useCart();


    const handleAddToCart = () => {
        // console.log(food, user.email)
        if(user && user.email){
            // send cart item to the data base
            
            const cartItem = {
                menuId: _id,
                email: user.email,
                // eikhane ei duita rakhai e uchit baki gula item collection theke neya uchit kintu ei khane amra nibo mane copy kortesi/ duplicate kortesi junior level e kintu samne korbo na ba kora uchit na
                name,
                image,
                price
            }
            axiosSecure.post("/carts", cartItem)
            .then(res => {
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} Added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      // refetch cart
                      refetch();
                }
            })
        }
        else{
            Swal.fire({
                title: "You are not logged in",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
              }).then((result) => {
                if (result.isConfirmed) {
                  // send the user to the login page
                  // 1. navigate diye and 2. 
                  // login page giye login korar por ager page jawar jonno state add korte hoibo
                  navigate("/login", {state: {from: location}})
                  // navigate er state ta thik authprovider e jemne set kora ase oivabe kora lagbe ta na hoile kisu problem hobe
                }
              });
        }
    }

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-2 py-1 rounded-md bg-slate-800 text-white">$ {price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button
                    onClick={handleAddToCart} 
                    className="btn btn-outline uppercase bg-slate-100 text-orange-500 border-0 border-b-orange-500 border-b-4 mt-4"
                    >Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
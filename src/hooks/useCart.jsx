// API , axios (axios secure) , tan stack query

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useCart = () => {
    // tan stack query diye load korbo
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { refetch, data: cart=[] }= useQuery({
        queryKey: ["cart", user?.email ], // catch kore  "cart" uniq hoite hoibo array er moto deya valo
        // query fn er modhe chaile fetch korte pari (async , await) korte pari ba axios diye ow korte pari
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`) // server e jei nam e call korbo oita e dite hoibo and ei khane axios secure er modhe base url ase bole sudhu data base nam dile e hobe
            return res.data;
        }
    })
    return [cart, refetch]
};

export default useCart;
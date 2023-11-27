import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const axiosPublic = useAxiosPublic();
    const {googleSignIn} = useAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result => {
            console.log(result.user)
            const userInfo = {
                name : result.user?.displayName,
                email : result.user?.email
            }
            axiosPublic.post('/users' , userInfo)
            .then(res => {
                console.log(res.data)
                navigate("/")
            })
        })
    }
    return (
        <div className="px-8 py-4">
            <div className="divider">OR</div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn w-full">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
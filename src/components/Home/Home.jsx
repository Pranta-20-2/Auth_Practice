import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Home = () => {
    const user = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <p className=" text-4xl font-bold">This is Home Section</p>
            
        </div>
    );
};

export default Home;
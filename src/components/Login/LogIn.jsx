import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const LogIn = () => {
    const {loginUser} = useContext(AuthContext)
    const handleLogin = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        loginUser(email,password);
    }
    return (
        <div>
            <p>LogIn Page</p>
            <form onSubmit={handleLogin} className=" space-y-4 w-[40%] mx-auto min-w-[500px] border-2 border-red-500 p-2 rounded-xl">
                
                <div>
                    <p>Email:</p>
                    <input name="email" type="email" placeholder="Your email" className="input input-bordered w-full" />
                </div>
                <div>
                    <p>Password:</p>
                    <input name="password" type="password" placeholder="Your password" className="input input-bordered w-full" />
                </div>
                <button type="submit" className=" btn btn-primary w-full">LogIn</button>
            </form>
        </div>
    );
};

export default LogIn;
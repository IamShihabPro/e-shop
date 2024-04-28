import { Link } from "react-router-dom";
import googleImg from '../../../src/assets/Assets/google.png'

const Login = () => {
    return (
        <div className="bg-gray-800 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
                <h3 className="text-xl font-bold text-center mb-6">Hello <span className="text-red-500">Welcome 🙂</span> </h3>

                <form className="space-y-4">
                    <div>
                        {/* <label htmlFor="email" className="block text-gray-800">Email</label> */}
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter Your Email"
                            className="w-full px-4 py-3 border-b border-solid border-gray-400 focus:outline-none focus:border-b-red-500 text-md leading-7 text-gray-800"
                        />
                    </div>
                    <div>
                        {/* <label htmlFor="password" className="block text-gray-800">Password</label> */}
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter Your Password"
                            className="w-full px-4 py-3 border-b border-solid border-gray-400 focus:outline-none focus:border-b-red-500 text-md leading-7 text-gray-800"
                        />
                    </div>
                    <div>
                        <button className="w-full bg-red-500 px-4 py-2 text-white rounded-sm">Login</button>
                    </div>
                </form>

                <p className="text-gray-700 text-center mt-4">
                    Don't have an account? 
                    <Link to="/signup" className="ml-1 text-red-500 font-bold">Sign Up</Link>
                </p>

                <div>
                    <img src={googleImg} className="w-full h-12 mt-6 mx-auto cursor-pointer" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;

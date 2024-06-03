import React from 'react';

const Login = () => {
    return (
        <div className="h-screen bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1588264025576-a121a786e925?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8Q28yN3pPbjN6MDh8fGVufDB8fHx8fA%3D%3D')", margin: "2rem" }}>
            <div className="flex justify-end">
                <div className="bg-white h-full w-full lg:w-1/2 flex justify-center items-center">
                    <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
                        <form>
                            <div>
                                <span className="text-sm text-gray-900">Welcome back</span>
                                <h1 className="text-2xl font-bold">Login to your account</h1>
                            </div>
                            <div className="mt-5">
                                <label className="block text-md mb-2" htmlFor="password">Password</label>
                                <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="password" placeholder="password" />
                            </div>
                            <div className="my-3">
                                <label className="block text-md mb-2" htmlFor="email">Email</label>
                                <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" name="password" placeholder="email" />
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <input className="cursor-pointer" type="radio" name="rememberme" />
                                    <span className="text-sm">Remember Me</span>
                                </div>
                                <span className="text-sm text-blue-700 hover:underline cursor-pointer">Forgot password?</span>
                            </div>
                            <div>
                                <button className="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100">Login now</button>
                                <div className="flex space-x-2 justify-center items-end bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md transition duration-100">
                                    <img className="h-5 cursor-pointer" src="https://i.imgur.com/arC60SB.png" alt="" />
                                    <button>Or sign-in with google</button>
                                </div>
                            </div>
                        </form>
                        <p className="mt-8 text-center">Don't have an account? <span className="cursor-pointer text-sm text-blue-600">Join free today</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

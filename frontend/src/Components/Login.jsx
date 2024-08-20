// import React from 'react'

import FormButton from "./FormButton";
import FormInput from "./FormInput";

const Login = ({ setLogin }) => {
    return (
        <div>
            <FormInput label={"Email Address"} type={"email"} />
            <FormInput label={"Password"} type={"password"} />
            <a
                href="#"
                className="text-xs text-gray-500 hover:text-gray-900 block text-end w-full mt-2"
            >
                Forget Password?
            </a>

            <FormButton label={"Login"} />

            <div className="text-sm mt-4 flex items-center w-full text-center">
                <a
                    href="#"
                    className=" text-gray-500 capitalize text-center w-full"
                >
                    Don&apos;t have any account yet?
                    <span
                        className="text-blue-700"
                        onClick={() => setLogin((data) => !data)}
                    >
                        {" "}
                        Sign Up
                    </span>
                </a>
            </div>
        </div>
    );
};

export default Login;

// import React from 'react'

import FormButton from "./FormButton";
import FormInput from "./FormInput";

const SignUp = ({setLogin}) => {
    return (
        <div>
            <div>
                <FormInput label={"Name"} type={"text"} />
                <FormInput label={"Email Address"} type={"email"} />
                <FormInput label={"Password"} type={"password"} />
                <FormInput label={"Confirm Password"} type={"password"} />
                <FormInput label={"Upload Your Picture"} type={"file"} />

                <FormButton label={"SignUp"} />

                <div className="text-sm mt-5 text-center text-gray-500">
                    Already have an account? 
                    <a href="#" className="text-blue-700" onClick={() => setLogin((data) => !data)}> Login</a>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

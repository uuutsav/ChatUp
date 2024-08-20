/*
Color Palette
Bg - #FFFEF5
Pop Bg - #E3E7DA
Text - #355933
*/

import { useState } from "react";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";

const Home = () => {
    const [login, setLogin] = useState(false);

    return (
        <div className="flex items-center justify-center h-screen w-full bg-slate-300 px-5 sm:px-0 dark:bg-[#FFFEF5]">
            <div className="flex bg-[#E3E7DA] rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
                <div
                    className="hidden md:block lg:w-1/2 bg-cover"
                    style={{
                        backgroundImage: `url(https://www.tailwindtap.com//assets/components/form/userlogin/login_tailwindtap.jpg)`,
                    }}
                ></div>
                <div className="w-full p-8 lg:w-1/2">
                    <p className="text-5xl font-bold text-[#355933] text-center">
                        Chat-Up!
                    </p>
                    {login ? <Login setLogin={setLogin} /> : <SignUp setLogin={setLogin} />}
                </div>
            </div>
        </div>
    );
};

export default Home;

import React from "react";

const FormButton = ({label}) => {
    return (
        <div className="mt-8">
            <button className="bg-blue-700 text-[#E3E7DA] font-bold py-2 px-4 w-full rounded hover:bg-blue-600">
                {label}
            </button>
        </div>
    );
};

export default FormButton;

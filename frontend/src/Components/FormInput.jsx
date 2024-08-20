import React from "react";

const FormInput = ({label, placeholder, type}) => {

    return (
        <div className="mt-4">
            <label className="block text-[#172616] text-sm font-bold mb-1">
                {label}
            </label>
            <input
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type={type}
                required
            />
        </div>
    );
};

export default FormInput;

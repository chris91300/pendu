import React from "react";
import { InputProps } from "./input";

export default function Input(props: InputProps) {
    const { label, type, name, word, onChange, onFocus, error } = props;
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <div className="flex flex-col justify-center items-center p-2">
            <label className="mr-3 text-center text-[wheat]" htmlFor={name}>
                {label}
            </label>
            <input
                className="w-2/3 mt-3 pl-3 text-black font-bold rounded-lg"
                type={type}
                name={name}
                id={name}
                value={word}
                onChange={handleChange}
                onFocus={onFocus}
            />
            {error && (
                <p className="block text-red-500 bold">
                    le mot doit contenir uniquement des lettres sans accent.
                </p>
            )}
        </div>
    );
}

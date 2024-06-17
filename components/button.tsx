import React from 'react';

type Props = {
    text: string;
    width: string;
    border?: string;
    backgroundColor: string;
    textColor: string;
    iconColor: string;
    textSize: string;
    className?: string;
    onClick: () => void;
};

function Button({ text, width, border, backgroundColor, textColor, iconColor, textSize,className , onClick }: Props) {
    return (
        <button
            className={`flex ${width}  p-3 rounded-lg justify-between items-center ${border} ${textColor} bg-[${backgroundColor}] ${className}`}
            onClick={onClick}
        >
            <div className={` font-semibold ps-12 pe-4 ${textSize}`}>{text}</div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke={iconColor}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right me-2"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6-6 6" />
            </svg>
        </button>
    );
}

export default Button;
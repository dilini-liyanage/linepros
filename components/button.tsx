import React from 'react';
import Icon from './Icon';

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
    iconName: 'chevronRight';

};

function CustomButton({ text, width, border, backgroundColor, textColor, iconColor, textSize, className, onClick, iconName }: Props) {
    return (
        <button
            className={`flex ${width}  p-3 rounded-lg justify-between items-center ${border} ${textColor} bg-[${backgroundColor}] ${className}`}
            onClick={onClick}
        >
            <div className={` font-semibold ps-12 pe-4 ${textSize}`}>{text}</div>
            <Icon iconName={iconName} iconColor={iconColor} className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right me-2" />
        </button>
    );
}

export default CustomButton;
import React from 'react';

type IconName = 'chevronRight' | 'plus'; // Add more icon names as needed

type Props = {
    iconName: IconName;
    iconColor: string;
    className?: string;
    width?: number; // Optional width prop
    height?: number; // Optional height prop
};

const icons: Record<IconName, JSX.Element> = {
    chevronRight: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 6l6 6-6 6" />
        </svg>
    ),
    plus: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="96"
            height="96"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-plus"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 5l0 14" />
            <path d="M5 12l14 0" />
        </svg>
    ),
    // Add more icons here as needed
};

function Icon({ iconName, iconColor, className, width, height }: Props) {
    const IconSvg = icons[iconName];
    return (
        <div className={`${className}`} style={{ color: iconColor, width, height }}>
            {IconSvg}
        </div>
    );
}

export default Icon;

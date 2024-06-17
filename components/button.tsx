import React from 'react'

type Props = {
    text: string,
    border: string,
    backgroundColor: string,
    textColor: string,
    iconColor: string,
    textSize: string,
    onClick: () => void
}

function button({ text, border, backgroundColor, textColor, iconColor, onClick , textSize }: Props) {
    return (
        <button className={"flex w-72 mt-16 p-3 rounded-md justify-between " + border + " " + textColor+ " " + backgroundColor} onClick={()=>onclick()}>
            <div className={"font-bold ps-20 "+ textSize}>{text}</div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke={iconColor}
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
            </svg>
        </button>
    )
}

export default button
import React from "react";

const FILTERS_BTN = [
    {
        text: 'All',
        id: "all",

    },
    {
        text: 'Active',
        id: 'active',
    },
    {
        text: 'Completed',
        id: 'Completed'
    }
]

const Footer = ({ amount, activeFilter }) => {
    return (
        <div>
            <span>{`${amount} Task left`}</span>
            <div>
                {FILTERS_BTN.map(({ text, id }) => (
                    <button
                        key={id}
                        className={id === activeFilter ? "filter-btn active" : 'filter-btn'}
                    >{text}</button>
                ))}
            </div>
        </div>
    )
}

export default Footer
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

interface props {
    percentage?: number,
    title: string
}

const ProgressBar = ({ percentage = 0, title }: props) => {

    const [color, setColor] = useState('#0cce6b');

    useEffect(() => {
        if (percentage > 75 && percentage <= 100) return setColor('#0cce6b');
        if (percentage > 50 && percentage <= 75) return setColor('#ffa400');
        if (percentage > 0 && percentage <= 50) return setColor('#ff4e42');
    }, [percentage])

    return (
        <div className="box">
            <div className="percent">
                <svg>
                    <circle cx="60" cy="60" r="60"></circle>
                    <circle cx="60" cy="60" r="60" style={{
                        strokeDashoffset: `${(377 - (377 * percentage) / 100)}`,
                        stroke: `${color}`,
                        fill: `${color}`
                    }}></circle>
                </svg>
                <div className="number">
                    <h2 style={{ color }}>{percentage}</h2>
                </div>
            </div>
            <h2 className="title">{title}</h2>
        </div>
    )
}

export default ProgressBar

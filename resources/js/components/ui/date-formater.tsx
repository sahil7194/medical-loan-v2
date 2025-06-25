import React from 'react'

const DateFormatter = ({date}) => {
    return (
        <span className="block text-sm text-slate-800">
            {new Date(date).toLocaleString("en-IN", {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            })}
        </span>
    )
}

export default DateFormatter

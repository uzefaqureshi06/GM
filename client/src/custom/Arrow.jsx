import React from 'react'

const Arrow = ({ clr, bg}) => {
    return (
        <>
            <div style={{ background:`${clr}`}} className="circle">
                <span className="arrow1">
                    <img src={bg} style={{ rotate: "-45deg" }} />
                </span>
                <span className="arrow2">
                    <img src={bg} style={{ rotate: "-45deg" }} />
                </span>
            </div>

        </>
    )
}

export default Arrow

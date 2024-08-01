import React from 'react'

const Shimmer = () => {
    return (
        <div>
            <div style={{ display: "flex", gap: 6 }}>
                <input type="text" placeholder="search..." disabled={true} />
                <button disabled={true}>Search</button>
                <button className="filter-btn" disabled={true}>Top Restaurant</button>
            </div>
            <div className='shimmer-container'>
                <div className='shimmer-card'></div>
                <div className='shimmer-card'></div>
                <div className='shimmer-card'></div>
                <div className='shimmer-card'></div>
                <div className='shimmer-card'></div>
                <div className='shimmer-card'></div>
                <div className='shimmer-card'></div>
                <div className='shimmer-card'></div>
                <div className='shimmer-card'></div>
            </div>
        </div>
    )
}

export default Shimmer;

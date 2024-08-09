import React from 'react'

const Shimmer = ({ resId = false }) => {
    return (
        <div>
            {!resId ? <>
                <div style={{ display: "flex", gap: 6 }}>
                    <input type="text" placeholder="search..." disabled={true} />
                    <button disabled={true}>Search</button>
                    <button className="filter-btn" disabled={true}>Top Restaurant</button>
                </div>
                <div className='flex flex-wrap gap-3'>
                    <div className='w-60 h-96 bg-gray-200 m-3'></div>
                    <div className='w-60 h-96 bg-gray-200 m-3'></div>
                    <div className='w-60 h-96 bg-gray-200 m-3'></div>
                    <div className='w-60 h-96 bg-gray-200 m-3'></div>
                    <div className='w-60 h-96 bg-gray-200 m-3'></div>
                    <div className='w-60 h-96 bg-gray-200 m-3'></div>
                    <div className='w-60 h-96 bg-gray-200 m-3'></div>
                    <div className='w-60 h-96 bg-gray-200 m-3'></div>
                    <div className='w-60 h-96 bg-gray-200 m-3'></div>
                </div>
            </>
                :
                <div className="w-[50rem] rounded shadow-lg flex h-36 justify-between p-2 bg-white animate-pulse">
                    <div className="w-24 h-24 bg-gray-200 rounded-xl"></div>

                    <div className="px-6 py-4 justify-center gap-2 flex flex-col w-full">
                        <div className="w-3/4 h-6 bg-gray-200 rounded"></div>
                        <div className="flex items-center space-x-4 justify-end mt-4">
                            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                            <div className="w-8 h-8 bg-gray-200 rounded"></div>
                            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                        </div>
                        <div className="w-24 h-6 bg-gray-200 rounded mt-2 self-end"></div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Shimmer;

import React from 'react'

function SearchResults({data, className}) {
  return (
    <div className="">
      <div className={`bg-white flex flex-col rounded-md space-y-4  h-48 overflow-x-none overflow-y-auto  z-10 ${className}`}>
        {
            data.map((data,id)=>{
                return <div className="" key={id}>{data.title} </div>
            })
        }
    </div>
    </div>
  )
}

export default SearchResults
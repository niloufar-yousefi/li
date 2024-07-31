import React, { useState } from 'react'

export default function Item2() {

    const [data, setData] = useState([
        { id: 1, name: "Item1", color: true },
        { id: 2, name: "Item2", color: true },
        { id: 3, name: "Item3", color: true }
    ])

    function myColor(id) {
     data.map(x=>{
        if(x.id == id){
            x.color = false                  
        }else{
            x.color = true          
        }
        setData([...data])       
     })
         
    }

    return (
        <ul>
        {data.map((x, index) => {
          return (
            <li onClick={() => { myColor(x.id) }} className={`bg-pink-400 my-5 p-5 cursor-pointer ${x.color  ? 'text-white' : 'text-blue-700'} `} key={x.id}>{x.name}</li>
          )
        })}
      </ul>
    )
}

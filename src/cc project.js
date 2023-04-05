import React from 'react'

export default function Day5() {
    var fruits=["melon","strawberry","mango","pomegranete"]
    var displayfruits=fruits.map(fname=>{return <li>{fname}</li>})
    const stuinfo=[{id:1,name:"hsdhbv"},{id:2,name:"uehwfsmds"},{id:3,name:"oeffakn"},{id:4,name:"jhug"},{id:5,name:"uhvvb"},{id:6,name:"jjefn"}]
  return (
    <div>{displayfruits}
    {stuinfo.map((sinfo)=>{return <li key={sinfo.id}>{sinfo.id}   {sinfo.name}</li>})}
    </div>
  )
}
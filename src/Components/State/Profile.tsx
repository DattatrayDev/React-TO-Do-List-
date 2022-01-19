import React from 'react'

interface ProfileProps{
    name?:string
    age:number
    status: 'coder' | 'single' | 'commited'
    children?:React.ReactNode
}

const Profile=({name,age, status, children}:ProfileProps)=>{
    return(
        <div style={{border:'2px solid', margin:'2px'}}>
            <h1>Name-{name || 'user'}</h1>
            <h2>Age-{age}</h2>
            <h2>Status-{status}</h2>
            <h2>Children-{children}</h2>
        </div>
    )
}
export default Profile
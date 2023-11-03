import { useLocation } from "react-router-dom"

export const NotFoundPage = ()=>{
    const location = useLocation()
    return <div>
        <h1>{`the requested url ${location.pathname} is not found on this site`}</h1>
        <h2>{404}</h2>
        
    </div>
}
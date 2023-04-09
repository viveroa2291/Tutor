import { getAuthToken } from "../Util/auth"
import {useEffect} from 'react'

const apiURL="http://localhost:8080/api/session"

const SessionApi={
  
    addSession:(sessionToCreate)=>{
        const token=getAuthToken()
    
        fetch(apiURL,{
            method:"POST",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Origin':'*',
               'Authorization':'Bearer '+token
            },
            body:JSON.stringify(sessionToCreate)
        }).then(result=>result.json())
        .then(data=>{
            console.log(data)
        }).catch((error)=>{console.log(error)})
    }
}

export default SessionApi
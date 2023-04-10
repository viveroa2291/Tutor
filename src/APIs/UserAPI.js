import { getAuthToken } from "../Util/auth";
import { getSignedInUser } from "../Util/auth";


const UserAPI={
    getStudentSession:(setStudentSessions)=>{
        const token=getAuthToken();
        const id=getSignedInUser().id;
        const apiURL=`http://54.67.47.110:8080/api/student/session/${id}` 
fetch(apiURL,{
method:"GET",
headers:{
    'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Origin':'*',
               'Authorization':'Bearer '+token 
}
}).then((result)=>{
    return result.json();
}).then((data)=>{
setStudentSessions(data)
}).catch( (error) => { console.log(error) } );
    }
}

export default UserAPI
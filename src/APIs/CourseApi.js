import { getAuthToken } from "../Util/auth";
const apiURL="http://localhost:8080/api/course/create"
const CourseApi={
getCourses:(setCourseList)=>{
    const token=getAuthToken();
    fetch(apiURL ,{
        method:'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+ token
        }
    }).then((result)=>{
        console.log("Result")
        console.log(result)
        return result.json()
    }).then((data)=>{
        console.log(data)
        setCourseList(data)
    }).catch( (error) => { console.log(error) } );
},

addCourse:(courseToAdd)=>{
    const token=getAuthToken();
    fetch(apiURL ,{
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+ token
        },
        body:JSON.stringify(courseToAdd)
}).then(result=>result.json())
.then(data=>{
    console.log(data)
}).catch((error)=>{console.log(error)})
}}
export default CourseApi;
const apiURL="http://localhost:8080/api/subject";

const SubjectApi = {
    getSubjects:(setSubjectList)=>{
        fetch(apiURL ,{
            method:'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

                'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBbGV4aXMiLCJleHAiOjE2ODA5Mzg1NzcsImlhdCI6MTY4MDkwMjU3N30.lC9zJgl1RWK3vxEQeAFKtsI_XB_Q8cBMGHggad83vWg'
            }
        }).then((result)=>{
            console.log("Result")
            console.log(result)
            return result.json()
        }).then((data)=>{
            setSubjectList(data)
        }).catch( (error) => { console.log(error) } );
    }
}

export default SubjectApi;

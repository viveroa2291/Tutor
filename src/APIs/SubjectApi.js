const apiURL="http://localhost:8080/api/subject";

const SubjectApi = {
    getSubjects:(setSubjectList)=>{
        fetch(apiURL ,{
            method:'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Origin':'*',
                'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBZGFuIiwiZXhwIjoxNjgwOTI5MDY3LCJpYXQiOjE2ODA4OTMwNjd9.6XmwrDxtb8v2RGfZXeHbevmWtb8d2xAW62jMVL3gsdg'
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
const apiURL="http://localhost:8080/api/subject"

const SubjectApi={
    getSubjects:(setSubjectList)=>{
        fetch(apiURL,{
            method:'GET',
            // mode:'no-cors',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Origin':'*',
                'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBZGFuIiwiZXhwIjoxNjgwOTE4ODQxLCJpYXQiOjE2ODA4ODI4NDF9.y3Lf_jSF-gYMNVFZRdotkK8ijz0ADAlTUoOLS7AIQvU'
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

export default SubjectApi
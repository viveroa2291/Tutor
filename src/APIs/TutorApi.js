const apiURL="http://localhost:8080/api/user/tutors"

const TutorApi={
    getSubjects:(setSubjectList)=>{
        fetch(apiURL,{
            method:'GET',
            headers:{
                'Authorization:' : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBZGFuIiwiZXhwIjoxNjgwOTIwNTE3LCJpYXQiOjE2ODA4ODQ1MTd9.sP4VY6zvcbsTruRenkzIrWEVAA7QyIo-S-lbEeYavtU'
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

export default TutorApi;
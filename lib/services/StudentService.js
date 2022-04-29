class StudentService{
    static getAllStudents(students){
        if(!Array.isArray(students))
            return "students should be an array";
        if(+students===+[])  
            return "students cannot be an empty array";
        return students;
    }
    static filterStudentsByCertification(students){
        if(!Array.isArray(students))
            return "students should be an array";
        if(+students===+[])  
            return "students cannot be an empty array";
        return students.filter((student) => student.haveCertification == true);
    }
    static filterByCreditsOver500(students){
        if(!Array.isArray(students))
            return "students should be an array";
        if(+students===+[])  
            return "students cannot be an empty array";
        return students.filter((student) => student.credits > 500);
    }
}
module.exports=StudentService;
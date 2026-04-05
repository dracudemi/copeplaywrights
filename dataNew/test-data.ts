export default class Testdata{
    static makeAppointTestData () {
       
    return [
        {testId:"TC001",facility:"Tokyo CURA Healthcare Center",applyForReadmission:true,healthcareProgram:"Medicare",visitDate:"2024-07-30",comment:"This is a comment for TC001"},
        {testId:"TC002",facility:"Tokyo CURA Healthcare Center",applyForReadmission:true,healthcareProgram:"Medicare",visitDate:"2024-09-30",comment:"This is a comment for TC002"},
        {testId:"TC003",facility:"Tokyo CURA Healthcare Center",applyForReadmission:true,healthcareProgram:"Medicare",visitDate:"2024-08-30",comment:"This is a comment for TC003"}

    ]
}


static postUserTestData(){
    return [
       {"name":"Sanju",
        "job":"Kid",
        "id":"789",
        "createdAt":"2026-04-04T11:04:31.653Z"}
    ]
}

}
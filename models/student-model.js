const path = require('path')
const fs = require('fs')

const datapath = './data/student.json'
//util functions

const getStudentDetails=()=>{
    const students=fs.readFileSync(datapath,'utf-8')
    return JSON.parse(students)
}

const saveStudentDetails=(data)=>{
    const writedata = JSON.stringify(data)
    fs.writeFileSync(datapath,writedata)
}

module.exports={
    getStudentDetails,
    saveStudentDetails
}
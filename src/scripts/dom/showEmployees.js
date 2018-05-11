const $ = require("jquery")
const APIManager = require("../api/APIManager")

const showEmployees = () => {
    //make ajax call to api
    APIManager.getAllDatabase().then(database => {
        //split arrays into seperate variables
        const employees = database.employees
        const computers = database.computers
        const departments = database.departments
        const employeesComputers = database.employeeComputers


        //get dom ref
        const output = $("#main__output")

        //iterate through employees
        employees.forEach(employee => {

            //find employee department based on keys
            let department = departments.find(department => department.departmentId === employee.departmentId)

            //find the intersection object for employees to computers based on current employee id
            let computerEmployeeIntersection = employeesComputers.find(intersection => intersection.employeeId === employee.employeeId)

            //take the intersection object and find the corresponding computer
            let computer = computers.find(computer => computerEmployeeIntersection.computerId === computer.computerId)

            output.append(
                `
                <article class="employee">
                    <header class="employee__name">
                        <h1>${employee.firstName}</h1>
                    </header>
                    <section class="employee__department">
                        Works in the ${department.name} department
                    </section>
                    <section class="employee__computer">
                        Currently using ${computer.name}
                    </section>
                </article>
                
                `
            )
        })
    })
}

module.exports = showEmployees
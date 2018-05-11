const $ = require("jquery")

const APIManager = Object.create(null, {
    getAllDatabase: {
        value: function () {
            return $.ajax("http://localhost:8088/db")
        }
    },
    getAllDepartments: {
        value: function () {
            return $.ajax("http://localhost:8088/departments")
        }
    },
    getSingleDepartment: {
        value: function (id) {
            return $.ajax(`http://localhost:8088/departments/${id}`)
        }
    },
    getAllEmployees: {
        value: function () {
            return $.ajax("http://localhost:8088/employees")
        }
    },
    getSingleEmployee: {
        value: function (id) {
            return $.ajax(`http://localhost:8088/employees/${id}`)
        }
    },
    getAllComputers: {
        value: function () {
            return $.ajax("http://localhost:8088/computers")
        }
    },
    getSinglecomputer: {
        value: function (id) {
            return $.ajax(`http://localhost:8088/computers/${id}`)
        }
    },
    createEmployee: {
        value: function (employee) {
            return $.ajax({
                url: "http://localhost:8088/employees",
                method: "POST",
                data: employee
            })
        }
    }
})


module.exports = APIManager
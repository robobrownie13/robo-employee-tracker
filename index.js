const inquirer = require("inquire");
const mysql2 = require("mysql2/promise");

const db = mysql.createConnection(
  {
    host: "127.0.0.1",
    // MySQL username,
    user: "root",
    // TODO: Add MySQL password here
    password: "",
    database: "employees_db",
  },
  console.log(`Connected to the employees_db database.`)
);

inquirer
  .prompt([
    {
      type: list,
      name: action,
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "Add Employee",
        "Update Employee Role",
        "View All Roles",
        "Add Role",
        "View All Departments",
        "Add Department",
        "Quit",
      ],
    },
    {
      type: input,
      name: department_name,
      message: "What is the name of the department?",
    },
    {
      type: input,
      name: role_name,
      message: "What is the name of the role?",
    },
    {
      type: input,
      name: salary,
      message: "What is the salary of the role?",
    },
    {
      type: list,
      name: role_department,
      message: "Which department does the role belong to?",
      choices: [],
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

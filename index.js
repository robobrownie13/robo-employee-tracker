const inquirer = require("inquirer");
const mysql = require("mysql2/promise");
const db = require("./config/config.js");

async function viewDepartments() {
  console.log(db);
  const sql = `SELECT name FROM department`;
  const connection = await db();
  const [data] = await connection.query(sql);
  console.log(data);
  console.log(typeof data);
  console.log(Array.isArray(data));
  await connection.end();
}

async function viewRoles() {
  const sql = `SELECT name FROM roles`;
  const connection = await db();
  const [data] = await connection.query(sql);
  await connection.end();
}

function startMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
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
    ])
    .then((answers) => {
      switch (answers.action) {
        case "View All Employees":
          console.log("View All Employees");
          startMenu();
          break;
        case "Add Employee":
          console.log("Add Employee");
          startMenu();
          break;
        case "Update Employee Role":
          console.log("Update Employee Role");
          startMenu();
          break;
        case "View All Roles":
          console.log("View All Roles");
          viewRoles();
          startMenu();
          break;
        case "Add Role":
          console.log("Add Role");
          startMenu();
          break;
        case "View All Departments":
          console.log("View All Department");
          viewDepartments();
          startMenu();
          break;
        case "Add Department":
          console.log("Add Department");
          startMenu();
          break;
        default:
          break;
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

startMenu();

// {
//     type: input,
//     name: department_name,
//     message: "What is the name of the department?",
//   },
//   {
//     type: input,
//     name: role_name,
//     message: "What is the name of the role?",
//   },
//   {
//     type: input,
//     name: salary,
//     message: "What is the salary of the role?",
//   },
//   {
//     type: list,
//     name: role_department,
//     message: "Which department does the role belong to?",
//     choices: [],
//   },

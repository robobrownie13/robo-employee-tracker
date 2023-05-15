const inquirer = require("inquirer");
const mysql = require("mysql2/promise");
const db = require("./config/config.js");

async function viewDepartments() {
  const sql = `SELECT name FROM deparments`;
  const data = await db.execute(sql);
  console.log(data);
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

// async function example1() {
//   const mysql = require("mysql2/promise");
//   const conn = await mysql.createConnection({ database: test });
//   const [rows, fields] = await conn.execute("select ?+? as sum", [2, 2]);
//   await conn.end();
// }

startMenu();

//   async function example2 () {
//     const mysql = require('mysql2/promise');
//     const pool = mysql.createPool({database: test});
//     // execute in parallel, next console.log in 3 seconds
//     await Promise.all([pool.query('select sleep(2)'), pool.query('select sleep(3)')]);
//     console.log('3 seconds after');
//     await pool.end();
//   }

// const mysql = require('mysql2');
// const co = require('co');
// co(function * () {
//   const c = yield mysql.createConnectionPromise({user: 'root', namedPlaceholders: true });
//   const rows = yield c.query('show databases');
//   console.log(rows);
//   console.log(yield c.execute('select 1+:toAdd as qqq', {toAdd: 10}));
//   yield c.end();
// });

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

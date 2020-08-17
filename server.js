const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001;
const app = express();

const mysql = require('mysql2');
 
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test'
});

const dept = new Department('department');
const role = new Role('role');
const employee = new Employee('employee');

const startMenu = () => {
    inquirer.prompt(
        {
        type: 'list',
        name:  'choice',
        message: 'What would you like to do?',
        choices: ['View all departments', 'Add a department', 'View all roles', 'View all employees', 'Add a role', 'Add an employee']
        }
    ).then(menuChoice)
};

startMenu();
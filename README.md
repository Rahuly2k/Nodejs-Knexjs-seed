HOW TO USE 
1) run "npm install"
2) create database in phpmyadmin
3) open db/kenxfile.js file and set database name
4) open terminal in "db" folder.
5) run migration using "knex migrate:latest" then Start node using "node index" command
6) To create new user
   open postman, select post method and add user like 
{
	"email":"demo@test.com",
	"password":"123456",
	"type":"admin"
}
and run api http://localhost:3100/api/register
7) Then try to login using these credential. (http://localhost:3100/api/login). You will get token as response.
8) Open app/routes/api.js and test some other api.

These are the steps to use this seed project.Hope you like it.

GOOD LUCK

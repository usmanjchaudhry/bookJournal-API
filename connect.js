import mysql from "mysql"

export const db = mysql.createConnection({
    host:"database.cr4wf0n6ltdx.us-west-2.rds.amazonaws.com",
    user:"admin",
    password:"password",
    database:"sys"
})

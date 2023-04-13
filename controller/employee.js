// db connection 
var db = require("../db/db")

// get all employes 
const getAllEmployees = async (req, res) => {
const paginationNo = req.query.page
const start = 0
const END = 0
const LIMIT = "";
console.log("pagination ..");
console.log(paginationNo);
if (paginationNo != '') {
    console.log("pagination not set");
}else{

    const LIMIT = `LIMIT ${start}, ${END}`;
}




    try {
        const sql = "SELECT * FROM `employees`"
        db.query(sql, (err, result) => {
            if (err) {
                res.status(400).json({
                    response: false,
                    msg: "Bad Request"
                })
            }
            else {
                res.status(200).json({
                    response: true,
                    data: result
                }

                )
            }
        })

    } catch (error) {
        console.log(error);
    }

}

// get employe by id  
const getEmployee = async (req, res) => {
    const userId = req.query.userid
    console.log("user id :");
    console.log(userId);

    try {
        const sql = `SELECT * FROM employees WHERE id = ${userId}`
        db.query(sql, (err, result) => {
            if (err) {
                res.status(400).json({
                    response: false,
                    msg: "Bad Request"
                })
            }
            else {
                res.status(200).json(
                    {
                        response: true,
                        data: result
                    }
                )
            }
        })
    } catch (error) {
        console.log(error);
    }

}

// get employee 
const newEmployee = async (req, res) => {

    const userDetails = req.body
    console.log(userDetails.name);
    try {
        const sql = `SELECT COUNT(*) AS userCount FROM employees WHERE email = '${userDetails.email}';`

        db.query(sql, (err, result) => {
            const userExits = result[0].userCount;
            if (err) {
                res.status(400).json({
                    response: false,
                    msg: "Bad Request"
                })
            }
            else {
                // check if user is already exits with same email 
                if (userExits > 0) {
                    res.status(200).json({
                        response: false,
                        msg: "User Already Exits"
                    })
                }
                // if user not exits 
                else {
                    const sql2 = `INSERT INTO employees( name, job, email, address, city, state, primaryEmergency, contact, secondaryEmergency, contactSecond, relationship) VALUES ('${userDetails.name}','${userDetails.job}','${userDetails.email}', '${userDetails.address}', '${userDetails.city}', '${userDetails.state}', '${userDetails.primaryEmergency}', '${userDetails.contact}', '${userDetails.secondaryEmergency}', '${userDetails.contactSecond}', '${userDetails.relationship}')`

                    db.query(sql2, (err, result) => {
                        if (err) {
                            res.status(400).json({
                                response: false,
                                msg: "Bad Request"
                            })
                        }
                        else {
                            res.status(200).json(
                                {
                                    response: true,
                                    msg: "User details is Added"
                                }
                            )
                        }
                    })

                }


            }
        })

    } catch (error) {
        console.log(error);
    }

}

// update employee 
const updateEmployee = async (req, res) => {
    const userId = req.query.userid

    const userDetails = req.body
    
    const sql = `UPDATE employees SET name='${userDetails.name}',job='${userDetails.job}',email='${userDetails.email}',address='${userDetails.address}', city='${userDetails.city}',state='${userDetails.state}',primaryEmergency='${userDetails.primaryEmergency}',contact='${userDetails.contact}', secondaryEmergency='${userDetails.secondaryEmergency}', contactSecond='${userDetails.contactSecond}',relationship='${userDetails.relationship}' WHERE id = ${userId}`;

    try {
        db.query(sql, (err, result) => {
            if (err) {
                res.status(400).json({
                    response: false,
                    msg: "Bad Request"
                })
            }
            else {
                res.status(200).json(
                    {
                        response: true,
                        msg: "User details is Updated"
                    }
                )
            }
        })

    } catch (error) {
        console.log(error);
    }

}

// delete employee 
const deleteEmployee = async (req, res) => {
    const userId = req.query.userid
    const sql = `DELETE FROM employees WHERE id = ${userId}`
    try {
        db.query(sql, (err, result) => {
            if (err) {
                res.status(400).json({
                    response: false,
                    msg: "Bad Request"
                })
            }
            else {
                res.status(200).json(
                    {
                        response: true,
                        msg: "User details is Deleted"
                    }
                )
            }
        })
    } catch (error) {
        console.log(error);
    }

}



module.exports = { getAllEmployees, getEmployee, updateEmployee, deleteEmployee, newEmployee }

// db connection 
var db = require("../db/db")

// get all employes 
const getAllEmployees = async (req, res) => {
const paginationNo = req.query.page
console.log(paginationNo);
let START = 0
let END = 0
let LIMIT = "";
if (paginationNo == undefined) {
    console.log("page not set");
}else{
    START = (paginationNo*10 )- 10
    console.log("start "+START);
    END = (paginationNo*10 )
    LIMIT = `LIMIT ${START}, ${END}`;
}

    try {
        const sql = `SELECT * FROM employees ${LIMIT}`
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
    const primaryEmmergency = {
        primaryEmergencyName: req.body.primaryEmergency,
        contact: req.body.contact,
        relationship: req.body.primaryRelation,
    }  
    const secondaryEmmergency = {
        secondaryEmergencyName: req.body.secondaryEmergency,
        contact: req.body.contactSecond,
        relationship: req.body.secondaryRelation,
    }  

    const primaryContact = JSON.stringify(primaryEmmergency)
    const secondaryContact = JSON.stringify(secondaryEmmergency)


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
                    const sql2 = `INSERT INTO employees( name, job, email, address, city, state, primaryEmergency, secondaryEmergency) VALUES ('${userDetails.name}','${userDetails.job}','${userDetails.email}', '${userDetails.address}', '${userDetails.city}', '${userDetails.state}', '${primaryContact}', '${secondaryContact}' )`

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

    const primaryEmmergency = {
        primaryEmergencyName: req.body.primaryEmergency,
        contact: req.body.contact,
        relationship: req.body.primaryRelation,
    }  
    const secondaryEmmergency = {
        secondaryEmergencyName: req.body.secondaryEmergency,
        contact: req.body.contactSecond,
        relationship: req.body.secondaryRelation,
    }  

    const primaryContact = JSON.stringify(primaryEmmergency)
    const secondaryContact = JSON.stringify(secondaryEmmergency)
    
    const sql = `UPDATE employees SET name='${userDetails.name}',job='${userDetails.job}',email='${userDetails.email}',address='${userDetails.address}', city='${userDetails.city}',state='${userDetails.state}',primaryEmergency='${primaryContact}', secondaryEmergency='${secondaryContact}' WHERE id = ${userId}`;

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

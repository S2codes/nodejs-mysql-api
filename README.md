# Api Documentation

Employee Relation Management Nodejs Api with MySql Database

## Api Base Url

```bash
http://localhost:5000/api/
```
## Add New Employee

```bash
# POST
http://localhost:5000/api/newemployee
```
Send data in the following  JSON format
```bash
{
    "name": "User Name",
    "job": "Job Title",
    "email": "User Email",
    "address": "User Address",
    "city": "User City",
    "state": "User State",
    "primaryEmergency": "Primary Emergency Contact User Name",
    "contact": "Primary Emergency Contact",
    "primaryRelation": "Relationship With User"
    "secondaryEmergency": "Secondary Emergency Contact",
    "contactSecond": "Secondary Emergency Contact",
    "relationship": "Relationship With User"
}
```

## Update Employee Details

```python
# POST
http://localhost:5000/api/updateemployee?userid=userid
```
Send Data in the following JSON format

```bash
{
    "name": "User Name",
    "job": "Job Title",
    "email": "User Email",
    "address": "User Address",
    "city": "User City",
    "state": "User State",
    "primaryEmergency": "Primary Emergency Contact User Name",
    "contact": "Primary Emergency Contact",
    "primaryRelation": "Relationship With User"
    "secondaryEmergency": "Secondary Emergency Contact",
    "contactSecond": "Secondary Emergency Contact",
    "relationship": "Relationship With User"
}
```

## Delete Employee Details
Send a GET parameter `userid` with the respective user 
```python
# POST
http://localhost:5000/api/updateemployee?userid=userid
```

## Get All Employee Details

```python
# GET
http://localhost:5000/api/getallemployee
```

## Get All Employee Details with Pagination
Send a get Parameter `page` with the URL 

EXAMPLE: 

i. If you send `page=1` it will give you 0 to 10 rows of Data

ii. if you send `page=2` it will give you 10 to 20 rows of Data
```python
# GET
http://localhost:5000/api/getallemployee?page=pagenumber
```

## Get Employee Details
Send a GET parameter `userid` with the respective user to get the user's Details
```python
# GET
http://localhost:5000/api/getemployee?userid=2
```


## License

[Subhankar Sarkar]
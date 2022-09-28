User logs

A container will represent the client an the another the server that generates the code

get user ID, by login
The code is generated
check codes generated to this user (using the user ID)
    IF (there is more codes sent to this ID)
        delete the previous code, and place the new
    ELSE 
        put it in the object

the code is sent to his email

user tries to login
    IF (the code expires date < current date)
        the login is denied and the code is removed from cache   
        the user can send a new code 
    ELSE
        user can make login sucessfully
        Delete the documment attached to the UID 



# Business rules

* The code has to be unique, that is, it has to be only one code
    - previous generated codes are suposed to be removed

* The code has an expiration time of 15 minutes

* Instead of using Google, we'll show the code in the screen
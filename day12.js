//Write a JavaScript function to hide email addresses to protect from unauthorized user.

function hideEmail(email){

    let hide=email.substring(0,4)+"...@"+email.split("@")[1]
    return hide;

}
let email="newadmin123@gmail.com"

console.log(hideEmail(email))
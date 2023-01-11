var firstName=prompt("Enter your first name");
var lastName=prompt("Enter your last name");
function fullName(firstName,lastName)
{   var full=confirm("are you "+firstName+" "+lastName)
    return full; 
}
fullName(firstName,lastName);
var birthYear=prompt("Enter your birth year");
var age=2023-birthYear;
document.write("<h1>Welome "+firstName+" "+lastName+",you are "+age+" years old</h1>");
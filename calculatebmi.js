var mass=60
var height=1.63
var BMI=mass/(height*height)
console.log(BMI);
// using ternary operator
BMI <24 ? console.log("Under weight")
 :BMI<=24 || BMI<29 ? console.log("Healthy")
 : BMI<=29 ||BMI<34? console.log("Over weight")
 : BMI<=34 || BMI<38? console.log("Obese")
 :BMI>37? console.log("Extremely Obese"):console.log("invalid input");
//  using if else condition
if(BMI<24)
{
    console.log("Under weight");
}
else if(BMI<=24 || BMI<29)
{
    console.log("Healthy");
}
else if(BMI<=29 ||BMI<34)
{
    console.log("Over weight");
}
else if(BMI<=34 || BMI<38)
{
    console.log("Obese");
}
else if(BMI>37)
{
    console.log("Extremely Obese");
}
else{
    console.log("Invalid input");
}
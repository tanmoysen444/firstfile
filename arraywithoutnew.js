console.log("1st array");
var colors=["Red","Black","White"];
for(var color in colors)
{
    console.log(colors[color]);
}
console.log("2nd array");
var cars=["Ford","Audi","KIA","Maruti"]
for(var car in cars)
{
    console.log(cars[car]);
}
console.log("3rd array");
var companies=["Tcs","TE","Infosys"]
for(var company of companies)
{
    console.log(`conpany is ${company}`);
}
console.log("4th array");
var fruits=["banana","Mango","orange"];
for(var fruit of fruits)
{
    console.log(fruit);
}
console.log("5th array");
var brands=["Samsung","Realme","Apple"];
for(var brand of brands){
    console.log(brand);
}


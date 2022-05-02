console.log("object without using new");
var phone={phName:"samsung",
            model:"M21",
            ram:"8",
            isGood:true,
            fullName:function(){
               return phone.phName+" "+this.model;
            }}
        console.log("phone obj: ",phone.phName);
        console.log("phone obj: ",phone.model);
        console.log("phone obj: ",phone.ram);
        console.log("phone obj: ",phone.isGood);
        console.log("FUllname: ",phone.fullName());

        console.log("**********************************************");

        console.log("object with using new");

        var percentage=new Object();
        percentage.name="Excelling"
        percentage.number=90;
        percentage.grade="A++"
        percentage.year=2022
    //    confusion with function
        console.log("percentage name: ",percentage.name);
        console.log("percentage number: ",percentage.number);
        console.log("percentage grade: ",percentage["grade"]);
        console.log("percentage year: ",percentage.year);
        console.log("person name: ",that);

        console.log("*****************");
        var name=new Object()
        fname:"xyz"
        lname:"pqr"

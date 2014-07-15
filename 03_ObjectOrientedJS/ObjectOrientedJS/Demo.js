(function() {


    function Person(name) {
        if (this === window) {
            throw new Error("Please use the new keyword");
        }

        this.x = 1;
        this.thename = name;

        //this.print = function () {
        //    console.log(this);
        //    console.log("I am ", this.name);
        //}
    }

    Person.prototype.print = function () {
        console.log(this);
        console.log("I am ", this.thename);
    }


    function Employee(name, ssn) {
        Person.call(this, name);
        this.ssn = ssn;
    }

    Employee.prototype = new Person();

    Employee.prototype.print = function () {
        console.log(this);
        console.log("I am ", this.thename ,"with SSN", this.ssn);
    }



    var maurice = new Person("Maurice");
    maurice.print();

    var john = new Person("John");
    john.print();
    maurice.print();

    var emp = new Employee("Boss", 123);
    emp.print();

    //emp.print = function() {
    //    console.log("Secret");
    //}
    //emp.print();

    console.log("");
    for (var prop in emp) {
        if (emp.hasOwnProperty(prop)) {
            console.log(prop, emp[prop]);
        }
    }
    console.log("");


    delete emp.print;
    emp.print();

    delete Employee.prototype.print;
    emp.print();



}());
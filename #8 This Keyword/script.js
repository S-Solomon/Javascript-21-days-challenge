(() => {

    // 1. Lexical scope and dynamic scope
    // function printName() {
    //     console.log(this);
    // }
    // printName();


    // 2. How to know what is "this" ?
    // function printName() {
    //     console.log(this);
    //     console.log(`My name is ${this.name}`);
    // }


    //// 2.1 Invoker Object
    // const varayut = { name: 'Varayut', printName };
    // const jane = { name: 'Jane', printName };

    // varayut.printName();
    // jane.printName();



    //// 2.2 Global Object (window, global)
    // name ='Global';
    // printName();

    //// 2.3 Constructor function
    // function Person(name) {
    //     this.name = name;
    //     this.printName = printName;
    // }

    // const varayut = new Person('Varayut');
    // varayut.printName();


    // 3. call(), apply(), bind()
    function printName(nationality, city) {
        console.log(this);
        console.log(`My name is ${this.name}, I'm ${nationality} and i'm living in ${city}`);
    }

    function Person(name, nationality, city) {
        this.name = name;
        this.nationality = nationality;
        this.city = city;


        printName(this.nationality, this.city);
        printName.call(this, this.nationality, this.city);
        printName.apply(this,[this.nationality, this.city]);

        const printVarayut =  printName.bind(this); 
        printVarayut(this.nationality, this.city);
    }

    const varayut = new Person('Varayut', 'Thai', 'Bangkok')

})();
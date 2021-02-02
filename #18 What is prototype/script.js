(() => {
    // 1. Class vs Prototype
    // class Person {

    // }

    // const varayut = new Person();
    // console.log(varayut);




    // 2. What is Prototype ?
     // const name = 'Varayut';
    // console.log(name);

    // const arr = [];
    // console.log(arr.__proto__);




    // 3. Prototype Chain
    // const name = 'Varayut';
    // console.log(name.__proto__);
    // console.log(name.toLocaleString());


    
    // 4. Extend a Prototype
    const name = 'Varayut';
    function sayHello(val) {
        console.log(`Hello ${val}`);
    }
    String.prototype.sayHello = sayHello;
    console.log(name.__proto__);
    name.sayHello('World');

})();
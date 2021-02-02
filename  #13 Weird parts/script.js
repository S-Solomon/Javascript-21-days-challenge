(() => {

    // 1. NaN
    // if ( NaN * 1 === NaN) {
    //     console.log('Equal');
    // }

    // const result = 1 / 'hello';
    // if (Number.isNaN(result)) {
    //     console.log('Equal to NaN');
    // }

    // 2. Type Coercion
    if(3 > 2 > 1) {
        console.log('Inside');
    }

    console.log(2 - '1');
    console.log(2 + Number.parseInt('1', 10));

    console.log(true + true);


    // 3. Interpreters & Compilers

    function getPerson() {
        return
        {
            name: 'varayut'
        };
    
    }
    console.log(getPerson()); // returns undefined

    function getPerson2() {
        return  {
            name: 'samuel'
        }
    }
    console.log(getPerson2()); // returns object

        
    // 4. Checking Object Type


    const person1 = {};
    const person2 = null;
    console.log(typeof person1); // object
    console.log(typeof person2); // object
    if(typeof person2 == 'object' && person2 != null){ // Check Null also
    console.log('Person2 is object');
}
})();  
(() => {

    const carBrands = [
        'BMW',
        'Bugatti',
        'Maserati',
        'Mercedes Benz',
        'Ferrari',
        'Ford',
        'Toyota',
        'Tesla',
        'Honda',
        'Hyundai',
        'Rolls Royce'
    ];

    const searchElem = document.querySelector('.search');

    function selectCarBrand(event){
        searchElem.value = event.target.innerText;
        clearResults();
    }

    function clearResults(){
       const ulElem = document.querySelector('.results');
       if (ulElem) {
          document.body.removeChild(ulElem);
       }
    }

    function onInput(event) {
        const inputText = event.target.value.toLowerCase();

        const matchedcarBrands = carBrands.filter(carBrand => carBrand.toLocaleLowerCase().startsWith(inputText));

        const ulElem = document.createElement('ul');
        ulElem.classList.add('results');

        matchedcarBrands.forEach(carBrand => {
            const liElem = document.createElement('li');
            liElem.onclick = selectCarBrand;
            liElem.innerText = carBrand;
            ulElem.appendChild(liElem); 
        });
        document.body.appendChild(ulElem);
    }



    function run() {
        searchElem.addEventListener('input', onInput);
        document.addEventListener('click', clearResults);
    }

    run();
})();
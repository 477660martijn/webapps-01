/* let link = "https://www.youtube.com"
document.getElementById("link").href = link

const elem = document.createElement("p");
elem.classList.add("colored"); // Add class to elem
elem.appendChild(document.createTextNode("Bla"));
document.getElementById("main").appendChild(elem);

function changeText(elem) {
    elem.innerHTML = "Thank you!";
}

document.getElementById("change")
    .addEventListener("click", function () {
            changeText(this);
        }
    );

 */
let baseFetchUrl = 'http://localhost:3000'
async function getBrands() {
    try {
        const response = await fetch(baseFetchUrl + '/car-brands');
        const data = await response.json();
        console.log(data);

    } catch (e) {
        console.error(e)
    }
}


async function addBrand(carBrand){
    try{
        const response = await fetch(baseFetchUrl + '/car-brands', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(carBrand)
        })
        const data = await response.json();
        console.log(data);
    } catch (e){
        console.log(e)
    }
}
const brands = getBrands();
for(const i in brands){
    console.log(brands[i])

}

addBrand({
    carModel: "nevera",
    bouwjaar: 2022,
    price: 3000000,
    horsepower: 1914,
    isEV: true
}).then(console.log);


/*
 function addCarBrand(newCarBrand) {
    fetch(baseFetchUrl + '/car-brands', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCarBrand)
    }).then(response => response.json())
        .then(data => console.log(data));
}



function getCarBrands() {
    fetch(baseFetchUrl + '/car-brands')
        .then(response => response.json())
        .then(data => console.log(data));
}
*/





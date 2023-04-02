// /**
//  * This file is just a silly example to show everything working in the browser.
//  * When you're ready to start on your site, clear the file. Happy hacking!
//  **/

// const url = "https://platzi-avo.vercel.app";

// const formatPrice = (price) => {
//     const newPrice = new window.Intl.NumberFormat('en-EN', {
//         style: 'currency',
//         currency: 'USD',
//     }).format(price)

//     return newPrice
// }

//web api
// window
//     .fetch(url)
//     .then((respuesta) => respuesta.json())
//     .then((responseJson) => {
//         responseJson.data.forEach((item) => {
//             console.log(item.name)
//         })
//     })

// // Intl

// async function fetchData() {
//     const response = await fetch(url + '/api/avo')
//     const responseJson = await response.json()
//     const todosLosItems = []
//     console.log(responseJson)
//     responseJson.data.forEach((item) => {
//         // Crear imagen
//         const image = document.createElement('img')
//         image.className =
//             "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
//         image.src = url + item.image
//         // Crear titulo
//         const title = document.createElement('h2')
//         title.className = "text-lg";
//         title.textContent = item.name
//         // Crear precio
//         const price = document.createElement('div')
//         price.className = "text-gray-600";
//         price.textContent = formatPrice(item.price)

//         const priceAndTitle = document.createElement("div");
//         priceAndTitle.className = "text-center md:text-left";
//         priceAndTitle.appendChild(title);
//         priceAndTitle.appendChild(price);

//         const card = document.createElement("div");
//         card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
//         card.appendChild(image);
//         card.appendChild(priceAndTitle);

//         todosLosItems.push(card)
//     });
//     document.querySelector('#app').append(...todosLosItems)
// }

// fetchData()

const url = "https://pokeapi.co/api/v2/pokemon/?limit=28";

async function fetchData() {
    const response = await fetch(url)
    const responseJson = await response.json()
    const todosLosItems = []
    console.log(responseJson)
    responseJson.results.forEach((item) => {
        // Image
        const image = document.createElement('img')
        image.className =
        "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
        // Name
        const name = document.createElement('h2')
        name.className = "text-lg text-white";
        name.textContent = item.name
        // Number
        const number = document.createElement('div')
        number.className = "text-gray-600";
        // Fetch each Pokemon data
        window.fetch(item.url)
            .then((respuesta) => respuesta.json())
            .then((responseItem) => {
                image.src = responseItem.sprites.other['official-artwork'].front_default
                number.textContent = `Nro: ${responseItem.id}`
            })

        const numberAndName = document.createElement("div");
        numberAndName.className = "text-center";
        numberAndName.appendChild(name);
        numberAndName.appendChild(number);

        const card = document.createElement("div");
        card.className = "bg-gray-800 p-6 hover:bg-gray-500";
        card.appendChild(image);
        card.appendChild(numberAndName);

        todosLosItems.push(card)
    });
    document.querySelector('#app').append(...todosLosItems)
}

fetchData()


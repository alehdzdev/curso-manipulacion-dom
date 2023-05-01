/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const api = "http://api.weatherapi.com/v1/current.json?key=38ecef6937514b62b4300245233004&q="

async function fetchData(city) {
    const url = `${api}${city}`
    const response = await fetch(url)
    const responseJson = await response.json()
    console.log(responseJson)
}

fetchData('Maracaibo')

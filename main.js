const articleContainter = document.querySelector("#container")

const createHTML = (data) => {
    return `
    <img src="${data.url}" alt="Image of the day">
    <h1>Title: ${data.title} </h1>
    <p>${data.date}</p>
    <p>${data.explanation}</p>
    <footer>&copy${data.copyright}<footer>
    `
}

const attachHTML = (Nasadata) => {
    articleContainter.innerHTML = createHTML(Nasadata)
}

//Fetching Nasa data
fetch("https://api.nasa.gov/planetary/apod?api_key=KtZjD1P0nkHA6Tm0rusxbQFCtEU4G366UO1tKCcx")
    .then(nasaData => nasaData.json())
    .then(parsedData => {
        console.table(parsedData)
        attachHTML(parsedData);
    })
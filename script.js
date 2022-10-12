const API_KEY = 'api_key=c8f553fc5ea1253540b0f2ccaa090a45'
const BASE_URL = 'https://api.themoviedb.org/3'
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY
const IMG_URL = 'https://image.tmdb.org/t/p/w500'
const searchURL = BASE_URL + '/search/movie?'+API_KEY

const main = document.getElementById('main')
const form = document.getElementById('input-movie')
const search = document.getElementById('search')

getMovies(API_URL)

function getMovies (url) {
    fetch(url).then(res => res.json()).then(data => {
        showMovies(data.results)
    })
}

//nampilin data api ke halaman html

function showMovies(data){
    main.innerHTML = ''

    data.forEach(movie => {
        const {title,poster_path, vote_average,overview} = movie
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
        //mengisi div movieEL dengan data data
        movieEl.innerHTML= `

        <img src="${IMG_URL+poster_path}" class="card-img-top" alt="...">
        <div class="movie-info">
          <h1>${title}</h1>
          <span >${vote_average}</span>
        </div>


        <div class="overview">
          ${overview}
        </div>
        
        `
        main.appendChild(movieEl)
    });
}

form.addEventListener('change', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm){
        getMovies(searchURL+'&query='+searchTerm)
    }else{
        getMovies(API_URL)
    }
})

search.addEventListener('onclick', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm){
        getMovies(searchURL+'&query='+searchTerm)
    }else{
        getMovies(API_URL)
    }
})






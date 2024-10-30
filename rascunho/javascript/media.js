const CURRENT_URL = new URL(window.location.href)

const MEDIA_ID = CURRENT_URL.searchParams.get('id')
const MEDIA_CATEGORY = CURRENT_URL.searchParams.get('category')

// a url tem que chegar tipo assim:    https://fodase.com?id={o id da obra}&category={a categoria da obra}

async function getMedia(){

    let url = `https://api.themoviedb.org/3/${MEDIA_CATEGORY}/${MEDIA_ID}?language=pt-BR`

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTEyYmNkYzc1ODMwOWFlZjU2YWI3YTFmYmQ3YzIyOCIsIm5iZiI6MTcyOTUxODIzMy41ODU4NTMsInN1YiI6IjY3MTNjMjM1ZDViNzkyNmU5NDZmYzQ5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iPRn6COPbdHZ0BgkJ4hGeRZUjSrPVWGg-dfYs7ejka0'
        }
    }

    let res = await fetch(url, options).then(x => x.json()).catch(err => console.error(err))

    renderResult(res)
}

function renderResult(media){

    console.log(media)

    let banner = document.querySelector('.banner')
    let poster = document.querySelector('img.poster')
    let name = document.querySelector('.mediaTitle')
    let score = document.querySelector('.score')
    let tags = document.querySelector('.tags')
    let description = document.querySelector('.description')

    let tempTitle = media.title ? media.title : media.name
    let tempDate = media.release_date ? media.release_date : media.first_air_date
    name.innerHTML = `${tempTitle} <span class="time">(${tempDate.slice(0, 4)})</span>`
    
    document.querySelector('title').innerText = `${tempTitle} - rank.it`

    poster.src = `https://image.tmdb.org/t/p/w300_and_h450_bestv2${media.poster_path}`
    banner.style.backgroundImage = `url(https://image.tmdb.org/t/p/w1920_and_h1080_bestv2${media.backdrop_path})`
    description.innerText = media.overview

    tags.innerHTML = ''
    
    tempTags = ''
    for(genre of media.genres){
        tempTags.innerHTML += `<span>${genre.name}</span>`
    }
    // continuar adicionando nome, descrição e tal...
    
    
    if (media.seasons){
        let episodes = 0
        for (season of media.seasons){
            episodes += season.episode_count
        }
        document.querySelector('.season').innerText = media.seasons.length
        document.querySelector('.episodes').innerText = episodes
    } else {
        document.querySelector('.size').style.display = 'none'
    }

}

getMedia()
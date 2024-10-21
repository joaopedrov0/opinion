const SEARCH_BAR = document.querySelector('#search_bar')
const CATEGORY_OPTION = document.querySelector('#category')
const RESULT_LIST = document.querySelector('.resultList')

class Media{
    constructor(name, date, summary, premiered, ended, status){
        this.name = name
        this.date = date
        this.summary = summary
        this.premiered = premiered
        this.ended = ended
        this.status = status
    }
}

async function search(){
    let input = SEARCH_BAR.value
    // let res = await fetch(`https://api.tvmaze.com/search/shows?q=${input}`).then((x) => x.json())
    let url = `https://api.themoviedb.org/3/search/multi?query=${input}&include_adult=false&language=pt-BR&page=1`
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTEyYmNkYzc1ODMwOWFlZjU2YWI3YTFmYmQ3YzIyOCIsIm5iZiI6MTcyOTUxODIzMy41ODU4NTMsInN1YiI6IjY3MTNjMjM1ZDViNzkyNmU5NDZmYzQ5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iPRn6COPbdHZ0BgkJ4hGeRZUjSrPVWGg-dfYs7ejka0'
        }
    }
    
    
    let res = await fetch(url, options).then(x => x.json())
    renderResult(resResolver(res))
}

function resResolver(origin){
    res = origin.results
    console.log(res)
    return res
}

function renderResult(res){
    console.log(res)
    resultHTML = `<h2>Exibindo resultados para "${SEARCH_BAR.value}"</h2>`
    if (res.length != 0){
        for (i in res){
            media = res[i]
            resultHTML += `
            <div class="resultItem">
                ${fixImage(media)}
                <div class="searchMediaText">
                    <div class="mediaHeader">
                        <div class="mediaTitle">${media.name} <span class="time">${fixDate(media)}</span></div>
                        <div class="score"><span class="stars">⭐⭐⭐⭐⭐</span> | <span class="views">6.9k</span> views</div>
                    </div>
                    
                    <div class="mediaDescription">${fixDescription(media)}</div>
                </div>
            </div>`
        }
    
        
    } else {
        resultHTML += `<p class="notFound">Oops, não encontrei o que você está buscando. Verifique a ortografia!</p>`
    }
    RESULT_LIST.innerHTML = resultHTML
}

function fixDate(media){
    if (media.first_air_date != null){
        if (media.status == "Ended"){
            return `(${media.first_air_date.slice(0, 4)}-${media.ended.slice(0, 4)})`
        } else {
            return `(${media.first_air_date.slice(0, 4)})`
        }
    }
    return ''
}

function fixImage(media){

    if (media.poster_path != null){
        return `<img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2${media.poster_path}" alt="" class="searchMediaImage"></img>`
    } else {
        return '<div class="theresNoImage">Sem imagem</div>'
    }

    // <img src="${media.image.medium}" alt="" class="searchMediaImage"></img>
}

function fixDescription(media){
    if (media.overview) {
        MAX_DESC_LENGTH = 200
        // description = media.overview.slice(3, -4)
        description = media.overview
        if (description.length > MAX_DESC_LENGTH){
            description = description.slice(0, MAX_DESC_LENGTH)
            description = description.split(' ')
            description.pop()
            description = description.join(' ')
            description += ' [...]'
        }
        return description
    } else {
        return '[No description]'
    }
}

function checkEnter(e){
    if(e.code == 'Enter'){
        search()
    }
}
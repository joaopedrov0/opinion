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
    console.log(res)
}
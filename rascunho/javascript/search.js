const SEARCH_BAR = document.querySelector('#search_bar')
const RESULT_LIST = document.querySelector('.resultList')

async function search(){
    let input = SEARCH_BAR.value
    let res = await fetch(`https://api.tvmaze.com/search/shows?q=${input}`).then((x) => x.json())
    renderResult(res)
}

function renderResult(res){
    console.log(res)
    resultHTML = `<h2>Exibindo resultados para "${SEARCH_BAR.value}"</h2>`
    if (res.length != 0){
        for (i in res){
            media = res[i].show
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
    if (media.premiered != null){
        if (media.status == "Ended"){
            return `(${media.premiered.slice(0, 4)}-${media.ended.slice(0, 4)})`
        } else {
            return `(${media.premiered.slice(0, 4)})`
        }
    }
    return ''
}

function fixImage(media){

    if (media.image != null){
        return `<img src="${media.image.medium}" alt="" class="searchMediaImage"></img>`
    } else {
        return '<div class="theresNoImage">Sem imagem</div>'
    }

    // <img src="${media.image.medium}" alt="" class="searchMediaImage"></img>
}

function fixDescription(media){
    if (media.summary) {
        MAX_DESC_LENGTH = 200
        description = media.summary.slice(3, -4)
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
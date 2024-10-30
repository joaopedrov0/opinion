

// Essa função serve para implementar a descrição que expande e minifica, fazer isso depois, não é prioridade por agora


function toggleExpand(e){
    console.log(e)
    let target = e.target

    if (target.classList.contains('minimized')){

    }

    target.classList.toggle('minimized')
}

// function fixDescription(media){
//     if (media.overview) {
//         MAX_DESC_LENGTH = 200
//         // description = media.overview.slice(3, -4)
//         description = media.overview
//         if (description.length > MAX_DESC_LENGTH){
//             description = description.slice(0, MAX_DESC_LENGTH)
//             description = description.split(' ')
//             description.pop()
//             description = description.join(' ')
//             description += ' [...]'
//         }
//         return description
//     } else {
//         return '[No description]'
//     }
// }
let $ = document
let input = $.querySelector("input")
let form = $.querySelector(".add")
let container = $.querySelector(".contain")
let listElem = $.querySelector(".todos")




function addnewtodo(inputNew) {       ///////////3////////
    let lielem = $.createElement("li")//////////4////////
    lielem.classList = "list-group-item d-flex justify-content-between align-items-center"

    let span = $.createElement("span")///////5//////////
    span.innerHTML = inputNew


    let NewTrash = $.createElement("i")///////6///////
    NewTrash.classList = "fa fa-trash-o delete"

    NewTrash.addEventListener("click", function (event) {/////////7//////////
        event.target.parentElement.remove()

    })

    lielem.append(span, NewTrash)
    listElem.append(lielem)


}



form.addEventListener("submit", function (event) {      //////2/////
    event.preventDefault()
})


input.addEventListener("keydown", function (event) {         /////1/////
    let inputNew = event.target.value.trim();

    if (event.keyCode === 13) {
        if (inputNew) {
            input.value = ""
            addnewtodo(inputNew)
        }
    }
})
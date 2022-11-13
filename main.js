// get elements with the required class names (lists and list-items
const listItem = document.querySelectorAll(".list-item")
const lists = document.querySelectorAll(".list")

//define a variable draggedItem to use?
let draggedItem = null;


//loop over draggable items (items)
for (let i=0; i<listItem.length; i++) {
    let item = listItem[i]

    //for each, create an even listener for dragstart and dragend
    item.addEventListener("dragstart", function () {
        console.log("dragStarted");
        draggedItem = item;
        setTimeout( () => {
            item.style.display = "none"
        }, 0)
    })

    item.addEventListener("dragend", function () {
        console.log("dragEnd");
        setTimeout( () => {
            item.style.display = "block"
            draggedItem = null
        }, 0)
    })


    //loop of droppable items (lists
    for (let j=0; j<lists.length; j++) {
        let list=lists[i]

        //event on dragover (required), dragenter, dragleave, drop (required)
        list.addEventListener("dragover", (ev) => {
            console.log("drag over")
            ev.preventDefault()
        })

        list.addEventListener("dragenter", (ev) => {
            console.log("drag enter")
            ev.preventDefault()
            list.style.background='rgba(0,0,0,0.2)'
        })

        list.addEventListener("dragleave", (ev) => {
            console.log("drag leave")
            list.style.background='rgba(0,0,0,0.4)'
        })

        list.addEventListener("drop", (e)=> {
            console.log("dropped")
            list.append(draggedItem)
            list.style.background='rgba(0,0,0,0.2)'
        })
    }
}
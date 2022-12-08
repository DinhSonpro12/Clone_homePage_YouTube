const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const topbar_iconInteration = $$(".topbar_iconInteration"),
hehe = $(".hehe"),
topBsearch_input = $(".topBsearch_input"),
borderLeft = $(".borderLeft"),
borderRight = $(".borderRight"),
hidden_search = $(".hidden_search"),
hidden_close = $(".hidden_close"),
topBsearch_key = $(".topBsearch_key"),
virtual_key = $(".virtual_key"),
topbar_voice = $(".topbar_voice")
findvoice = $(".findvoice")
topbar_create = $(".topbar_create")
multi_page_menu = $(".multi-page-menu")
topbar_ring = $(".topbar_ring")
notif = $(".notif")
topbar_user = $(".topbar_user")
menuUser = $(".menuUser")
opacity = $(".opacity")

topbar_voice_popupTitle = $(".topbar_voice .popupTitle")
topbar_create_popupTitle = $(".topbar_create .popupTitle")

topbar_iconInteration[0].addEventListener("click", function(){
    hehe.classList.toggle("hidden")
    opacity.classList.toggle("hidden")
})

topbar_iconInteration[1].addEventListener("click", function(){
    hehe.classList.toggle("hidden")
    opacity.classList.toggle("hidden")
})

topBsearch_input.onclick = function() {
    borderLeft.style.border = "1px solid #4393e5e0"
    hidden_search.classList.remove("hidden")
}

topBsearch_input.onblur = function() {
    borderLeft.style.border = "solid #303030"
    borderLeft.style.borderWidth = "1px 0 1px 1px"
    hidden_search.classList.add("hidden")
    if(!topBsearch_input.value){
        hidden_close.classList.add("hidden")
    }
}

topBsearch_input.onkeypress = function() {
    hidden_close.classList.remove("hidden")
}


topBsearch_key.onclick = function() {
    virtual_key.classList.toggle("hidden")
}

topbar_voice.onclick = function() {
    topbar_voice.classList.toggle("topbar_voice_active")
    topbar_voice_popupTitle.classList.toggle("hidden")
    findvoice.classList.toggle("hidden")
}

topbar_create.onclick = function() {
    multi_page_menu.classList.toggle("hidden")
    multi_page_menu.classList.toggle("multi-page-menu_active")
    topbar_create_popupTitle.classList.toggle("hidden")
    topbar_create.classList.toggle("topbar_create_active")
}


topbar_ring.onclick = function() {
    notif.classList.toggle("hidden")
}

topbar_user.onclick = function() {
    menuUser.classList.toggle("hidden")
}

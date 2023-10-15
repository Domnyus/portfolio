let burger = document.querySelector("#burger")
let menu = document.querySelector("#menu")

_burger = () =>
{
    if(menu.classList.contains("hidden"))
        menu.classList.remove("hidden")
    else
        menu.classList.add("hidden")
}

burger.addEventListener("click", () => { _burger() })

let s = document.querySelector("#menu_s")
let a = document.querySelector("#menu_a")
let ce = document.querySelector("#menu_ce")
let e = document.querySelector("#menu_e")
let c = document.querySelector("#menu_c")

s.addEventListener("click", () => {
    document.querySelector("#a").classList.add("hidden")
    document.querySelector("#e").classList.add("hidden")
    document.querySelector("#c").classList.add("hidden")
    document.querySelector("#ce").classList.add("hidden")

    document.querySelector("#s").classList.remove("hidden")
    
    a.classList.remove("custom_active")
    e.classList.remove("custom_active")
    c.classList.remove("custom_active")
    ce.classList.remove("custom_active")
    s.classList.add("custom_active")
    
    _burger()
})

a.addEventListener("click", () => {
    document.querySelector("#s").classList.add("hidden")
    document.querySelector("#e").classList.add("hidden")
    document.querySelector("#c").classList.add("hidden")
    document.querySelector("#ce").classList.add("hidden")

    document.querySelector("#a").classList.remove("hidden")
    
    s.classList.remove("custom_active")
    e.classList.remove("custom_active")
    c.classList.remove("custom_active")
    ce.classList.remove("custom_active")
    a.classList.add("custom_active")

    _burger()
})

e.addEventListener("click", () => {
    document.querySelector("#s").classList.add("hidden")
    document.querySelector("#a").classList.add("hidden")
    document.querySelector("#c").classList.add("hidden")
    document.querySelector("#ce").classList.add("hidden")

    document.querySelector("#e").classList.remove("hidden")
    
    a.classList.remove("custom_active")
    s.classList.remove("custom_active")
    c.classList.remove("custom_active")
    ce.classList.remove("custom_active")
    e.classList.add("custom_active")

    _burger()
})

c.addEventListener("click", () => {
    document.querySelector("#s").classList.add("hidden")
    document.querySelector("#e").classList.add("hidden")
    document.querySelector("#a").classList.add("hidden")
    document.querySelector("#ce").classList.add("hidden")

    document.querySelector("#c").classList.remove("hidden")
    
    a.classList.remove("custom_active")
    e.classList.remove("custom_active")
    s.classList.remove("custom_active")
    ce.classList.remove("custom_active")
    c.classList.add("custom_active")

    _burger()
})


ce.addEventListener("click", () => {
    document.querySelector("#s").classList.add("hidden")
    document.querySelector("#e").classList.add("hidden")
    document.querySelector("#a").classList.add("hidden")
    document.querySelector("#c").classList.add("hidden")

    document.querySelector("#ce").classList.remove("hidden")
    
    a.classList.remove("custom_active")
    e.classList.remove("custom_active")
    s.classList.remove("custom_active")
    c.classList.remove("custom_active")
    ce.classList.add("custom_active")

    _burger()
})

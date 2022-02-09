<<<<<<< HEAD
const monthly = document.getElementById("monthly")
const yearly = document.getElementById("yearly")
const monthlyLabel = document.getElementById("monthly-label")
const yearlyLabel = document.getElementById("yearly-label")
const discount = document.getElementById("discount")
const range = document.getElementById("range")
const price = document.getElementById("price")
const pageviews = document.querySelector(".pageviews-number")
const toggle = document.querySelector(".toggle-container")

const mql = matchMedia("(min-width: 1024px)")



const applyMatchMedia = mql => mql.matches ? discount.textContent = "25% discount" : discount.textContent = "-25%"
addEventListener("resize", () => applyMatchMedia(mql))
applyMatchMedia(mql)

/* Función para eatablecer el "checked" en los "inputs radio" según sea necesario */
const toggleChecked = (t, f) => {
    monthly.checked = t
    yearly.checked = f
}

/*  Función para calcular y mostrar el precio con descuento en decimales*/
const discountPrice = () => {
    let discount
    discount = range.value * 0.75
    price.value = discount.toFixed(2)
    switch(range.value) {
        case "4": 
            pageviews.textContent = "25k"
            break;
        case "8": 
            pageviews.textContent = "50k"
            break;
        case "12": 
            pageviews.textContent = "75k"
            break;
        case "16": 
            pageviews.textContent = "100k"
            break;
        case "20": 
            pageviews.textContent = "200k"
            break;
        case "24": 
            pageviews.textContent = "500k"
            break;
        case "28": 
            pageviews.textContent = "900k"
            break;
    }
}


const priceValue = () => {
    switch(range.value) {
        case "4": 
            price.value = "4.00";
            pageviews.textContent = "25k"
            break;
        case "8": 
            price.value = "8.00";
            pageviews.textContent = "50k"
            break;
        case "12": 
            price.value = "12.00";
            pageviews.textContent = "75k"
            break;
        case "16": 
            price.value = "16.00";
            pageviews.textContent = "100k"
            break;
        case "20": 
            price.value = "20.00";
            pageviews.textContent = "200k"
            break;
        case "24": 
            price.value = "24.00";
            pageviews.textContent = "500k"
            break;
        case "28": 
            price.value = "28.00";
            pageviews.textContent = "900k"
            break;
    }
}

range.addEventListener("input", () => {
    if(yearly.checked == true) {
        discountPrice()
    }else {
        priceValue()
    }
})

toggle.addEventListener("click", () => {
    monthly.classList.toggle("hidden")
    yearly.classList.toggle("hidden")
    if(monthly.classList.contains("hidden")) {
        toggleChecked(false, true)
    }else {
        toggleChecked(true, false)
        priceValue()
    }
    if(yearly.checked == true) {
        discountPrice()
    }else {
        priceValue()
    }
})

monthlyLabel.addEventListener("click", (e) => {
    e.preventDefault("click")
    if(monthly.classList.contains("hidden")) {
        yearly.classList.add("hidden")
        monthly.classList.remove("hidden")
        toggleChecked(true, false)
        priceValue()
    }
    if(yearly.checked == true) {
        discountPrice()
    }else {
        priceValue()
    }
})

yearlyLabel.addEventListener("click", (e) => {
    e.preventDefault("click")
     if(yearly.classList.contains("hidden")) {
        yearly.classList.remove("hidden")
        monthly.classList.add("hidden")
        toggleChecked(false, true)
    }
    if(yearly.checked == true) {
        discountPrice()
    }else {
        priceValue()
    }
=======
const monthly = document.getElementById("monthly")
const yearly = document.getElementById("yearly")
const monthlyLabel = document.getElementById("monthly-label")
const yearlyLabel = document.getElementById("yearly-label")
const discount = document.getElementById("discount")
const range = document.getElementById("range")
const price = document.getElementById("price")
const pageviews = document.querySelector(".pageviews-number")
const toggle = document.querySelector(".toggle-container")

const mql = matchMedia("(min-width: 1024px)")



const applyMatchMedia = mql => mql.matches ? discount.textContent = "25% discount" : discount.textContent = "-25%"
addEventListener("resize", () => applyMatchMedia(mql))
applyMatchMedia(mql)

/* Función para eatablecer el "checked" en los "inputs radio" según sea necesario */
const toggleChecked = (t, f) => {
    monthly.checked = t
    yearly.checked = f
}

/*  Función para calcular y mostrar el precio con descuento en decimales*/
const discountPrice = () => {
    let discount
    discount = range.value * 0.75
    price.value = discount.toFixed(2)
    switch(range.value) {
        case "4": 
            pageviews.textContent = "25k"
            break;
        case "8": 
            pageviews.textContent = "50k"
            break;
        case "12": 
            pageviews.textContent = "75k"
            break;
        case "16": 
            pageviews.textContent = "100k"
            break;
        case "20": 
            pageviews.textContent = "200k"
            break;
        case "24": 
            pageviews.textContent = "500k"
            break;
        case "28": 
            pageviews.textContent = "900k"
            break;
    }
}


const priceValue = () => {
    switch(range.value) {
        case "4": 
            price.value = "4.00";
            pageviews.textContent = "25k"
            break;
        case "8": 
            price.value = "8.00";
            pageviews.textContent = "50k"
            break;
        case "12": 
            price.value = "12.00";
            pageviews.textContent = "75k"
            break;
        case "16": 
            price.value = "16.00";
            pageviews.textContent = "100k"
            break;
        case "20": 
            price.value = "20.00";
            pageviews.textContent = "200k"
            break;
        case "24": 
            price.value = "24.00";
            pageviews.textContent = "500k"
            break;
        case "28": 
            price.value = "28.00";
            pageviews.textContent = "900k"
            break;
    }
}

range.addEventListener("input", () => {
    if(yearly.checked == true) {
        discountPrice()
    }else {
        priceValue()
    }
})

toggle.addEventListener("click", () => {
    monthly.classList.toggle("hidden")
    yearly.classList.toggle("hidden")
    if(monthly.classList.contains("hidden")) {
        toggleChecked(false, true)
    }else {
        toggleChecked(true, false)
        priceValue()
    }
    if(yearly.checked == true) {
        discountPrice()
    }else {
        priceValue()
    }
})

monthlyLabel.addEventListener("click", (e) => {
    e.preventDefault("click")
    if(monthly.classList.contains("hidden")) {
        yearly.classList.add("hidden")
        monthly.classList.remove("hidden")
        toggleChecked(true, false)
        priceValue()
    }
    if(yearly.checked == true) {
        discountPrice()
    }else {
        priceValue()
    }
})

yearlyLabel.addEventListener("click", (e) => {
    e.preventDefault("click")
     if(yearly.classList.contains("hidden")) {
        yearly.classList.remove("hidden")
        monthly.classList.add("hidden")
        toggleChecked(false, true)
    }
    if(yearly.checked == true) {
        discountPrice()
    }else {
        priceValue()
    }
>>>>>>> 84fc8438b26dc943eb252e5786cb622033a7e0b0
}) 
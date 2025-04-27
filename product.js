var sideNav = document.getElementById("sideNav")
var menuIcon = document.getElementById("menuIcon")
var closeNav = document.getElementById("closeNav")

menuIcon.addEventListener("click", function () {
    sideNav.style.right = 0
})

closeNav.addEventListener("click", function () {
    sideNav.style.right = "-50%"
})

// Search

var productContainer = document.getElementById("productContainer")
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")

search.addEventListener("keyup", function () {
    var enteredValue = event.target.value.toUpperCase()

    for (count = 0; count < productlist.length; count = count + 1) {
        var productname = productlist[count].querySelector("h1").textContent

        if (productname.toUpperCase().indexOf(enteredValue)) {
            productlist[count].style.display = "none"
        }

        else {
            productlist[count].style.display = "block"
        }
    }
})


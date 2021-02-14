const getFile = document.getElementById("getFile");
const updateLogoText = document.getElementById("text");
const setLogo = document.querySelector(".logo");
const closeIcon = document.querySelector(".fa-times");
const setLoader = document.getElementById("Image");
const image = document.getElementById("umbrellaImage");
const span=document.getElementById("uploadLogo");



// change the image according to their color switch
function ChangeColor(element) {
    console.log("call", element.id);
    if (element.id == "pink") {
        showLoader();
        setTimeout(function() {
            hideLoader();
        }, 1000)
        image.setAttribute("src", "img/Pink umbrella.png");
        span.style.backgroundColor= "#D9378D"

    } else if (element.id == "blue") {
        showLoader();
        setTimeout(function() {
            hideLoader();
        }, 1000)
        image.setAttribute("src", "img/Blue umbrella.png");
        span.style.backgroundColor= "#30B3E5"
    } else if (element.id == "yellow") {
        showLoader();
        setTimeout(function() {
            hideLoader();
        }, 1000)
        image.setAttribute("src", "img/Yello umbrella.png");
        span.style.backgroundColor= "#FBCF40"
    }
}

//to add logo on  umbrella
getFile.addEventListener("change", function() {
    const file = this.files[0]
    console.log(file);
    var fileSize = Math.round(file.size / 1024 / 1024);
    if (file && fileSize <= 5) {
        if (file.type = "image/png" || file.type == "image/jpg") {
            console.log("enter")
            let reader = new FileReader();
            reader.addEventListener("load", function() {
                console.log('runn', this.result);
                if (this.result) {
                    showLoader();
                    setTimeout(function() {
                        hideLoader();
                    }, 1000)
                    console.log("result data")
                    updateLogoText.innerText = file.name
                    setLogo.style = "height: 80px;width:80px;"
                    setLogo.setAttribute("src", this.result);
                    closeIcon.style = "color:#000;"
                } else {
                    console.log("loader")
                    showLoader();
                }

            })
            reader.readAsDataURL(file);
        } else {
            alert("file type should be .png or .jpg format")
        }

    } else {
        alert("logo should be max size of 5MB")
    }
})

// to remove the logo
closeIcon.addEventListener("click", function() {
    updateLogoText.innerText = "UPLOAD LOGO"
    setLogo.style = "height: 0px;width:0px;"
    setLogo.setAttribute("src", "");
    closeIcon.style.color = "transparent;"
})

//to show loader 
function showLoader() {
    document.getElementById("loader").setAttribute("src", "img/loader_icon.svg");
    document.getElementById("loader").setAttribute("class", "loader");
    setLoader.style.visibility = "hidden";
}

function hideLoader() {
    document.getElementById("loader").setAttribute("src", "");
    document.getElementById("loader").setAttribute("class", "");
    setLoader.style.visibility = "visible";
}
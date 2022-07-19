var elOpenModalBtn = document.querySelector(".js-open-modal");
var elModal = document.querySelector(".modal");
var elCloseModalBtn = document.querySelector(".js-close-modal")
var elXCloseModalBtn = document.querySelector(".js-x-close-modal")
var elBodyModal = document.querySelector("body")

elOpenModalBtn.addEventListener("click", function(){
    elModal.classList.add("modal-open");
    elBodyModal.classList.add("stop-body");
});

elCloseModalBtn.addEventListener("click", function(){
    elModal.classList.remove("modal-open");
    elBodyModal.classList.remove("stop-body");
});

elXCloseModalBtn.addEventListener("click", function(){
    elModal.classList.remove("modal-open");
    elBodyModal.classList.remove("stop-body");
})

// elModal.addEventListener("click", function(){
//     elModal.classList.remove("modal-open");
// })
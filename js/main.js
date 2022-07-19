var elOpenModalBtn = document.querySelector(".js-open-modal");
var elModal = document.querySelector(".modal");
var elCloseModalBtn = document.querySelector(".js-close-modal")
var elXCloseModalBtn = document.querySelector(".js-x-close-modal")

elOpenModalBtn.addEventListener("click", function(){
    elModal.classList.add("modal-open");
});

elCloseModalBtn.addEventListener("click", function(){
    elModal.classList.remove("modal-open");
});

elXCloseModalBtn.addEventListener("click", function(){
    elModal.classList.remove("modal-open")
})

// elModal.addEventListener("click", function(){
//     elModal.classList.remove("modal-open");
// })
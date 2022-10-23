var button = document.querySelector(".search__button");
var modal = document.querySelector(".modal");

if(modal!=null){
    var checkIn = modal.querySelector("[name=data_check_in]");
    var checkOut = modal.querySelector("[name=data_check_out]");
    var countAdult = modal.querySelector("[name=count_adult]");
    var modalInput = modal.querySelectorAll(".modal__input");
    var countChild = modal.querySelector("[name=count_child]");
    var form = modal.querySelector("form");
    var minus = modal.querySelector(".button__minus");
    var plus = modal.querySelector(".button__plus");
    
    modal.classList.add("modal__hide");
    
    button.addEventListener("click", function (evt) {
      evt.preventDefault();
      if (modal.classList.contains("modal__hide")) {
        modal.classList.remove("modal__hide");
        modal.classList.remove("modal__animation--back");
        modal.classList.add("modal__animation");
        checkIn.focus();
      } else {
        modal.classList.remove("modal__animation");
        modal.classList.add("modal__animation--back");
        modal.classList.add("modal__hide");
      }
    });
    
    form.addEventListener("submit", function (evt) {
      if (!checkIn.value || !checkOut.value || !countAdult.value) {
        evt.preventDefault();
    
        for (var i = 0; i < modalInput.length; i++) {
          modalInput[i].classList.add("modal__input--empty");
        }
        countAdult.classList.add("modal__input--empty");
      }
    });
    
    document.addEventListener('click', function (evt) {
      if (evt.target.classList.contains("button__plus")) {
        ++evt.target.parentElement.querySelector("input").value;
      } else if (evt.target.classList.contains("button__minus") && evt.target.parentElement.querySelector("input").value > 0) {
        --evt.target.parentElement.querySelector("input").value;
      }
    });
    
    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (modal.classList.contains("modal__animation")) {
          modal.classList.remove("modal__animation");
          modal.classList.add("modal__animation--back");
          modal.classList.add("modal__hide");
        } else {
          modal.classList.add("modal__hide");
        }
      }
    });
}

var sort = document.querySelector(".sort__right-down");
var sortButton = document.querySelector(".sort__button");

sort.classList.add("sort__right-down--active");

sortButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (sort.classList.contains("sort__right-down--active")) {
    sort.classList.remove("sort__right-down--active");
  }
});
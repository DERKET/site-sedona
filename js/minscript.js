var button = document.querySelector(".search__button"),
  modal = document.querySelector(".modal");
if (null != modal) {
  var checkIn = modal.querySelector("[name=data_check_in]"),
    checkOut = modal.querySelector("[name=data_check_out]"),
    countAdult = modal.querySelector("[name=count_adult]"),
    modalInput = modal.querySelectorAll(".modal__input"),
    countChild = modal.querySelector("[name=count_child]"),
    form = modal.querySelector("form"),
    minus = modal.querySelector(".button__minus"),
    plus = modal.querySelector(".button__plus");
  modal.classList.add("modal__hide"),
    button.addEventListener("click", function (t) {
      t.preventDefault(),
        modal.classList.contains("modal__hide")
          ? (modal.classList.remove("modal__hide"),
            modal.classList.remove("modal__animation--back"),
            modal.classList.add("modal__animation"),
            checkIn.focus())
          : (modal.classList.remove("modal__animation"),
            modal.classList.add("modal__animation--back"),
            modal.classList.add("modal__hide"));
    }),
    form.addEventListener("submit", function (t) {
      if (!checkIn.value || !checkOut.value || !countAdult.value) {
        t.preventDefault();
        for (var e = 0; e < modalInput.length; e++)
          modalInput[e].classList.add("modal__input--empty");
        countAdult.classList.add("modal__input--empty");
      }
    }),
    document.addEventListener("click", function (t) {
      t.target.classList.contains("button__plus")
        ? ++t.target.parentElement.querySelector("input").value
        : t.target.classList.contains("button__minus") &&
          0 < t.target.parentElement.querySelector("input").value &&
          --t.target.parentElement.querySelector("input").value;
    }),
    window.addEventListener("keydown", function (t) {
      27 === t.keyCode &&
        (t.preventDefault(),
        modal.classList.contains("modal__animation") &&
          (modal.classList.remove("modal__animation"),
          modal.classList.add("modal__animation--back")),
        modal.classList.add("modal__hide"));
    });
}
var sort = document.querySelector(".sort__right-down"),
  sortButton = document.querySelector(".sort__button");
sort.classList.add("sort__right-down--active"),
  sortButton.addEventListener("click", function (t) {
    t.preventDefault(),
      sort.classList.contains("sort__right-down--active") &&
        sort.classList.remove("sort__right-down--active");
  });

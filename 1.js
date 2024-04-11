"use strict";

// 1.  При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

const formId = document.querySelector("#from");
const span = document.querySelector("span");
const chageHead = () => {
  span.innerText = formId.value;
};
formId.addEventListener("input", chageHead);

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

const messageBtn = document.querySelector(".message-btn");
const message = document.querySelector(".message");
messageBtn.addEventListener("click", function () {
  message.classList.add("animate_animated");
  message.classList.add("animate_fadeInLeftBig");
  message.style.visibility = "visible";
});

// 3.  Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const form = document.querySelector("form");
const formControl = document.querySelectorAll(".form-control");
const btn = document.querySelector("form button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formControl.forEach((element) => {
    if (element.tagName === "INPUT") {
      isValid(element);
    } else if (element.tagName === "SELECT") {
      isValid(element);
    }
  });
});
function isValid(elem) {
  if (elem.value === "") {
    elem.style.backgroundColor = "red";
    elem.classList.add("error");
    elem.setCustomValidity("Поле не заполнено");
    elem.reportValidity();
  } else {
    btn.textContent = "ОК";
    setTimeout(() => {
      btn.textContent = "Отправить";
    }, 1000);
  }
}
formControl.forEach((el) => {
  el.addEventListener("input", () => {
    el.setCustomValidity("");
    el.removeAttribute("style");
    el.classList.remove("error");
  });
});

const title = 'Apple iPhone 12 Pro 256GB'
const productName = Array.from(document.getElementsByClassName('product-title'))
for (let i = 0; i < productName.length; i++) {
  productName[i].textContent = `${title}`
}
/* ==================== Change content ======================*/
const tabs = document.getElementById('tabs')
const buttons = Array.from(tabs.getElementsByClassName('tabs_button'))
const target = Array.from(document.getElementsByClassName('tab_content'))

function change(array, i) {
  array.forEach(element => {
    element.forEach(i => {
      i.classList.remove('active')
    })
    element[i].classList.add('active')
  })
};
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = (event) => {
    change([buttons, target], i)
  }
};
/* ==================== Change quantity ======================*/
const price = 1493;
let arrayFromCountPrice = Array.from([...document.querySelectorAll('[id^="quantity-"]')].map(elm => elm.id)).map(elm => document.getElementById(elm))
const minus = arrayFromCountPrice[0]
let quantity = arrayFromCountPrice[1]
const plus = arrayFromCountPrice[2]
let priceSum = arrayFromCountPrice[3]
let infoQuantity = arrayFromCountPrice[4]
let infoAmount = arrayFromCountPrice[5]
priceSum.textContent = price
infoQuantity.textContent = 1
infoAmount.textContent = `${price}`
total = 0
input = 1

function countFunc() {
  quantity.value = input;
  total = priceSum.textContent = price * quantity.value
  infoQuantity.textContent = `${quantity.value}`
  infoAmount.textContent = `${total}`
}
plus.onclick = (event) => {
  input++;
  countFunc()
}
minus.onclick = (event) => {
  input > 0 ? input-- : 0;
  countFunc()
}
  /* ==================== Contacts info ======================*/
let info = Array.from([...document.querySelectorAll('[id^="info_"]')].map(elm => elm.id)).map(elm => document.getElementById(elm));
let inputInfo = Array.from([...document.querySelectorAll('[id^="input"]')].map(elm => elm.id)).map(elm => document.getElementById(elm));
for (let i = 0; i < inputInfo.length; i++) {
  inputInfo[i].oninput = function(event) {
    info[i].textContent = inputInfo[i].value
  }
}
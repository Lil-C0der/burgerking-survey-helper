// alert('autoselect begin');
console.log('autoselect begin')

var submit = document.querySelector('input[type=submit]')
var radios = document.querySelectorAll('input[type=radio]')
var checkboxes = document.querySelectorAll('input[type=checkbox]')
var textareas = document.querySelectorAll('textarea')

// 单选题： 默认选中第一个答案
if (radios && radios.length > 0) {
  console.log('autoselect selecting...')
  var radio1 = radios[0]
  if (radio1 && !radio1.checked) {
    radio1.checked = true
    if (radio1.previousElementSibling) {
      radio1.previousElementSibling.style.backgroundPosition = '0px -73px'
    }
  }
}

// 多选题： 默认选中第一个答案
if (checkboxes && checkboxes.length > 0) {
  console.log('autoselect selecting...')
  var checkbox1 = checkboxes[0]
  if (checkbox1 && !checkbox1.checked) {
    checkbox1.checked = true
    if (checkbox1.previousElementSibling) {
      checkbox1.previousElementSibling.style.backgroundPosition = '0px -73px'
    }
  }
}

// 填空题： 默认填入 “感觉挺好的啊， 继续加强就行啦”
if (textareas && textareas.length > 0) {
  textareas[0].value = '感觉挺好的啊， 继续加强就行啦'
}

submit && submit.click()

console.log('autoselect submitted')

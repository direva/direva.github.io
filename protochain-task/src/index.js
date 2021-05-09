const { o3 } = require('goss_proto')
const protoArray = []
let obj = o3
while (true) {
  obj = Object.getPrototypeOf(obj)
  if (obj !== null) {
    protoArray.push(obj.name)
  } else break
}
const ul = document.createElement('ul')
protoArray.forEach((name) => {
  const li = document.createElement('li')
  li.textContent = name
  ul.appendChild(li)
})
document.querySelector('body').appendChild(ul)
function GEBID (id) {
    return document.getElementById(id)
}
const p = GEBID('p')
const h1e = GEBID('abomination')
const t = GEBID('troll')

h1e.onclick = function () {
    p.textContent = 'stop tapping me'
    setTimeout(function () {
        p.textContent = 'empty';
      }, 1000);
}
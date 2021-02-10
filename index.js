let isClicked = false
const projects = document.getElementById('projects')
const cvDOM = document.getElementById('cv')
const h2 = document.getElementById('h2')
const btn = document.getElementById('btn')

function cv() {
  if(isClicked === false) {
    projects.classList.add('hidden')
    cvDOM.classList.remove('displaynone')
    h2.classList.add('hidden')
    btn.innerHTML = 'Show Projects'
    isClicked = true
  } else {
    projects.classList.remove('hidden')
    cvDOM.classList.add('displaynone')
    h2.classList.remove('hidden')
    isClicked = false
    btn.innerHTML = 'Show Resume'
  }
}
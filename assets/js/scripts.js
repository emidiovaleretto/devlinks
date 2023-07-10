const body = document.querySelector('body')
const toggleSwitch = document.querySelector('.toggle-switch-circle')

toggleSwitch.onclick = () => {
  toggleSwitch.classList.toggle('toggle-switch-active')

  if (toggleSwitch.classList.contains('toggle-switch-active')) {
    body.classList.remove('dark-mode')
    body.classList.add('light-mode')
  } else {
    body.classList.add('dark-mode')
    body.classList.remove('light-mode')
  }
}

const container = document.querySelector('.container')
const toggleSwitch = document.querySelector('.toggle-switch-circle')

toggleSwitch.onclick = () => {
  toggleSwitch.classList.toggle('toggle-switch-active')

  if (!toggleSwitch.classList.contains('toggle-switch-active')) {
    container.classList.remove('dark-mode')
    container.classList.add('light-mode')
  } else {
    container.classList.add('dark-mode')
    container.classList.remove('light-mode')
  }
}

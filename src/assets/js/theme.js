const themeIcon = document.getElementById('theme-icon')
const hero = document.getElementById('hero')
const switchTheme = document.querySelector('[data-switch-theme]')
const footerImage = document.getElementById('footer-logo')

if (
  localStorage.getItem('appTheme') === 'dark' ||
  (!('appTheme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark')
  themeIcon.src = '/favicon-2025-light.svg'
  hero.src = '/images/logo-2025-light.png'
  footerImage.src = '/images/logo-2025-light.png'
} else {
  document.documentElement.classList.remove('dark')
  themeIcon.src = '/favicon-2025-dark.svg'
  hero.src = '/images/logo-2025-dark.png'
  footerImage.src = '/images/logo-2025-dark.png'
}
if (switchTheme) {
  switchTheme.addEventListener('click', (e) => {
    e.preventDefault()
    const doc = document.documentElement
    if (doc) {
      if (localStorage.getItem('appTheme')) {
        if (localStorage.getItem('appTheme') === 'light') {
          doc.classList.add('dark')
          localStorage.setItem('appTheme', 'dark')
          themeIcon.src = '/favicon-2025-light.svg'
          hero.src = '/images/logo-2025-light.png'
          footerImage.src = '/images/logo-2025-light.png'
        } else {
          document.documentElement.classList.remove('dark')
          localStorage.setItem('appTheme', 'light')
          themeIcon.src = '/favicon-2025-dark.svg'
          hero.src = '/images/logo-2025-dark.png'
          footerImage.src = '/images/logo-2025-dark.png'
        }
      } else {
        if (doc.classList.contains('dark')) {
          doc.classList.remove('dark')
          localStorage.setItem('appTheme', 'light')
          themeIcon.src = '/favicon-2025-light.svg'
          hero.src = '/images/logo-2025-light.png'
          footerImage.src = '/images/logo-2025-light.png'
        } else {
          doc.classList.add('dark')
          localStorage.setItem('appTheme', 'dark')
          themeIcon.src = '/favicon-2025-dark.svg'
          hero.src = '/images/logo-2025-dark.png'
          footerImage.src = '/images/logo-2025-dark.png'
        }
      }
    }
  })
}

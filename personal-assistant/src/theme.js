import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Source Sans Pro:400,700', 'sans-serif'],
  },
})

const theme = {
  colors: {
    layout: {
      background: 'white',
      accent: '#e36054',
      darkAccent: '#6C6C6C',
      secondary: '#f5e3e1',
    },
    fonts: {
      header: 'rgba(0,0,0,0.8)',
      body: 'rgba(0,0,0,0.8)',
      placeholder: 'rgba(0,0,0,0.6)',
      accent: '#e36054',
      button: '#ffffff',
    },
  },
  fonts: {
    header: {
      family: 'Source Sans Pro',
      weight: 700,
    },
    body: {
      family: 'Source Sans Pro',
      weight: 400,
    },
  },
}

export default theme

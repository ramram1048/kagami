import './styles/main.css'

import ACTListener from './ACTListener'
import parseMessage from './parseMessage'
import uiControl from './uiControl'

// const initialRender = () => {

// }

// const updateChart = () => {
//   // console.log(dps)
//   // console.log(chart)
// }

// window.addEventListener('load', initialRender)
// window.addEventListener('onOverlayDataUpdate', (e) => {
//   console.log('이게뭐야', e)
// })
const getLanguage = async () => {
  const language = await callOverlayHandler({ call: 'getLanguage' })
  console.log(language)
}
ACTListener(parseMessage)
getLanguage()

uiControl()

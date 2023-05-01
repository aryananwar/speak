//const data = require('../data/sessions.json')['sessions']
const rawData = require('../data/recording.json')['recordings']['sessionId']['transcriptions']

for (i in rawData){

  const text = rawData[i]['text']
  const recSeconds = rawData[i]['length']
  var textParsed = text.split(' ')
  var recLength = 0
  var x = 0
  var WPM = 0
  var paceData = []
  
  for (i in textParsed){
    x = x + 1
  }
  if (recSeconds == 60){
    WPM = x / 1
  } else{
    recLength = recSeconds / 60
    WPM = x / recLength
  }
  paceData.push("x: " + i + ", " + "y: " + WPM)
}

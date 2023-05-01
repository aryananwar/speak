const data = require('../data/sessions.json')['sessions']


// <----- the following array is a json object with the pace score and note, and filler score and note ----->
var feedback = []

var paceScore = ''
var paceScoreNote = ''
var fillerScore = ''
var fillerNote = ''

for (var i in data){
    // <----- WPM processing ----->
    var pace = Number(data[i]['pace'])
    if (pace <= 135 && pace >= 125) {
        paceScore = 10;
        paceScoreNote = "Your pace is great! keep up the good work"
    } else if (pace > 135){
        paceScore = 9
        paceScoreNote = "You're speaking too fast. Speak a little slower so your audience can understand you better"
    } else if (pace <= 124 && pace >= 115) {
        paceScore = 9;
        paceScoreNote = "Your score is looking good try speaking a little faster"
    } else if (pace <= 114 && pace >= 95) {
        paceScore = 8;
        paceScoreNote = "Your pace is almost there. Try speaking a little faster"
    } else if (pace <= 94 && pace >= 90){
        paceScore = 7
        paceScoreNote = "Your pace is a little slow. Try speaking a little faster"
    } else if (pace <= 89 && pace >= 65){
        paceScore = 6
        paceScoreNote = "Your pace is too slow. Try speaking faster. Your goal should be around 130 WPM"
    } else{
        paceScore = 4
        paceScoreNote = "Your pace is too slow. Practice speaking faster and aim for about 130 WPM"
    }
    //console.log(paceScore)

    // <----- filler WPM processing ----->
    var filler = Number(data[i]['fillerWpm'])
    if (filler > 25){
        fillerScore = 5
        fillerNote = "You need to practice more. Focus on your uhhs and umms!"
        feedback.push({"paceScore": paceScore, "paceNote": paceScoreNote, "fillerScore": fillerScore, "fillerNote": fillerNote})
    }else if (filler <= 5){
        fillerScore = 10
        fillerNote = "Good job! you are doing great!"
        feedback.push({"paceScore": paceScore, "paceNote": paceScoreNote, "fillerScore": fillerScore, "fillerNote": fillerNote})
    } else if (filler > 5 && filler <= 10){
        fillerScore = 9
        fillerNote = "You are almost there! try and focus on your umms and uhhs"
        feedback.push({"paceScore": paceScore, "paceNote": paceScoreNote, "fillerScore": fillerScore, "fillerNote": fillerNote})
    } else if (filler > 10 && filler <= 15){
        fillerScore = 8
        fillerNote = "Focus on your uhhs and umms you're almost there"
        feedback.push({"paceScore": paceScore, "paceNote": paceScoreNote, "fillerScore": fillerScore, "fillerNote": fillerNote})
    } else if (filler > 15 && filler <=20){
        fillerScore = 7
        fillerNote = "You are using a lot of filler words. Try practicing more to reduce this number"
        feedback.push({"paceScore": paceScore, "paceNote": paceScoreNote, "fillerScore": fillerScore, "fillerNote": fillerNote})
    } else if (filler > 20 && filler <= 25){
        fillerScore = 6
        fillerNote = "You are using a lot of filler words. Try practicing more to reduce this number"
        feedback.push({"paceScore": paceScore, "paceNote": paceScoreNote, "fillerScore": fillerScore, "fillerNote": fillerNote})
    }
    
}
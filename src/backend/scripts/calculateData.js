const fs = require('fs');
class CalculateData {
    constructor(file, days, type) {
        this.file = file;
        this.days = days;
        this.type = type;
        this.data = null;
        this.dates = [];
    }
    async readData() {
        fs.readFile(this.file, (err, data) => {
            this.file = data;
        });
    }
    // Time Per Day
    /*

    []

    */

    async lastSevenDays() {
        let i = 0;
        let days = [];
        return new Promise((resolve, reject) => {
            while(i<7) {
                let date = new Date();
                date.setDate(date.getDate() - i);
                days.push(date)
                i += 1;
            }
            for (var x in days){
                //console.log(days[x])
                var data = JSON.stringify(days[x])
                var date_split = data.split('-');
                var month = date_split[1];
                var day = date_split[2].split('T');
                var combined = month + '-' + day[0];
                console.log(combined);
                this.dates.push(combined);
            }
        })
        
    }

    // Do not touch this
    async calculateTime() {
        this.file = await this.readData();
        for(var session of this.file['sessions']) {
            var sessionDate = new Date(session.timestamp*1000);
            var formattedDate = `${sessionDate.getMonth()}-${sessionDate.getDate()}`;ßß
        }
    }

    // TODO LIST:
    //Get avg filler wpm per day
    //Avg pace per day
    //Time per day
    //Rating avg per day
    //Avg: Total it up, divide by number of days
    //Need last 7 days

    async sessionData() {
        return new Promise((resolve, reject) => {
            const data = require('../data/sessions.json')['sessions'][0];
            const timePracticed = data['timePracticed'];
            const pace = data['pace'];
            const fillerWpm = data['fillerWpm'];
            const rating = data['rating'];
            const timestamp = data['timestamp'];
            resolve(data);
        })
        
        
    }
}

//var a = new CalculateData('', '', '');
//a.lastSevenDays();

module.exports = {
    CalculateData: CalculateData
}
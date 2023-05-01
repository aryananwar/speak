const mp3 = require('get-mp3-duration');
const mp3cutter = require('mp3-cutter');
const path = require('path');
const fs = require('fs');
const got = require('got');

class Recording {
    constructor(fp) {
        this.fp = fp;
        this.duration = null;
        this.paths = [];
    }

    async getDuration() {
        return new Promise((resolve, reject) => {
            const buffer = fs.readFileSync(this.fp);
            this.duration = mp3(buffer);
            this.duration = Math.round(this.duration/1000);
            console.log(this.duration);
            if(this.duration) {
                resolve(this.duration);
            } else {
                reject(false);
            }
        });
    }

    async cut() {
        var time = 0;
        var done = false;
        var i = 0;
        return new Promise((resolve, reject) => {
            while(!done) {
                i += 1;
                if(time+60<this.duration) {
                    time += 60;
                    console.log(time, this.duration)
                    console.log('Cutting')
                    mp3cutter.cut({
                        src: this.fp,
                        target: `${this.fp.replace('.mp3', '')}-${i}.mp3`,
                        start: time,
                        end: time+60
                    });
                    this.paths.push(`${this.fp.replace('.mp3', '')}-${i}.mp3`)
                } else {
                    console.log('Last one?')
                    mp3cutter.cut({
                        src: this.fp,
                        target: `${this.fp.replace('.mp3', '')}-${i}.mp3`,
                        start: time,
                        end: this.duration
                    });
                    done=true;
                    this.paths.push(`${this.fp.replace('.mp3', '')}-${i}.mp3`)
                }
            }
            if(this.paths) {
                resolve(this.paths);
            } else {
                reject();
            }
            
        })
        
        
    }



}


// console.log(path.resolve(__dirname, 'try.mp3'));
// Test Function
/*
var aa = async()=> {
    var a = new Recording(path.resolve(__dirname, 'try.mp3'));
    await a.getDuration();
    var b = await a.cut();
    console.log(b);
    const c = await got.post('http://localhost:2998/', {
        json: {
            paths: b
        }
    })
}

aa();
*/

module.exports = {
    Recording: Recording
}
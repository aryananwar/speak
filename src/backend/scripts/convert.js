const converter = require('office-to-pdf');
var fs = require('fs/promises');
class Convert {
    constructor(file, from, to) {
        this.filePath = file;
        this.fromFormat = from;
        this.toFormat = to;
        this.buffer = null;
    }

    async getBuffer() {
        return new Promise((resolve, reject) => {
            try {
                fs.readFile(this.filePath, (err, data) => {
                    console.log(data);
                    this.buffer = data;
                });
                resolve(true);
            } catch(e) {
                reject(e);
            }
        })
        
        
    }

    async convertBuffer() {
        this.converted = await converter(this.buffer);
        return this.converted;
    }
}

module.exports = {
    Convert: Convert
};
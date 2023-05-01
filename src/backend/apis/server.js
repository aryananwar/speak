const express = require('express');
const bodyparser = require('body-parser');
const { Convert } = require('../scripts/convert');
const app = express();
// const mongoose = require('mongoose');
// Mongo changes commented out for local use.

const todolist = require('../schemas/todolist');
const goals = require('../schemas/goals');
const documents = require('../schemas/documents');

var getJson = async(file) => {
    fs.readFile(file, (err, data) => {
        return data;
    });
}

app.use('/', (req, res) => {
    res.send('hey');
});

app.post('/convert', async(req, res) => {
    const newConverter = new Convert(req['file'], req['from'], req['to']);
    try {
        await newConverter.getBuffer();
        var converted =  await newConverter.convertBuffer();
        res.sendStatus(200);
    } catch(e) {
        res.setStatus(400);
        res.send(e);
    }
    
});

app.post('/todolist', async(req, res) => {
    console.log(req.body);
    let data = await getJson('../data/todolist.json');
    data['todolist'].push({
        userid: req.body.userid,
        itemname: req.body.itemname,
        description: req.body.description,
        complete: req.body.complete
    });
    res.setStatus(200).send('Added Successfully.');
    /*
    try {
        let todolistUpdate = await todolist.findOneAndUpdate({
            itemname: req.body.itemname,
            description: req.body.description,
            complete: req.body.complete
        });
        res.sendStatus(200);
    } catch(e) {
        res.send(e);
    }
    */
    

});

app.get('/todolist', async(req, res) => {
    console.log(req);
    let data = await getJson('../data/todolist.json');
    let entries = [];
    for(i of data) {
        if(i['userid'] == req.query.userid) {
            entries.push(i);
        }
    }
    res.setStatus(200).send({
        todolist: entries
    });
    /*
    try {
        let todolistFetch = await todolist.findOne({
            itemname: req.query.itemname
        });
        res.setStatus(200);
        res.send(todolistFetch);
    } catch(e) {
        res.setStatus(400);
        res.send(e);
    }
    */
});

app.post('/goals', async(req, res) => {
    let data = await getJson('../data/goals.json');
    data['goals'].push({
        userid: req.body.userid,
        goalname: req.body.goalname,
        progress: req.body.progress
    });
    res.setStatus(200).send('Successful.')
    /*
    try {
        await goals.findOneAndUpdate({
            goalname: req.body.goalname,
            progress: req.body.progress
        });
        res.sendStatus(200)
    } catch(e) {
        res.setStatus(400);
        res.send(e);
    }});
    */
});
app.get('/goals', async(req, res) => {
    let data = await getJson('../data/goals.json');
    let entries = [];
    for(i of data) {
        if(i['userid'] == req.query.userid) {
            entries.push(i);
        }
    }
    res.setStatus(200).send({
        goals: entries
    });
    /*
    try {
        let goalsFetch = await goals.findOne({
            goalname: req.body.goalname
        });
        res.setStatus(200);
        res.send(goalsFetch);
    } catch(e) {
        res.setStatus(400);
        res.send(e);
    }});
    */
});
app.post('/documents', async(req, res) => {
    let data = await getJson('../data/documents.json');
    data['documents'].push({
        userid: req.body.userid,
        documentName: req.body.goalname,
        timestamp: req.body.progress
    });
    res.setStatus(200).send('Successful.')
    /*
    try {
        await documents.findOneAndUpdate({
            documentName: req.body.documentName,
            timestamp: req.body.timestamp
        });
        res.setStatus(200);
    } catch(e) {
        res.setStatus(400);
        res.send(e);
    }});
    */
});

app.get('/documents', async(req, res) => {
    let data = await getJson('../data/documents.json');
    let entries = [];
    for(i of data) {
        if(i['userid'] == req.query.userid) {
            entries.push(i);
        }
    }
    res.send({
        documents: entries
    });
    /*
    try {
        let documentsUpdate = await documents.findOne({
            documentName: req.body.documentName,
        });
        res.setStatus(200);
        res.send(documentsUpdate);
    } catch(e) {
        res.setStatus(400);
        res.send(e);
    }});
    */
});

app.listen('2999', () => {
    console.log('Server running!')
});


const Discord = require('discord.js');
const {prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    var testChannel = client.channels.find(channel => channel.id === '612082789591941169');
    console.log('Ready')
//612079900626649196 = test channel in test server
//612082789591941169 = server restart channel in isla carto
//86400000 = 1 day
    setInterval(() => {
        testChannel.send("Server has been restarted!");
    }, 86400000);

    //setInterval(() => {
        //testChannel.send("Server has been restarted!");
    //}, 86400000);

});

client.login(token);

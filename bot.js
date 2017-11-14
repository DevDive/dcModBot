var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

// Configure logger settings
logger.remove(logger.transports.Console);

logger.add(logger.transports.Console, {
    colorize: true
});

logger.level = 'debug';

// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('guildMemberAdd', function (member) {
   console.dir(member);
   userID = member.id;
   bot.sendMessage({
        to: member.id,
        message: member.id+' has joined the server...'
   });
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !Announce
            case 'Announce':
                bot.sendMessage({
                    to: channelID,
                    message: 'Guys It Has Been Recalled Dominum Or UbuntuBot Is Now A Test Account Of Dive it is near cause it is on the DiscordApp Thanks For Listening more Announcments Coming Soon'
                });
            break;    
            // !2017
            case '2017':
                bot.sendMessage({
                    to: channelID,
                    message: 'You Got 100 Diamonds Come Back Later For More Codes!'
                });
            break;
             // !about
            case 'about':
                bot.sendMessage({
                    to: channelID,
                    message: 'Welcome To The DCMod Bot System Type !start in the chat to Start somthing Created By : Dive'
                });
            break;    
            // !currencies
            case 'Currencies':
                bot.sendMessage({
                    to: channelID,
                    message: 'there are 2 currencies one Diamonds and second Rubies'
                });
             break;   
            // !TeamDC
            case 'TeamDC':
                bot.sendMessage({
                    to: channelID,
                    message: 'GG You Got A Creators Code =D and you got 20 Rubies XD'
                });
            break;    
            // !Status
            case 'Status':
                bot.sendMessage({
                    to: channelID,
                    message: 'Online Will Be Offline Soon :smiley:'
                });
            break;    
            // !Insult
            case 'Insult':
                bot.sendMessage({
                    to: channelID,
                    message: 'Hi Noob You Are a Noob You Need Some ROBLOXian OBC And Get some ROBUX NOW! Noob'
                })
            break; 
            //  !SpeedRun
            case 'SpeedRun':
                bot.sendMessage({
                    to: channelID,
                    message: 'Now Hiring Developers! link : https://goo.gl/forms/kJKbZPhZUHqhoIS02'
                });   
            break;
            // !TESTING
            case 'Test':
                logger.info('userID: '+userID); 
                logger.info('user: '+user);
                logger.info('channelID: '+channelID); 
                logger.info('message: '+message);
                logger.info('evt: '+evt.name);    
            break;
            //  !Server
            case 'Server':
                bot.sendMessage({
                    to: channelID,
                    message: 'Please Choose A Server 1. [Old] Dives Crew : https://discord.gg/UYA7NNy 2. [TeamDC] Team DC Radar : https://discord.gg/wbFbRy5 3. [Dives Crew Status] : https://discord.gg/wJTMVGp '
                });   
            break;
            // !messageUs
            case 'messageUs':
                bot.sendMessage({
                    to: '363560775559675904',
                    message: 'This is a test!'
                }); 
            break;
            //  !DevSync
            case 'DevSync':
                bot.sendMessage({
                    to: channelID,
                    message: 'Social Engine Code Platform DevSync Gets You Anything'
                });  
            break;
         //add any case commands if you want to..
         }
     }
});
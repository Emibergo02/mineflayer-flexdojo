const mineflayer = require('mineflayer');
const Discord = require('discord.js');
const sleep = require('sleep');
const main = require('./main.js');
var check="";
exports.arraybot=[];

exports.joinbot=function(host,name,version,channel){
  var bot = mineflayer.createBot({
    host: host, // optional
    port: 25565,       // optional
    username: name+parseInt(Math.random()*100), // email and password are required only for
          // online-mode=true servers
    version: version                 // false corresponds to auto version detection (that's the default), put for example "1.8.8" if you need a specific version
  });
  bot.on('title', function(text) {
    var testo=JSON.parse(text);
    if(testo.text.indexOf("Benvenuto")!=-1)
      channel.send(testo.text);
    else if(text.indexOf("register")!=-1){
      sleep.sleep(2);
      bot.chat("/register lol333 lol333");
    }else if(text.indexOf("login")!=-1){
      sleep.sleep(2);
      bot.chat("/login lol333");
    }
  });
  bot.on('chat', function(username,message) {
    //controllodoppi(channel,message)
  });
  bot.on('kicked', function(reason, loggedIn) {
    controllodoppi(channel,bot.username+" kicked: "+JSON.parse(reason).text)
  });
  bot.on('error', err => console.log(err));

  this.arraybot.push({
    bot:bot,
    channel: initChannel(bot.username)
  })


}

function controllodoppi(channel,testo){
  if(testo!=check){
    channel.send(testo);
    check=testo;
  }
}
function initChannel(nome){
  console.log(main.guild.id)
  main.guild.createChannel(nome, { type: 'text' })
  //.then(channel => {
    //let category = main.guild.channels.find(c => c.name == "bots" && c.type == "category");
    //console.log("vado")
    //if (!category) throw new Error("Category channel does not exist");
    //channel.setParent(category.id);

  //})
  .catch(console.error);







}

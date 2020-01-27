const Discord = require('discord.js');
const mineflayer = require('mineflayer');
const api = require('./prova.js');
const dclient = new Discord.Client();
var listabot=[];
exports.guild;

dclient.login("NTI5MjkxNTYzMjM5NjA0MjM0.Xixspw.ty4uoM2JDiOZxuQThoNMCXmlAzo");   //entra nel srv discord col token
dclient.on('ready', () => {
    console.info(`Logged in as ${dclient.user.tag}!`);                          //dice quando è pronto
    exports.guild=dclient.guilds.array()[0];
});

dclient.on('message', msg => {
    if(msg.channel.id == "670662859662950410"){                                 //controlla se il canale è abilitato
      var testo=msg.content.split(" ");
      if(testo[0]=="=createbot")                                                //comando default
      if(testo.length<3){                                                       //controllo lunghezza parametri
        msg.channel.send("Usage: =createbot <host> <basename> <version> <joindelay>\ncreerà all'infinito dei bot (per ora)");
      }else{
        msg.channel.send("bella");
        setInterval( () => {
          api.joinbot(testo[1],testo[2],testo[3],msg.channel)                   //crea un bot con un ritardo di 5 sec
        }, testo[4]);
      }
      if(testo[0]=="=chatall")
        for(x of api.arraybot){
          x.chat(msg.content.substring(9))

        }
      if(testo[0]=="=stopall"){
        for(x of dclient.guilds.array()[0].channels.find(c => c.name == "bots" && c.type == "category").children)
        x.delete();
        process.exit()
      }

    }
});

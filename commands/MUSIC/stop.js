const { MessageEmbed } = require('discord.js')

module.exports= {
  name: "stop",
  vcOnly: true,
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","CONNECT","SPEAK","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD"],
  
run: (client, message, args) => {
  const player = message.client.manager.players.get(message.guild.id)
  const color = message.guild.me.roles.highest.color

 if (!player) {
    let embed = new MessageEmbed()
      .setColor("343434")
      .setDescription(" There is nothing playing")
    return message.channel.send(embed)
  }

  const { channel } = message.member.voice

  
  if (channel.id !== player.voiceChannel) {
    let embed = new MessageEmbed()
      .setColor("343434")
      .setDescription(` must join be in same voice  channel`)
    return message.channel.send(embed)
  } 
  player.destroy()
  return message.channel.send({
    embed: {
      color: "343434",
      description: "<a:onaytik:863770455830822923> STOPPED"
 } })
}}
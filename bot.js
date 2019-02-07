const Discord = require("discord.js"); // We Call The Packages.
// const PREFIX = "<"; // You can change this Prefix to whatever you want.
const PREFIX = process.env.PREFIX;

var bot = new Discord.Client();

// Events.
bot.on("ready", function() {
    bot.user.setGame(`Follow me on IG: Naoi_Gnzalez`);
    console.log(`${bot.user.username} Esta Listo!`);

// Commands.
    if (command == "help") {
        var embedhelpmember = new Discord.RichEmbed()
            .setAuthor("Command List.")
            .addField(" - ping", "CUAK")
            .setColor(0x00FFEE)
    };


    if (command == "Cuak") {
        message.channel.send("**TMesG**");

});

// Bot Login.
// bot.login('BOT_TOKEN');
bot.login(process.env.BOT_TOKEN);

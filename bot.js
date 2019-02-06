const Discord = require("discord.js"); // We Call The Packages.
// const PREFIX = "<"; // You can change this Prefix to whatever you want.
const PREFIX = process.env.PREFIX;

var bot = new Discord.Client();

// Events.
bot.on("ready", function() {
    bot.user.setGame(`Follow me on IG: Naoi_Gnzalez`);
    console.log(`${bot.user.username} Esta Listo!`);
});

bot.on("message", function(message) {

    if (message.author.bot) return;

    if (!message.guild) return;

    if (!message.content.startsWith(PREFIX)) return;
    
    var args = message.content.substring(PREFIX.length).split(" ");
    var command = args[0].toLowerCase();

// Commands.
    if (command == "help") {
        var embedhelpmember = new Discord.RichEmbed()
            .setAuthor("ðŸ’¬ Command List.")
            .addField(" - avatar", "Show your Avatar.")
            .addField(" - ping", "PING PONG.")
            .setColor(0x00FFEE)
            .setFooter("â’¸ 2019 Example Bot.", bot.user.displayAvatarURL);
        var embedhelpadmin = new Discord.RichEmbed()
            .setAuthor("ðŸ’¬ Moderator Commands.")
            .addField(" - prune", "Prune up to `99` Messages.")
            .addField(" - kick", "Kick someone from your Server.")
            .setColor(0x00FFEE)
            .setFooter("â’¸ 2019 Example Bot.", bot.user.displayAvatarURL);
            message.channel.send(embedhelpmember)
        if(message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(embedhelpadmin);
    };
        })
    };

    if (command == "ping") {
        message.channel.send("**:ping_pong: PONG!**");
    };

  

    };

});

// Bot Login.
// bot.login('NDM0MTI1MzY0MjIzMjc5MTA0.DzwNFQ.SUKhceELeV0VUaNuIOswb2nprio');
bot.login(process.env.BOT_TOKEN);

const { ChatInputCommandInteraction, SlashCommandBuilder } = require("discord.js");
const { execute } = require("../../Events/Interactions/Slashcommands");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Te voy a responder con pong :p"),

    /** 
     * 
     * @param {ChatInputCommandInteraction} interaction
    */
    
    execute(interaction){
        interaction.reply({content: "pong", ephemeral: true});
    },
};
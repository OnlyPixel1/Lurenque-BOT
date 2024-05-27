const { ChatInputCommandInteraction } = require("discord.js");

module.exports = {
    name: "interactionCreate",
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction  
     */
    execute(interaction, client){
        if (!interaction.isChatInputCommand()) return;

        const command = client.commads.get(interaction.commadName);
        if(!command)
        return interaction.reply({
            content: "This command is outdated",
            ephemeral: true,
        });

        if (command.developer && interaction.user.id !== "389507666386354176")
        return interaction.reply({
            content: "Este comando es para el owner <3",
            ephemeral: true,
        });

        command.excute(interaction, client);
    }
}
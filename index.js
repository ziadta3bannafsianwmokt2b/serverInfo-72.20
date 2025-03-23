const { ActionRowBuilder , ButtonStyle , ButtonBuilder , EmbedBuilder, EmbedType, Embed , EmbedAssertions } = require ('discord.js');
const { prefix , token } = require ('config.json');
client.on('messageCreate', async (message) => {
  if (message.author.bot) return;


  if (message.content.startsWith('server')) {
    
    const guild = message.guild;

    try {
     
      const serverEmbed = new EmbedBuilder()
        .setColor('Random')
        .setTitle(`${guild.name} معلومات سيرفر`)
        .setThumbnail(guild.iconURL()) 
        .addFields(
          { name: 'Server Name', value: guild.name, inline: true },
          { name: 'Server ID || معرف السيرفر', value: guild.id, inline: true },
          { name: 'Total Members || عدد الاعضاء', value: `${guild.memberCount}`, inline: true },
          { name: 'Creation Date || تاريخ الانشاء', value: guild.createdAt.toDateString(), inline: true },
          { name: 'Region || المتطقه', value: guild.preferredLocale || 'N/A', inline: true },
          { name: 'Boost Level || مستوى البوستات', value: ` ${guild.premiumTier}`, inline: true },
          { name: 'Boost Count || عدد البوستات', value: `${guild.premiumSubscriptionCount} boosts`, inline: true },
          { name: 'Owner || الاونر', value: `<@${guild.ownerId}> `, inline: true }
        )
        .setFooter({ text: 'Server Info' })
        .setTimestamp();

      if (guild.iconURL()) {
        serverEmbed.setImage(guild.iconURL({ dynamic: true, size: 1024 })); 
      }

     
      message.channel.send({ embeds: [serverEmbed] });
    }
  }
});

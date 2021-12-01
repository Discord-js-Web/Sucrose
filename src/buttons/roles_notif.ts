import { Button } from 'src/typings';
import { roles as _roles } from '../config.json';

const role: string = ''; // Créer un rôle de notification

export = <Button<'base'>>{
  data: {
    customId: 'roles_notif',
    label: 'Activé/Désactivé les notifications',
    emoji: '🔔',
    style: 'PRIMARY',
  },

  exec: async ({ interaction }) => {
    if (!interaction.guild) return;

    const member = await interaction.guild.members.fetch(interaction.user);
    if (!member) return;

    if (member.roles.cache.get(role)) {
      member.roles.remove(role).then(
        () => interaction.reply({ content: '⭕ `| ` Vous ne serez plus notifié par notre serveur' }),
        () => interaction.reply({ content: '❌ `| ` Une erreur est survenue lors de la supression de votre rôle' })
      );
    } else {
      member.roles.add(role).then(
        () => interaction.reply({ content: '⭕ `| ` Vous serez maintenant notifié par notre serveur' }),
        () => interaction.reply({ content: "❌ `| ` Une erreur est survenue lors de l'ajout de votre rôle" })
      );
    }
  },
};

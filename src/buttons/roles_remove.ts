import { Button } from 'src/typings';
import { roles as _roles } from '../config.json';

const roles: string[] = Object.values(_roles).flat();

export = <Button<'base'>>{
  data: {
    customId: 'roles_remove',
    label: 'Supprimez vos rôles',
    emoji: '🗑',
    style: 'DANGER',
  },

  exec: async ({ interaction }) => {
    if (!interaction.guild) return;

    const member = await interaction.guild.members.fetch(interaction.user);
    if (!member) return;

    const roles_to_remove = member.roles.cache.filter((role) => roles.includes(role.id));
    if (!roles_to_remove.size) return interaction.reply({ content: "❌ `| ` Vous n'avez aucun rôle à retirer" });

    member.roles.remove(roles_to_remove).then(
      () => interaction.reply({ content: `⭕ \`| \` Vos ${roles_to_remove.size} ont été retirer de votre profil` }),
      () => interaction.reply({ content: '❌ `| ` Une erreur est survenue lors de la supression de vos rôles' })
    );
  },
};

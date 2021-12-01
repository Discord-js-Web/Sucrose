import { Command } from 'src/typings';

export = <Command>{
  permissions: { user: ['ADMINISTRATOR'] },

  body: {
    name: 'embeds',
    description: 'Nos embeds prédéfinies qui affichent diverses informations',
  },

  exec: ({ interaction }) => {},
};

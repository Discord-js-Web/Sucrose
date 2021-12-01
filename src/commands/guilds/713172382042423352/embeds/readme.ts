import { CommandOption } from 'src/typings';

export = <CommandOption>{
  option: {
    type: 'SUB_COMMAND',
    name: 'readme',
    description: 'Embed pour le salon #readme',
  },

  exec: ({ interaction, sucrose }) => {
    interaction.reply({
      embeds: [
        {
          author: { name: "🥥 Serveur d'entraide" },
          description: [
            "• Des **salons d'aides** sont disponibles sur notre serveur, **exposez** et **expliquez clairement** votre soucis et un de nos helpeur viendra pour vous aider au mieux et pour vous faire comprendre la solution que vous trouverez ensemble.",
            "• Vous avez la possibilité de **faire tester vos projets** tel qu'un bot Discord, un site ou une application. Créez un ticket auprès du staff pour faire une demande, nos testeurs prendront en charge votre projet et votre ticket et travaillerons pour vous rendre leur point de vue",
            '• Nous avons également des astuces et tutoriels disponibles sur notre [Github](https://github.com/Discord-js-Web) et certains de salon Discord, ainsi que nos projets opensoure',
          ].join('\n'),
          image: { url: 'https://i.imgur.com/H9oiogz.png' },
          footer: { text: 'Vous pouvez sélectionner vos rôles ci dessous' },
        },
      ],

      components: [
        {
          type: 'ACTION_ROW',
          components: [],
        },
      ],
    });
  },
};

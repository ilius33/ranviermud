'use strict';

module.exports = srcPath => {
  const Broadcast = require(srcPath + 'Broadcast');

  return {
    usage: 'падежи',
    aliases: ['падежи'],
    command: state => (args, player, arg0) => {
      if (!args) {
        Broadcast.sayAt(player, '<b>Именительный падеж!</b>');
        return Broadcast.sayAt(player, '<b><yellow>Please describe the bug you have found.</yellow></b>');
      }

      player.emit('bugReport', {
        description: args,
        type: arg0
      });

      Broadcast.sayAt(player, `<b>Your ${arg0} report has been submitted as:</b>\n${args}`);
      Broadcast.sayAt(player, '<b>Thanks!</b>');
    }
  };
};
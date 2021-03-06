'use strict';

/**
 * Player creation event
 */
module.exports = (srcPath) => {
  const EventUtil = require(srcPath + 'EventUtil');
  const CommonFunctions = require('../lib/CommonFunctions');

  return {
    event : (state) => (socket, args) => {
      const say    = EventUtil.genSay(socket);
      const write  = EventUtil.genWrite(socket);

      write("<bold>Выберите имя для вашего персонажа:</bold> ");
      socket.once('data', name => {
        say('');
        name = name.toString().trim();

        const invalid = CommonFunctions.validateName(name);

        if (invalid) {
          say(invalid);
          return socket.emit('create-player', socket, args);
        }

        name = name[0].toUpperCase() + name.slice(1);

        const exists = state.PlayerManager.exists(name);

        if (exists) {
          say(`Это имя занято. Придумайте другое.`);
          return socket.emit('create-player', socket, args);
        }

        args.name = name;
        return socket.emit('player-name-check', socket, args);
      });
    }
  };
};

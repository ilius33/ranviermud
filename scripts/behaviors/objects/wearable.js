exports.listeners = {
	wear: function (l10n) {
		return function (location, player, players) {
			player.sayL10n(l10n, 'WEAR', this.getShortDesc(player.getLocale()));
		};
	},
	remove: function (l10n) {
		return function (player) {
			player.sayL10n(l10n, 'REMOVE', this.getShortDesc(player.getLocale()));
		};
	}
};

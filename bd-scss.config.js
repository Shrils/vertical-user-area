/** @type {import('bd-scss/lib/config').Config} */
export default {
	meta: {
		name: "Vertical User Area",
		author: "Shrils#0001",
		version: "1.0",
		description: "Moves the user area to the sidebar",
		source: "https://github.com/DiscordStyles/HorizontalServerList",
		invite: "Shrils",
		website: "https://shrils.com"
	},
	baseImport: 'https://discordstyles.github.io/HorizontalServerList/dist/HorizontalServerList.css',
	base: {
		output: 'dist/dist'
	},
	addons: [
		['src/addons/_verticaluserarea.scss', 'dist/VerticalUserArea.css'],
	]
}
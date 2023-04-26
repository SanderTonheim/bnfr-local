import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
	api: {
		projectId: '8rpris03',
		dataset: 'production',
		useCdn: false,
	},
})

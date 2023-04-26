import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from './schemas/schema'
import deskStructure from './deskStructure'
import { visionTool } from '@sanity/vision'

export default defineConfig({
	title: 'BFNR-Bedriftregister',
	projectId: '8rpris03',
	dataset: 'production',
	useCdn: false,
	plugins: [deskTool({}), visionTool()],
	schema: {
		types: schemas,
	},
})

import groq from 'groq'
import { Client } from '../../client'
const handler = async (req, res) => {
	// Check for secret to confirm this is a valid request

	const algoliasearch = require('algoliasearch')
	const client = algoliasearch('BC0Z4HS7B1', '7c31f7f4e01eaf32e1ce709e3ec8dd4c')
	const index = client.initIndex('Members')
	try {
		const { slug } = req.body
		index.getObject(slug).then((object) => {
			console.log(object)
		})
		await res.revalidate(`/profile`)
		await res.revalidate(`/profile/${slug}`)

		res.status(200).json({ msg: 'updated' })
	} catch (err) {
		// If there was an error, Next.js will continue
		// to show the last successfully generated page
		return res.status(500).send('Error revalidating')
	}
}

export default handler

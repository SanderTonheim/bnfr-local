// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import groq from 'groq'
// import sanityClient from '../../client'

// export default function handler(req, res) {
// 	// get data from cms

// 	console.log(data)

// 	res.status(200).json('data')
// }

// export default async function handler(req, res) {
// 	// Check for secret to confirm this is a valid request
// 	if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
// 		return res.status(401).json({ message: 'Invalid token' })
// 	}

// 	try {
// 		const {
// 			body: { type, slug },
// 		} = req
// 		await res.revalidate(`/profile/"${slug}"`)
// 		return res.json({ revalidated: true })
// 	} catch (err) {
// 		// If there was an error, Next.js will continue
// 		// to show the last successfully generated page
// 		return res.status(500).send('Error revalidating')
// 	}
// }

// export default async function handler(req, res) {
// 	// Check for secret to confirm this is a valid request
// 	if (req.query.secret !== process.env.SANITY_WEBHOOK_SECRET) {
// 		return res.status(401).json({ message: 'Invalid token' })
// 	}

// 	try {
// 		// this should be the actual path not a rewritten path
// 		// e.g. for "/blog/[slug]" this should be "/blog/post-1"
// 		await res.revalidate('/profile/sands')
// 		return res.json({ revalidated: true })
// 	} catch (err) {
// 		// If there was an error, Next.js will continue
// 		// to show the last successfully generated page
// 		return res.status(500).send('Error revalidating')
// 	}
// }
// const data = () => {
// 	Client.fetch(groq`*[_type == "medlem"]`).then((response) => {
// 		const algoliasearch = require('algoliasearch')
// 		const client = algoliasearch('BC0Z4HS7B1', '285796df216a570721c98b33ba986821')
// 		const index = client.initIndex('Members')

// 		response.map((item) => {
// 			const record = { objectID: item._id, name: item.name }
// 			index.saveObject(record).wait()
// 			return
// 		})
// 		return
// 	})
// }
// data()

// import { SIGNATURE_HEADER_NAME, isValidSignature } from '@sanity/webhook'

const handler = (req, res) => {
	//authenticating the webhook

	try {
		// const signature = req.headers[SIGNATURE_HEADER_NAME].toString()
		// if (!isValidSignature(JSON.stringify(req.body), signature, process.env.SANITY_WEBHOOK_SECRET)) return res.status(401).json({ msg: 'Invalid request!' })
		//getting payload
		// const { slug } = req.body
		// await res.revalidate(`/profile`)
		// await res.revalidate(`/profile/${slug}`)

		const algoliasearch = require('algoliasearch')
		const client = algoliasearch('BC0Z4HS7B1', process.env.ALGOLIA_KEY)
		const index = client.initIndex('Members')

		res.status(200).json({ msg: 'Product pages revalidated.' })
	} catch (error) {
		res.status(500).json({ err: 'Something went Wrong!' })
	}
}

export default handler

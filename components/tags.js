import urlFor from '../lib/sanity'
import s from '../styles/tags.module.css'

export default function Tags({ list }) {
	console.log(list)
	return list.map((tag) => {
		return (
			<li
				className={s.container}
				key={tag.Name}>
				{tag?.Name}
				{/* <img
					key={tag?._id}
					src={urlFor(tag?.icon.asset._ref)}
					alt='picture of user icon'
				/> */}
			</li>
		)
	})
}

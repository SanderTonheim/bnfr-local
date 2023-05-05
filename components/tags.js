import urlFor from '../lib/sanity'
import s from '../styles/tags.module.css'

export default function Tags({ list }) {
	return (
		<div className={s.tags}>
			{list.map((tag) => {
				return (
					<li
						className={s.container}
						key={tag?._id}>
						{tag?.Name}
						<img
							src={urlFor(tag?.icon.asset._ref)}
							alt='picture of user icon'
						/>
					</li>
				)
			})}
		</div>
	)
}

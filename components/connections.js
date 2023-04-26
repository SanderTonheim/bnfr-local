import s from '../styles/certifications.module.css'
import urlFor from '../lib/sanity'
export default function Connections({ list }) {
	return (
		<>
			{list.map((item) => {
				return (
					<div
						className={s.groups}
						key={item.name}>
						<img
							src={urlFor(item.icon.asset._ref)}
							alt='icon'
						/>
					</div>
				)
			})}
		</>
	)
}

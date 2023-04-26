import s from '../styles/certifications.module.css'
import urlFor from '../lib/sanity'
export default function Certifications({ list }) {
	return list.map((item) => {
		return (
			<li
				key={item.name}
				className={s.container}>
				{item.name}
				<img
					src={urlFor(item.icon.asset._ref)}
					alt='icon'
				/>
			</li>
		)
	})
}

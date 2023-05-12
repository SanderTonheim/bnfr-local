import Link from 'next/link'
/* --------------------------------- algolia -------------------------------- */
import algoliasearch from 'algoliasearch/lite'
/* --------------------------------- filter --------------------------------- */
import { InstantSearch, MenuSelect, Hits, RefinementList } from 'react-instantsearch-dom'
/* ---------------------------------- style --------------------------------- */
import icons from '../../assets/icons/index'
import s from '../../styles/searchBtn.module.css'
import { useState } from 'react'

export default function TagsFilter() {
	const searchClient = algoliasearch('BC0Z4HS7B1', '7c31f7f4e01eaf32e1ce709e3ec8dd4c')

	const [category, setCategory] = useState(false)
	const [certification, setCertification] = useState(false)
	const [connections, setConnections] = useState(false)

	const Hit = ({ hit }) => {
		return (
			<div className={s.company}>
				<Link
					className={s.link}
					href={'/profile/' + hit.slug}>
					{hit.name}
				</Link>
				<div className={s.image}>
					<img
						src={icons.member.src}
						alt='member icon picture'
					/>
				</div>
			</div>
		)
	}

	return (
		<InstantSearch
			indexName='Members'
			searchClient={searchClient}>
			<div className={s.filterButtonContainer}>
				{/* /* ----------------------------------------------------------------------- */}
				<div className={s.buttonListContainer}>
					<button
						className={s.button}
						onClick={() => setCategory(!category)}>
						Kategorier
					</button>
					<div
						className={s.filterList}
						style={{ visibility: category ? 'visible' : 'hidden' }}>
						<RefinementList attribute={'tags.Name'} />
					</div>
				</div>
				{/* /* ----------------------------------------------------------------------- */}

				<div className={s.buttonListContainer}>
					<button
						className={s.button}
						onClick={() => setCertification(!certification)}>
						Sertifiseringer
					</button>
					<div
						className={s.filterList}
						style={{ visibility: certification ? 'visible' : 'hidden' }}>
						<RefinementList attribute={'certifications.name'} />
					</div>
				</div>

				<div className={s.buttonListContainer}>
					<button
						className={s.button}
						onClick={() => setConnections(!connections)}>
						Tilknyttninger
					</button>
					<div
						className={s.filterList}
						style={{ visibility: connections ? 'visible' : 'hidden' }}>
						<RefinementList attribute={'connections.name'} />
					</div>
				</div>
			</div>

			<Hits
				hitComponent={Hit}
				className={s.hit}
			/>
		</InstantSearch>
	)
}

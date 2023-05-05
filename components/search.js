import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-hooks-web'
import Link from 'next/link'
import { useState } from 'react'
import s from '../styles/search.module.css'

export default function Search() {
	const [value, setValue] = useState(0)
	const searchClient = algoliasearch('BC0Z4HS7B1', '7c31f7f4e01eaf32e1ce709e3ec8dd4c')
	const Hit = ({ hit }) => <Link href={'/profile/' + hit.name.toLowerCase().toString().replace(/\s/g, '-')}>{hit.name}</Link>

	const onStateChange = (e) => {
		setValue(e.uiState.Members.query)
	}
	return (
		<div className={s.container}>
			<InstantSearch
				indexName={'Members'}
				searchClient={searchClient}
				onStateChange={onStateChange}>
				<div className={s.search}>
					<SearchBox
						className={s.searchBox}
						placeholder='Søk etter bedrifter'
					/>
					{value?.length > 2 ? (
						<Hits
							className={s.hits}
							hitComponent={Hit}
						/>
					) : (
						<></>
					)}
				</div>
			</InstantSearch>
		</div>
	)
}

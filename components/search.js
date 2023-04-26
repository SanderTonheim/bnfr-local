import algoliasearch from "algoliasearch";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import s from "../styles/search.module.css";
import { useState } from "react";
import Link from "next/link";

export default function Search() {
	const [value, setValue] = useState(null)
	const handleChange = (e) => {
		setValue(e.target.value)
	}

	const searchClient = algoliasearch('BC0Z4HS7B1', 'efb4c3162db4848f35d83092db403111')
	const Hit = ({ hit }) => <Link href={'/profile/' + hit.name.toLowerCase().toString().replace(/\s/g, '-')}>{hit.name}</Link>

	return (
		<InstantSearch
			className={s.container}
			indexName={'Members'}
			searchClient={searchClient}>
			<div
				className={s.search}
				onChange={handleChange}>
				<input
					type='text'
					placeholder='Søk'
				/>
				<button id={s.searchBtn}>søk</button>

        {value > " " ? (
          <>
            <Hits hitComponent={Hit} className={s.hit}></Hits>
          </>
        ) : (
          ""
        )}
      </div>
    </InstantSearch>
  );
}

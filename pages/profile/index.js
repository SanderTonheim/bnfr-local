import s from '../../styles/profileIndex.module.css'
import Link from 'next/link'
import Search from '../../components/search'
import icons from '../../assets/icons/index'
import arrow from '../../assets/arrow.svg'
import TagsFilter from '../../components/filter/tagsFilter'
/* --------------------------------- sanity --------------------------------- */
import groq from 'groq'
import { Client } from '../../client'
/* ------------------------------------ Render items on page ----------------------------------- */
const ProfileList = ({ medlem }) => {
	const isMainSponsor = medlem.filter((mainSponsors) => {
		return mainSponsors
	})

	medlem.sort((a, b) => {
		if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
		else if (a.name.toLowerCase() < b.name.toLowerCase()) return 1
	})

	return (
		<>
			<h1 className={s.header}>Medlemsliste</h1>
			<div className={s.arrow}>
				<img
					src={arrow.src}
					alt='figure picture'
				/>
			</div>
			<div className={s.container}>
				<div className={s.search}>
					<Search />
				</div>
				<TagsFilter />
			</div>
		</>
	)
}
export default ProfileList

/* ------------------------------ sanity fetch ------------------------------ */
export async function getStaticProps() {
	const medlem = await Client.fetch(groq`*[_type == 'medlem']`)

	return {
		props: {
			medlem,
		},
	}
}

import s from '../../styles/profileIndex.module.css'
import Link from 'next/link'
import Search from '../../components/search'
import icons from '../../assets/icons/index'
import arrow from '../../assets/arrow.svg'
import { CertificationsBtn, ConnectionsBtn, TagsBtn } from '../../components/filterBtns'
import MobileFilter from '../../components/mobileFilter'
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
				<section className={s.search}>
					<Search />
				</section>
				<section className={s.filterBtns}>
					<TagsBtn />
					<CertificationsBtn />
					<ConnectionsBtn />
					<MobileFilter />
				</section>
				<section className={s.list}>
					{medlem.map((medlem) => {
						return (
							<div
								className={s.company}
								key={medlem._id}>
								<Link
									className={s.link}
									href={'/profile/' + medlem.slug.current.toString()}>
									{medlem.name}
								</Link>
								<div className={s.image}>
									<img
										src={icons.member.src}
										alt='member icon picture'
									/>
								</div>
							</div>
						)
					})}
				</section>
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

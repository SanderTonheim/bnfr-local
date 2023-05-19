import s from '../styles/home.module.css'
import Search from '../components/search'
import MainSponsors from '../components/mainSponsors'
import arrow from '../assets/arrow.svg'
import Image from 'next/image'
import { Autocomplete } from '@react-google-maps/api'
import figure from '../assets/frontPageFigure.png'
import SecondarySponsors from '../components/secondarySponsors'
import icons from '../assets/icons'
import Link from 'next/link'

const Home = () => {
	return (
		<main className={s.mainContainer}>
			<section className={s.section_1}>
				<div className={s.content}>
					<p className={s.header}>Våre samarbeidspartnare</p>
					<img
						className={s.figure}
						src={figure.src}
						alt='figure'
					/>
				</div>
			</section>

			<section className={s.section_2}>
				<div className={s.arrow}>
					<Image
						src={arrow}
						width={100}
						alt='site illustration'
					/>
				</div>
				<div className={s.search}>
					<Search />
				</div>
				<div className={s.sponsorHeading}>
					<h1>Hovudsamarbeidspartnare</h1>
					<img
						src={icons.mainSponsor.src}
						alt='Main Sponsors'
					/>
				</div>
				<div className={s.mainSponsorContainer}>
					<MainSponsors />
				</div>
				<div className={s.sponsorHeading}>
					<h2>Samarbeidspartnare</h2>
					<img
						src={icons.secondarySponsor.src}
						alt='Main Sponsors'
					/>
				</div>
				<div className={s.mainSponsorContainer}>
					<SecondarySponsors />
				</div>
				<div className={s.membersButton}>
					<Link
						className={s.button}
						href={'/profile'}>
						<button>Se alle medlemmer</button>
					</Link>
				</div>
			</section>
		</main>
	)
}

export default Home

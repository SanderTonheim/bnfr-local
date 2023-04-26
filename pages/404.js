import Link from 'next/link'
import styles from '../styles/404.module.css'

/* ------------------------------------ Render items on page ----------------------------------- */
export default function PageNotFound() {
	return (
		<div className={styles.container}>
			<h1>Fant ingen side!</h1>
			<p>
				Klikk <Link href='/'>her </Link> for å gå hjem
			</p>
		</div>
	)
}

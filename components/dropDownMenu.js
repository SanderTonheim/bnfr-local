import Link from 'next/link'
import { useEffect, useRef } from 'react'
import s from '../styles/dropDownMenu.module.css'

const DropDownMenu = () => {
	return (
		<div className={s.container}>
			<li>
				<Link href='/'>Hjem</Link>
			</li>
			<li>
				<Link href='/profile'>Medlemsliste</Link>
			</li>
		</div>
	)
}

export default DropDownMenu

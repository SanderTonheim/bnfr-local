import Image from 'next/image'
import Link from 'next/link'
import s from '../styles/navbar.module.css'
import menuIcon from '../assets/menu-icon.png'
import DropDownMenu from './dropDownMenu'
import logo from '../assets/logo.svg'
import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
	/* ------------------------------- toggle menu ------------------------------ */
	const refOne = useRef()

	const handleClickOutSide = (e) => {
		if (refOne.current.contains(e.target)) {
		} else {
			setOpen(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutSide)
	}, [])
	const [open, setOpen] = useState(false)

	const toggle = () => {
		{
			setOpen(!open)
		}
	}
	return (
		<>
			<div className={s.navbar}>
				<div className={s.content}>
					<Link href={'/'}>
						<Image
							src={logo}
							width={150}
							height={50}
							alt='logo pic'
						/>
					</Link>
					<div
						ref={refOne}
						className={s.menu}>
						<Image
							src={menuIcon}
							width={30}
							height={25}
							onClick={toggle}
							alt='menu icon'
						/>
					</div>
					<div className={s.links}>
						<Link href='/'>Hjem</Link>
						<Link href='/profile'>Medlemsliste</Link>
					</div>
				</div>
			</div>
			<div className={s.dropDownMenu}>{open ? <DropDownMenu /> : null}</div>
		</>
	)
}

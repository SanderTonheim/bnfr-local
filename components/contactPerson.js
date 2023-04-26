import s from '../styles/contactPerson.module.css'
import icon from '../assets/icons/index'
import Link from 'next/link'

export default function ContactPerson({ list, website, address }) {
	return (
		<>
			{list?.map((contact) => {
				return (
					<ul
						key={contact._key}
						className={s.container}>
						{contact.department?.length > 0 ? <h3>{contact.department}</h3> : ''}

						{contact.name?.length > 0 ? (
							<div className={s.name}>
								<img
									className={s.icon}
									src={icon.name.src}
									alt='name Icon'
								/>
								{contact.name}
							</div>
						) : (
							''
						)}
						{contact.phone > 0 ? (
							<div className={s.phone}>
								<img
									className={s.icon}
									src={icon.phone.src}
									alt='phone Icon'
								/>
								{contact.phone}
							</div>
						) : (
							''
						)}
						{contact.mail?.length > 0 ? (
							<div className={s.mail}>
								<img
									className={s.icon}
									src={icon.mail.src}
									alt='mail Icon'
								/>
								{contact.mail}
							</div>
						) : (
							''
						)}

						{address?.length > 0 ? (
							<div className={s.name}>
								<img
									className={s.icon}
									src={icon.address.src}
									alt='address Icon'
								/>
								{address}
							</div>
						) : (
							''
						)}
					</ul>
				)
			})}
			{website?.length > 0 ? (
				<div className={s.website}>
					<img
						className={s.icon}
						src={icon.website.src}
						alt='website Icon'
					/>
					<Link href={website}> {website}</Link>
				</div>
			) : (
				''
			)}
		</>
	)
}

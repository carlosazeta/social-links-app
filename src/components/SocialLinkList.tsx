// src/components/SocialLinkList.tsx
import { SocialLink as SocialLinkType } from '../types/types'
import SocialLink from './SocialLink'

type SocialLinkListProps = {
	links: SocialLinkType[]
	onEdit: (updatedLink: SocialLinkType) => void
	onDelete: (id: string) => void
}

export default function SocialLinkList({
	links,
	onEdit,
	onDelete,
}: SocialLinkListProps) {
	return (
		<div className='w-full'>
			{links.map((link) => (
				<SocialLink
					key={link.id}
					link={link}
					onEdit={onEdit}
					onDelete={onDelete}
				/>
			))}
		</div>
	)
}

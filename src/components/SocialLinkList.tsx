import { SocialLink as SocialLinkType } from '@/types/types'
import SocialLink from './SocialLink'

type SocialLinkListProps = {
	links: SocialLinkType[]
	onDelete: (id: string) => void
	onEdit: (updatedLink: SocialLinkType) => void
}

export default function SocialLinkList({
	links,
	onDelete,
	onEdit,
}: SocialLinkListProps) {
	return (
		<div className='w-full'>
			{links.map((link) => (
				<SocialLink
					key={link.id}
					link={link}
					onDelete={onDelete}
					onEdit={onEdit}
				/>
			))}
		</div>
	)
}

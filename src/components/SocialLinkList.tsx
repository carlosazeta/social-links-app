import { SocialLink as SocialLinkType } from '@/types/types'
import SocialLink from './SocialLink'

type SocialLinkListProps = {
	links: SocialLinkType[]
	onDelete: (id: string) => void
}

export default function SocialLinkList({
	links,
	onDelete,
}: SocialLinkListProps) {
	return (
		<div className='w-full'>
			{links.map((link) => (
				<SocialLink
					key={link.id}
					id={link.id}
					url={link.url}
					title={link.title}
					onDelete={onDelete}
				/>
			))}
		</div>
	)
}

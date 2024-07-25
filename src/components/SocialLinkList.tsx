import { SocialLink as SocialLinkType } from '@/types/types'
import SocialLink from './SocialLink'

type SocialLinkListProps = {
	links: SocialLinkType[]
}

export default function SocialLinkList({ links }: SocialLinkListProps) {
	return (
		<div className='w-full'>
			{links.map((link) => (
				<SocialLink key={link.id} url={link.url} title={link.title} />
			))}
		</div>
	)
}

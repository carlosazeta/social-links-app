// src/app/page.tsx
import Header from '../components/Header'
import UserProfile from '../components/UserProfile'
import SocialLinkList from '@/components/SocialLinkList'
import { SocialLink } from '@/types/types'

const links: SocialLink[] = [
	{ id: '1', url: 'https://twitter.com', title: 'Twitter' },
	{ id: '2', url: 'https://linkedin.com', title: 'LinkedIn' },
	{ id: '3', url: 'https://github.com', title: 'GitHub' },
]

export default function Home() {
	return (
		<main className='min-h-screen flex flex-col'>
			<Header />
			<div className='flex-grow flex flex-col items-center justify-center p-4'>
				<div className='w-full max-w-md'>
					<UserProfile
						name='John Doe'
						bio='Frontend Developer | React Enthusiast'
						avatarUrl='https://via.placeholder.com/150'
					/>
					<SocialLinkList links={links} />
				</div>
			</div>
		</main>
	)
}

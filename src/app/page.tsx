// src/app/page.tsx
import Header from '../components/Header'
import UserProfile from '../components/UserProfile'
import SocialLink from '../components/SocialLink'

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
					<SocialLink url='https://twitter.com' title='Twitter' />
					<SocialLink url='https://linkedin.com' title='LinkedIn' />
					<SocialLink url='https://github.com' title='GitHub' />
				</div>
			</div>
		</main>
	)
}

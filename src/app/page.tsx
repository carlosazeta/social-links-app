import Image from 'next/image'
import Header from '@/components/Header'
import SocialLink from '@/components/SocialLink'

export default function Home() {
	return (
		<main className='min-h-screen flex flex-col'>
			<Header />
			<div className='flex-grow flex items-center justify-center'>
				<h2 className='text-2xl'>Welcome to Social Links App</h2>
				<div className='w-full max-w-md'>
					<SocialLink url='https://twitter.com' title='Twitter' />
					<SocialLink url='https://linkedin.com' title='LinkedIn' />
					<SocialLink url='https://github.com' title='GitHub' />
				</div>
			</div>
		</main>
	)
}

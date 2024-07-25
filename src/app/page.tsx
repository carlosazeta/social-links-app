import Image from 'next/image'
import Header from '../components/Header'

export default function Home() {
	return (
		<main className='min-h-screen flex flex-col'>
			<Header />
			<div className='flex-grow flex items-center justify-center'>
				<h2 className='text-2xl'>Welcome to Social Links App</h2>
			</div>
		</main>
	)
}

'use client'

import { useState } from 'react'
import Header from '../components/Header'
import UserProfile from '../components/UserProfile'
import SocialLinkList from '../components/SocialLinkList'
import AddLinkForm from '../components/AddLinkForm'
import { SocialLink } from '../types/types'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/components/ui/use-toast'

const initialLinks: SocialLink[] = [
	{ id: '1', url: 'https://twitter.com', title: 'Twitter' },
	{ id: '2', url: 'https://linkedin.com', title: 'LinkedIn' },
	{ id: '3', url: 'https://github.com', title: 'GitHub' },
]

export default function Home() {
	const [links, setLinks] = useState<SocialLink[]>(initialLinks)
	const [profile, setProfile] = useState({
		name: 'John Doe',
		bio: 'Frontend Developer | React Enthusiast',
		avatarUrl: 'https://via.placeholder.com/150',
	})
	const { toast } = useToast()

	const addLink = (newLink: Omit<SocialLink, 'id'>) => {
		const id = (links.length + 1).toString()
		setLinks([...links, { ...newLink, id }])
		toast({
			title: 'Link added',
			description: 'Your new link has been successfully added.',
		})
	}

	const deleteLink = (id: string) => {
		setLinks(links.filter((link) => link.id !== id))
		toast({
			title: 'Link deleted',
			description: 'The link has been successfully removed.',
		})
	}

	const editLink = (updatedLink: SocialLink) => {
		setLinks(
			links.map((link) => (link.id === updatedLink.id ? updatedLink : link))
		)
		toast({
			title: 'Link updated',
			description: 'The link has been successfully updated.',
		})
	}

	const updateProfile = (updatedProfile: {
		name: string
		bio: string
		avatarUrl: string
	}) => {
		setProfile(updatedProfile)
		toast({
			title: 'Profile updated',
			description: 'Your profile has been successfully updated.',
		})
	}

	return (
		<main className='min-h-screen flex flex-col'>
			<Header />
			<div className='flex-grow flex flex-col items-center justify-center p-4'>
				<div className='w-full max-w-md'>
					<UserProfile
						name={profile.name}
						bio={profile.bio}
						avatarUrl={profile.avatarUrl}
						onUpdateProfile={updateProfile}
					/>
					<AddLinkForm onAddLink={addLink} />
					<SocialLinkList
						links={links}
						onDelete={deleteLink}
						onEdit={editLink}
					/>
				</div>
			</div>
			<Toaster />
		</main>
	)
}

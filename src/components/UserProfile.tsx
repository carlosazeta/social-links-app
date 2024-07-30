'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import EditProfileForm from './EditProfileForm'

type UserProfileProps = {
	name: string
	bio: string
	avatarUrl: string
	onUpdateProfile: (updatedProfile: {
		name: string
		bio: string
		avatarUrl: string
	}) => void
}

export default function UserProfile({
	name,
	bio,
	avatarUrl,
	onUpdateProfile,
}: UserProfileProps) {
	const [open, setOpen] = useState(false)

	const handleSave = (updatedProfile: {
		name: string
		bio: string
		avatarUrl: string
	}) => {
		onUpdateProfile(updatedProfile)
		setOpen(false)
	}

	return (
		<div className='text-center mb-6'>
			<img
				src={avatarUrl}
				alt={`${name}'s avatar`}
				className='w-24 h-24 rounded-full mx-auto mb-4'
			/>
			<h2 className='text-2xl font-bold mb-2'>{name}</h2>
			<p className='text-gray-600 mb-4'>{bio}</p>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<Button variant='outline'>Edit Profile</Button>
				</DialogTrigger>
				<DialogContent className='sm:max-w-[425px]'>
					<DialogHeader>
						<DialogTitle>Edit Profile</DialogTitle>
						<DialogDescription>
							Make changes to your profile here. Click save when youre done.
						</DialogDescription>
					</DialogHeader>
					<EditProfileForm
						profile={{ name, bio, avatarUrl }}
						onSave={handleSave}
						onCancel={() => setOpen(false)}
					/>
				</DialogContent>
			</Dialog>
		</div>
	)
}

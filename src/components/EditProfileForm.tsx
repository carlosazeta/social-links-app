// src/components/EditProfileForm.tsx
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

type EditProfileFormProps = {
	profile: {
		name: string
		bio: string
		avatarUrl: string
	}
	onSave: (updatedProfile: {
		name: string
		bio: string
		avatarUrl: string
	}) => void
	onCancel: () => void
}

export default function EditProfileForm({
	profile,
	onSave,
	onCancel,
}: EditProfileFormProps) {
	const [name, setName] = useState(profile.name)
	const [bio, setBio] = useState(profile.bio)
	const [avatarUrl, setAvatarUrl] = useState(profile.avatarUrl)

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		onSave({ name, bio, avatarUrl })
	}

	return (
		<form onSubmit={handleSubmit} className='space-y-4'>
			<Input
				type='text'
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder='Name'
			/>
			<Textarea
				value={bio}
				onChange={(e) => setBio(e.target.value)}
				placeholder='Bio'
			/>
			<Input
				type='url'
				value={avatarUrl}
				onChange={(e) => setAvatarUrl(e.target.value)}
				placeholder='Avatar URL'
			/>
			<div className='flex justify-end space-x-2'>
				<Button type='button' variant='outline' onClick={onCancel}>
					Cancel
				</Button>
				<Button type='submit'>Save</Button>
			</div>
		</form>
	)
}

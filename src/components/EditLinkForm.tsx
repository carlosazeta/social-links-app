// src/components/EditLinkForm.tsx
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SocialLink } from '../types/types'
import { normalizeUrl } from '../utils/urlUtils'

type EditLinkFormProps = {
	link: SocialLink
	onSave: (updatedLink: SocialLink) => void
	onCancel: () => void
}

export default function EditLinkForm({
	link,
	onSave,
	onCancel,
}: EditLinkFormProps) {
	const [title, setTitle] = useState(link.title)
	const [url, setUrl] = useState(link.url)

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (title && url) {
			const normalizedUrl = normalizeUrl(url)
			onSave({ ...link, title, url: normalizedUrl })
		}
	}

	return (
		<form onSubmit={handleSubmit} className='space-y-4'>
			<Input
				type='text'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder='Link Title'
				required
			/>
			<Input
				type='text'
				value={url}
				onChange={(e) => setUrl(e.target.value)}
				placeholder='URL'
				required
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

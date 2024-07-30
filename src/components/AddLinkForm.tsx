'use client'

import { useState } from 'react'
import { SocialLink } from '../types/types'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { normalizeUrl } from '../utils/urlUtils'

type AddLinkFormProps = {
	onAddLink: (link: Omit<SocialLink, 'id'>) => void
}

export default function AddLinkForm({ onAddLink }: AddLinkFormProps) {
	const [title, setTitle] = useState('')
	const [url, setUrl] = useState('')

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (title && url) {
			const normalizedUrl = normalizeUrl(url)
			onAddLink({ title, url: normalizedUrl })
			setTitle('')
			setUrl('')
		}
	}

	return (
		<form onSubmit={handleSubmit} className='space-y-4 mb-6'>
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
			<Button type='submit' className='w-full'>
				Add Link
			</Button>
		</form>
	)
}

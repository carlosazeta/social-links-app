'use client'

import { useState } from 'react'
import { SocialLink } from '@/types/types'

type AddLinkFormProps = {
	onAddLink: (link: Omit<SocialLink, 'id'>) => void
}

export default function AddLinkForm({ onAddLink }: AddLinkFormProps) {
	const [title, setTitle] = useState('')
	const [url, setUrl] = useState('')

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (title && url) {
			onAddLink({ title, url })
			setTitle('')
			setUrl('')
		}
	}

	return (
		<form onSubmit={handleSubmit} className='mb-4'>
			<input
				type='text'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder='Link title'
				className='w-full p-2 mb-2 border rounded text-black'
			/>
			<input
				type='url'
				value={url}
				onChange={(e) => setUrl(e.target.value)}
				placeholder='https://example.com'
				className='w-full p-2 mb-2 border rounded text-black'
			/>
			<button
				type='submit'
				className='w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600'
			>
				Add Link
			</button>
		</form>
	)
}

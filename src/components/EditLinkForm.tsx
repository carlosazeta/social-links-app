'use client'

import { useState } from 'react'
import { SocialLink } from '@/types/types'

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
			onSave({ ...link, title, url })
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				className='w-full p-2 mb-2 border rounded color text-black'
			/>

			<input
				type='url'
				value={url}
				onChange={(e) => setUrl(e.target.value)}
				className='w-full p-2 mb-2 border rounded text-black'
			/>
			<div className='flex justify-between'>
				<button
					type='submit'
					className='p-2 bg-green-500 text-white rounded hover:bg-green-600'
				>
					Save
				</button>
				<button
					type='button'
					onClick={onCancel}
					className='p-2 bg-gray-500 text-white rounded hover:bg-gray-600'
				>
					Cancel
				</button>
			</div>
		</form>
	)
}

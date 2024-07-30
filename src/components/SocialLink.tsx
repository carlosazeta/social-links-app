'use client'
import { useState } from 'react'
import { SocialLink as SocialLinkType } from '@/types/types'
import EditLinkForm from './EditLinkForm'

type SocialLinkProps = {
	link: SocialLinkType
	onDelete: (id: string) => void
	onEdit: (updatedLink: SocialLinkType) => void
}

export default function SocialLink({
	link,
	onDelete,
	onEdit,
}: SocialLinkProps) {
	const [isEditing, setIsEditing] = useState(false)

	if (isEditing) {
		;<EditLinkForm
			link={link}
			onSave={(updatedLink) => {
				onEdit(updatedLink)
				setIsEditing(false)
			}}
			onCancel={() => setIsEditing(false)}
		/>
	}

	return (
		<div className='flex items-center mb-2'>
			<a
				href={link.url}
				target='_blank'
				rel='noopener noreferrer'
				className='block w-full text-center py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded mb-2 transition duration-300'
			>
				{link.title}
			</a>
			<button
				onClick={() => setIsEditing(true)}
				className='ml-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600'
			>
				Edit
			</button>
			<button
				onClick={() => onDelete(link.id)}
				className='ml-2 p-2 bg-red-500 text-white rounded hover:bg-red-600'
			>
				Delete
			</button>
		</div>
	)
}

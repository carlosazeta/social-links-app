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
import { SocialLink as SocialLinkType } from '../types/types'
import EditLinkForm from './EditLinkForm'

type SocialLinkProps = {
	link: SocialLinkType
	onEdit: (updatedLink: SocialLinkType) => void
	onDelete: (id: string) => void
}

export default function SocialLink({
	link,
	onEdit,
	onDelete,
}: SocialLinkProps) {
	const [open, setOpen] = useState(false)

	const handleSave = (updatedLink: SocialLinkType) => {
		onEdit(updatedLink)
		setOpen(false)
	}

	return (
		<div className='flex items-center mb-2'>
			<a
				href={link.url}
				target='_blank'
				rel='noopener noreferrer'
				className='flex-grow block py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded transition duration-300'
			>
				{link.title}
			</a>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<Button variant='outline' className='ml-2'>
						Edit
					</Button>
				</DialogTrigger>
				<DialogContent className='sm:max-w-[425px]'>
					<DialogHeader>
						<DialogTitle>Edit Link</DialogTitle>
						<DialogDescription>
							Make changes to your link here. Click save when youre done.
						</DialogDescription>
					</DialogHeader>
					<EditLinkForm
						link={link}
						onSave={handleSave}
						onCancel={() => setOpen(false)}
					/>
				</DialogContent>
			</Dialog>
			<Button
				onClick={() => onDelete(link.id)}
				variant='destructive'
				className='ml-2'
			>
				Delete
			</Button>
		</div>
	)
}

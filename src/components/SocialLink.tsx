type SocialLinkProps = {
	id: string
	url: string
	title: string
	onDelete: (id: string) => void
}

export default function SocialLink({
	id,
	url,
	title,
	onDelete,
}: SocialLinkProps) {
	return (
		<div className='flex items-center mb-2'>
			<a
				href={url}
				target='_blank'
				rel='noopener noreferrer'
				className='block w-full text-center py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded mb-2 transition duration-300'
			>
				{title}
			</a>
			<button
				onClick={() => onDelete(id)}
				className='ml-2 p-2 bg-red-500 text-white rounded hover:bg-red-600'
			>
				Delete
			</button>
		</div>
	)
}

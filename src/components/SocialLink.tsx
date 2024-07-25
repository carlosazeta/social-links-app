type SocialLinkProps = {
	url: string
	title: string
}

export default function SocialLink({ url, title }: SocialLinkProps) {
	return (
		<a
			href={url}
			target='_blank'
			rel='noopener noreferrer'
			className='block w-full text-center py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded mb-2 transition duration-300'
		>
			{title}
		</a>
	)
}

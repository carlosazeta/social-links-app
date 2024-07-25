type UserProfileProps = {
	name: string
	bio: string
	avatarUrl: string
}

export default function UserProfile({
	name,
	bio,
	avatarUrl,
}: UserProfileProps) {
	return (
		<div className='text-center mb-6'>
			<img
				src={avatarUrl}
				alt={`${name}'s avatar`}
				className='w-24 h-24 rounded-full mx-auto mb-4'
			/>
			<h2 className='text-2xl font-bold mb-2'>{name}</h2>
			<p className='text-gray-600'>{bio}</p>
		</div>
	)
}

import React, { FC } from 'react'
import Button from '../ui/Button'
import Heading from '../ui/Heading'

interface IStart {
	cb: () => void
}

const Start: FC<IStart> = ({ cb }) => {
	return (
		<div className='text-center'>
			<Heading title='QUIZ: Guess country' />
			<Button onClick={cb}>Start quiz</Button>
		</div>
	)
}

export default Start

import React, { FC, useState } from 'react'
import Button from '../../ui/Button'
import Heading from '../../ui/Heading'
import Answer from './Answer'

interface IQuestion {
	cb: () => void
}

const Question: FC<IQuestion> = ({ cb }) => {
	const [selectedIdx, setSelectedIdx] = useState<number | null>(null)

	return (
		<div className='w-2/3 mx-auto'>
			<Heading title='Budapest?' />
			<Answer
				idx={0}
				text={'Austria'}
				selectedIdx={selectedIdx}
				setSelectedIdx={setSelectedIdx}
			/>

			{selectedIdx !== null && (
				<Button onClick={cb} className='block mx-auto mt-6'>
					Send
				</Button>
			)}
		</div>
	)
}

export default Question

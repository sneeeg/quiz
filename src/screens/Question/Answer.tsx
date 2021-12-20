import React, { Dispatch, FC, SetStateAction } from 'react'
import cn from 'classnames'

interface IAnswer {
	idx: number
	text: string
	selectedIdx: number | null
	setSelectedIdx: Dispatch<SetStateAction<number | null>>
}

const getLetter = (idx: number) =>
	idx === 0 ? 'A' : idx === 1 ? 'B' : idx === 2 ? 'C' : 'D'

const Answer: FC<IAnswer> = ({ idx, text, selectedIdx, setSelectedIdx }) => {
	return (
		<button
			className={cn(
				'answer-button rounded-xl shadow-md py-4 px-5 flex w-full items-center',
				{
					active: selectedIdx === idx,
				}
			)}
			onClick={() => setSelectedIdx(idx)}
		>
			<span className='w-7 h-7 rounded-full flex justify-center items-center font-medium mr-4'>
				{getLetter(idx)}
			</span>
			<span className='text-center font-bold text-lg block'>{text}</span>
		</button>
	)
}

export default Answer

import React, { FC } from 'react'

interface IHeading {
	title: string
}

const Heading: FC<IHeading> = ({ title }) => {
	return (
		<h1
			className='font-bold text-center text-2xl mb-7'
			style={{ color: '#082E3C' }}
		>
			{title}
		</h1>
	)
}

export default Heading

import React, { FC } from 'react'
import Heading from '../ui/Heading'

interface IFinish {}

const Finish: FC<IFinish> = () => {
	return (
		<div>
			<Heading title='You are finished!' />
		</div>
	)
}

export default Finish

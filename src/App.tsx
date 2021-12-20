import React, { useState } from 'react'
import Finish from './screens/Finish'
import Question from './screens/Question/Question'
import Start from './screens/Start'

type TypeScreen =
	| 'start'
	| 'question_1'
	| 'question_2'
	| 'question_3'
	| 'finish'

export default function App() {
	const [currentScreen, setCurrentScreen] = useState<TypeScreen>('start')

	return (
		<div className='h-screen flex justify-center items-center'>
			{currentScreen === 'start' ? (
				<Start cb={() => setCurrentScreen('question_1')} />
			) : currentScreen === 'question_1' ? (
				<Question cb={() => setCurrentScreen('finish')} />
			) : (
				<Finish />
			)}
		</div>
	)
}

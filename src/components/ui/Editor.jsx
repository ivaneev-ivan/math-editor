import { useEffect, useState } from 'react'
import { MathComponent } from 'mathjax-react'

const Editor = () => {
	const [text, setText] = useState('')
	const [show, setShow] = useState(true)

	const changeEvent = event => {
		setText(event.target.value)
	}

	useEffect(() => {
		document.getElementById('editor')?.focus()
	})

	console.log(show)

	return (
		<div className='w-full h-screen'>
			{show ? (
				<textarea
					id='editor'
					className='w-full rounded-md shadow-lg p-3 dark:bg-stone-900'
					rows='10'
					onBlur={() => setShow(false)}
					onInput={changeEvent}
				>
					{text}
				</textarea>
			) : (
				<p
					className='w-full  rounded-md border shadow-lg p-3'
					onClick={() => setShow(true)}
				>
					<MathComponent tex={text} />
				</p>
			)}
		</div>
	)
}

export default Editor

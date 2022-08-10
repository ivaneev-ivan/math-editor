import React, { useEffect } from 'react'

const Header = () => {
	useEffect(() => {
		const theme = localStorage.getItem('theme')
		if (theme === 'true') {
			document.documentElement.classList.add('dark')
		}
	})

	const changeTheme = () => {
		const is_dark = document.documentElement.classList.toggle('dark')
		localStorage.setItem('theme', String(is_dark))
	}

	return (
		<header className='h-12 bg-stone-300 dark:bg-stone-700 flex justify-center p-2'>
			<div className='container mx-auto flex justify-between'>
				<h1 className='font-bold'>Math editor</h1>
				<span className='block cursor-pointer' onClick={changeTheme}>
					Change theme
				</span>
			</div>
		</header>
	)
}

export default Header

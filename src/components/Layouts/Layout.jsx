import React from 'react'
import Header from '../ui/Header'

const Layout = ({ children }) => {
	return (
		<div className='h-screen w-full dark:bg-stone-900 dark:text-white transition-colors duration-300'>
			<Header />
			<main className='container mx-auto my-5'>{children}</main>
		</div>
	)
}

export default Layout

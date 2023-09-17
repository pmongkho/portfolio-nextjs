import Image from 'next/image'
import React from 'react'
import fhsu from '../_media/fhsu.jpeg'

export default function Education() {
	return (
		<div className=' [&>p]:text-slate-400'>
			<h1 className='heading'>EDUCATION</h1>
			<p className='leading-7'>Bachelors (in progress) </p>
			<p className='leading-7'>Fort Hays State University · Computer Science</p>
			<p className='leading-7 mb-4'>June 2020 - December 2023</p>
		</div>
	)
}

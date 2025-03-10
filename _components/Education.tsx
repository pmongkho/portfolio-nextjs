import Image from 'next/image'
import React from 'react'
import fhsu from '../_media/fhsu.jpeg'

export default function Education() {
	return (
		<div className=' [&>p]:text-slate-400'>
			<h1 className='heading'>EDUCATION</h1>
			<p className='leading-7'>Bachelor of Science in Computer Science </p>
			<p className='leading-7'>
				<span className=' text-white font-bold'>
					Fort Hays State University
				</span>
			</p>

		</div>
	)
}

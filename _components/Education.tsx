import Image from 'next/image'
import React from 'react'
import fhsu from '../_media/fhsu.jpeg'

export default function Education() {
	return (
		<div className=' [&>p]:text-slate-400'>
			<h1 className='heading'>EDUCATION</h1>
			<p className='leading-7'>Bachelors (in progress) </p>
			<p className='leading-7'>
				<span className=' text-white font-bold'>
					Fort Hays State University · Computer Science
				</span>
			</p>
			<p className='leading-7 mb-4'>June 2021 - December 2023</p>
			<ul className='[&>li]:w-[50%] px-4 text-slate-400 list-disc flex flex-wrap justify-evenly items-center'>
				<li>Object Oriented Programming</li>
				<li>Data Structues</li>
				<li>Back-End Web Development I & II</li>
				<li>Operating Systems</li>
				<li>Calculus I & II</li>
				<li>Software Engineering</li>
				<li>Database Design and Programming</li>
				<li>Discrete Math</li>
				<li>Statistics</li>
				<li>Front-End Web Development</li>
			</ul>
		</div>
	)
}

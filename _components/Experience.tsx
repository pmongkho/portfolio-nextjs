import React from 'react'
import experience from '../_data/experience.json'

export default function Experience() {
	const data = experience.data

	return (
		<div className=' text-slate-400   '>
			{' '}
			<p className='heading'>EXPERIENCE</p>
			<div>
				{data.map((exp) => (
					<div className=' flex items-start justify-between flex-wrap'>
						<div className=' pr-8'>
							<p className='leading-7 mb-2 '>{exp.dates}</p>
						</div>
						<div className='md:max-w-[70vw] '>
							<p className='leading-7  text-white mb-2'>{exp.title}</p>
							<p className=' leading-7 mb-2'>{exp.description}</p>
							<div className='mb-12 flex flex-wrap'>
								{exp.technologies.map((item) => (
									<>
										<span className='technology-item'>{item}</span>
									</>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

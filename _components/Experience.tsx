
import experience from '../_data/experience.json'
import SeeMoreButton from './SeeMoreButton'

export default function Experience() {
	const data = experience.data

	return (
		<div className=' text-slate-400   '>
			{' '}
			<p className='heading'>PROFESSIONAL EXPERIENCE</p>
			<div>
				{data.map((exp) => (
					<div className=' flex items-start justify-between flex-wrap mb-12 '>
						<div className=' pr-8'>
							<p className='leading-7 mb-2 '>{exp.dates}</p>
						</div>
						<div className='lg:max-w-[30vw] md:max-w-[70vw] '>
							<p className='leading-7  text-white mb-2'>{exp.title}</p>
                            <SeeMoreButton description={exp.description} />
							<div className='flex flex-wrap'>
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

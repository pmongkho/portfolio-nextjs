import { experiences } from '@/_data/portfolio'

export default function Experience() {
	return <section id='experience' className='section-shell content-section' aria-labelledby='experience-title'>
		<div className='section-heading'><p className='eyebrow'>01 / Experience</p><h2 id='experience-title'>Software ownership,<br />from requirement to release.</h2></div>
		<div className='timeline'>
			{experiences.map((item) => <article className='timeline-item' key={item.id}>
				<div className='timeline-meta'><p>{item.dates}</p><span aria-hidden='true' /></div>
				<div><p className='organization'>{item.organization}</p><h3>{item.title}</h3><p>{item.description}</p>
					<ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
				</div>
			</article>)}
		</div>
	</section>
}

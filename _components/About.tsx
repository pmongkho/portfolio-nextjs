import { stackGroups } from '@/_data/portfolio'

export default function About() {
	return <section id='about' className='section-shell content-section' aria-labelledby='about-title'>
		<div className='section-heading'><p className='eyebrow'>03 / About</p><h2 id='about-title'>Product-focused.<br />Engineering-led.</h2></div>
		<div className='about-grid'>
			<div className='about-copy'>
				<p>I’m a full-stack software engineer focused primarily on the .NET and Angular ecosystems. I turn operational problems and business requirements into structured software systems—from relational database design and API architecture to user interfaces, integrations, debugging, and deployment.</p>
				<p>Through Azula Investment Group LLC, I have designed and developed software across enterprise operations, logistics, customer acquisition, workflow automation, real-time data processing, and AI-assisted applications.</p>
				<p>I’m interested in full-stack .NET, application development, enterprise software, internal tools, ERP integration, and business systems opportunities.</p>
			</div>
			<aside className='education' aria-label='Education'><p className='eyebrow'>Education</p><h3>Bachelor of Science<br />in Computer Science</h3><p>Fort Hays State University</p><p>2023 · Dean’s List</p></aside>
		</div>
		<div className='stack' aria-labelledby='stack-title'><h3 id='stack-title'>Technical foundation</h3><div className='stack-grid'>
			{stackGroups.map(group => <div key={group.name}><h4>{group.name}</h4><p>{group.items.join(' · ')}</p></div>)}
		</div></div>
	</section>
}

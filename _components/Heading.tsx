const github = 'https://github.com/pmongkho'
const linkedin = 'https://www.linkedin.com/in/pmongkho'

export default function Heading() {
	return (
		<header id='home' className='hero section-shell'>
			<nav aria-label='Primary navigation' className='nav'>
				<a className='wordmark' href='#home' aria-label='Eddy Mongkhonvilay, home'>EM<span>.</span></a>
				<div className='nav-links'>
					<a href='#experience'>Experience</a><a href='#projects'>Projects</a><a href='#about'>About</a><a href='#contact'>Contact</a>
				</div>
			</nav>
			<div className='hero-grid'>
				<div>
					<p className='eyebrow'>Phongsavanh “Eddy” Mongkhonvilay</p>
					<h1>Full-Stack<br /><span>Software Engineer</span></h1>
					<p className='hero-specialty'>.NET <i>/</i> Angular</p>
				</div>
				<div className='hero-copy'>
					<p className='lead'>I architect and build full-stack business applications using C#, ASP.NET Core, Angular, PostgreSQL, SQL Server, and Azure.</p>
					<p>From enterprise operations and ERP automation to customer platforms and real-time applications, I take software from business requirements and system design through implementation and cloud deployment.</p>
					<div className='actions'>
						<a className='button primary' href='#projects'>View engineering projects</a>
						<a className='button' href={github} target='_blank' rel='noreferrer'>View GitHub ↗</a>
						<a className='text-link' href='mailto:pmongkho12@gmail.com?subject=Resume%20request'>Request resume</a>
					</div>
					<a className='subtle-link' href={linkedin} target='_blank' rel='noreferrer'>LinkedIn ↗</a>
				</div>
			</div>
			<div className='credentials' aria-label='Professional highlights'>
				<span><b>Primary stack</b>.NET 8 + Angular</span><span><b>Education</b>B.S. Computer Science</span><span><b>Focus</b>Business & enterprise software</span>
			</div>
		</header>
	)
}

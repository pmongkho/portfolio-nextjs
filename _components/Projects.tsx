import { projects, type Project } from '@/_data/portfolio'

function Architecture({ steps }: { steps: string[] }) {
	return <div className='architecture' aria-label={`Architecture: ${steps.join(' to ')}`}>
		{steps.map((step, index) => <div key={step}><span>{step}</span>{index < steps.length - 1 && <b aria-hidden='true'>→</b>}</div>)}
	</div>
}

function ProjectCaseStudy({ project, index }: { project: Project, index: number }) {
	return <article className='project-card' id={project.id}>
		<div className='project-number'>0{index + 1}</div>
		<div className='project-main'>
			<p className='project-context'>{project.context}</p><h3>{project.title}</h3><p className='project-summary'>{project.summary}</p>
			<div className='tags'>{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
			<details>
				<summary>View case study <span aria-hidden='true'>+</span></summary>
				<div className='case-study'>
					<section><h4>Business problem</h4><p>{project.problem}</p></section>
					<section><h4>My role</h4><p>{project.role}</p></section>
					{project.architecture && <section className='full'><h4>Architecture</h4><Architecture steps={project.architecture} /></section>}
					<section><h4>Key features</h4><ul>{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul></section>
					{project.decisions && <section><h4>Technical decisions</h4>{project.decisions.map(item => <p key={item}>{item}</p>)}</section>}
					{project.repository && <section className='full'><a className='text-link' href={project.repository} target='_blank' rel='noreferrer'>View repository on GitHub ↗</a></section>}
				</div>
			</details>
		</div>
	</article>
}

export default function Projects() {
	return <section id='projects' className='section-shell content-section' aria-labelledby='projects-title'>
		<div className='section-heading'><p className='eyebrow'>02 / Selected work</p><h2 id='projects-title'>Featured engineering projects.</h2><p>Business systems, real-time processing, and full-stack product development.</p></div>
		<div className='projects'>{projects.map((project, index) => <ProjectCaseStudy project={project} index={index} key={project.id} />)}</div>
		<a className='button' href='https://github.com/pmongkho?tab=repositories' target='_blank' rel='noreferrer'>View more on GitHub ↗</a>
	</section>
}

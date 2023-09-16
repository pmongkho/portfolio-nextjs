import React from 'react'

export default function About() {
	return (
		<div className=' [&>p]:text-slate-400'>
			<h1 className='heading'>ABOUT</h1>
			<p className='leading-7 mb-4'>
				Around 2004, I learned HTML & CSS in the age of Myspace. This is what
				led me to a beautiful life of staying up all night coding and developing
				web-pages. Today, I am a{' '}
				<span className=' text-white'>Fullstack Software Engineer</span> and{' '}
				<span className=' text-white'>Computer Science Student</span>. I am well versed in{' '}
				<span className=' text-white'>
					data structures and algorithms, back-end development, and designing scalable
					systems{' '}
				</span>
				from start to finish.
			</p>
            <p className='leading-7 mb-4'>My goal today is to be an efficient Software Engineer. I need <span className=' text-white'>little hand holding</span> and I am a <span className=' text-white'>self-starter.</span> I believe I will be a great asset to any team that gives me an opportunity.</p>
			<p className='leading-7 mb-4'>My hobbies, other than typing on a computer and thinking all day are: being with my daughter, oil painting, tattooing, playing piano, and meditating. </p>
		</div>
	)
}

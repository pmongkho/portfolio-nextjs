import About from '@/_components/About'
import Education from '@/_components/Education'
import Experience from '@/_components/Experience'
import Heading from '@/_components/Heading'
import Projects from '@/_components/Projects'


export default function Home() {
  return (
		<div className='lg:flex '>
			<div className='lg:px-20 lg:min-w-[50vw] mb-24 flex justify-center'>
				{' '}
				{/* head */}
				<Heading />
			</div>
			<div className='[&>*]:mb-24'>
				{/* education */}
				<Education />
				{/* about */}
				<About />
				{/* experience */}
				<Experience />
				{/* projects */}
				<Projects />
			</div>
		</div>
	)
}

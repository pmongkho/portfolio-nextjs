import About from '@/_components/About'
import Certificates from '@/_components/Certificates'
import Education from '@/_components/Education'
import Experience from '@/_components/Experience'
import Footer from '@/_components/Footer'
import Heading from '@/_components/Heading'
import Projects from '@/_components/Projects'


export default function Home() {
  return (
		<div className='lg:flex '>
			<div className='lg:px-20 lg:min-w-[50vw] mb-20 flex justify-center'>
				{' '}
				{/* head */}
				<Heading />
			</div>
			<div className='[&>*]:mb-24'>
				{/* education */}
			  <Education />
			  {/* certificates */}
			  <Certificates/>
				{/* about */}
				<About />
				{/* experience */}
				<Experience />
				{/* projects */}
			  <Projects />
			  <Footer/>
			</div>
		</div>
	)
}

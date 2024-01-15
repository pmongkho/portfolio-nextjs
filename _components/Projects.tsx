import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import inkland from '../_media/inkland.png'
import heatercooler from '../_media/heatercooler.png'
import parkez from '../_media/park-ez.png'

export default function Projects() {
	return (
		<div className=' text-slate-400'>
			<p className=' heading'>PROJECTS</p>
			<div className='flex flex-wrap-reverse w-full items-end justify-between mb-8'>
				<Link href='https://coolerheater.azurewebsites.net/' target='_blank'>
					<div className='lg:max-w-[12vw] '>
						<Image
							src={heatercooler}
							width={250}
							height={250}
							alt='project picture'
							className=' border rounded border-cyan-700 mb-8 hover:border-2 hover:shadow-xl transition '
						/>
					</div>
				</Link>
				<div className='lg:max-w-[25vw] md:max-w-[50vw] '>
					<Link href='https://coolerheater.azurewebsites.net/' target='_blank'>
						<p className=' mb-4 text-white text-lg flex items-center hover:text-cyan-500 transition '>
							CoolerHeater
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-4 h-4 mx-2 '
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25'
								/>
							</svg>
						</p>
					</Link>
					<p>
						CoolerHeater is an app that requests a drone that provides the
						service of heating and cooling clients with a push of a button.
					</p>
					<div className=' flex flex-wrap py-4'>
						<span className='technology-item'>C#</span>
						<span className='technology-item'>ASP.NET</span>
						<span className='technology-item'>MongoDB</span>
						<span className='technology-item'>Mapbox API</span>
						<span className='technology-item'>Stripe API</span>
						<span className='technology-item'>Angular</span>
						<span className='technology-item'>Tailwind CSS</span>
					</div>
				</div>
			</div>
			<div className='flex flex-wrap-reverse w-full items-end justify-between mb-8'>
				<Link href='https://inkland.vercel.app/' target='_blank'>
					<div className='lg:max-w-[12vw] '>
						<Image
							src={inkland}
							width={250}
							height={250}
							alt='project picture'
							className=' border rounded border-cyan-700 mb-8 hover:border-2 hover:shadow-xl transition '
						/>
					</div>
				</Link>
				<div className='lg:max-w-[25vw] md:max-w-[50vw] '>
					<Link href='https://inkland.vercel.app/' target='_blank'>
						<p className=' mb-4 text-white text-lg flex items-center hover:text-cyan-500 transition '>
							Inkland
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-4 h-4 mx-2 '
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25'
								/>
							</svg>
						</p>
					</Link>
					<p>
						Inkland is your go-to tattoo app, connecting clients with talented
						artists for job-seeking opportunities or tattoo-inquiring
						opportunities.
					</p>
					<div className=' py-4'>
						<span className='technology-item'>Next.js</span>
						<span className='technology-item'>Tailwind CSS</span>
						<span className='technology-item'>MongoDB</span>
					</div>
				</div>
			</div>

			<div className='flex flex-wrap-reverse w-full items-end justify-between'>
				<Link href='https://park-ez-fhsu.vercel.app/' target='_blank'>
					<div className='lg:max-w-[12vw] '>
						<Image
							src={parkez}
							width={250}
							height={250}
							alt='project picture'
							className=' border rounded border-cyan-700 mb-8 hover:border-2 hover:shadow-xl transition'
						/>
					</div>
				</Link>
				{/* <div className='lg:max-w-[25vw] md:max-w-[50vw]'>
					<Link href='https://park-ez-fhsu.vercel.app/' target='_blank'>
						<p className=' mb-4 text-white text-lg flex items-center hover:text-cyan-500 transition'>
							ParkEZ
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-4 h-4 mx-2'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25'
								/>
							</svg>
						</p>
					</Link>

					<p>
						ParkEZ is the ultimate solution for hassle-free parking in the
						digital age. With our innovative automated parking garage app,
						finding and securing a parking spot has never been easier.
					</p>
					<div className=' py-4'>
						<span className='technology-item'>Next.js</span>
						<span className='technology-item'>Tailwind CSS</span>
						<span className='technology-item'>MongoDB</span>
						<span className='technology-item'>Stripe API</span>
					</div>
				</div>*/}
			</div> 
		</div>
	)
}

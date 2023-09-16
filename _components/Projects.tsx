import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import inkland from '../_media/inkland.png'
import parkez from '../_media/park-ez.png'

export default function Projects() {
	return (
		<div className=' text-slate-400'>
			<p className=' heading'>PROJECTS</p>
			<div className='flex flex-wrap-reverse w-full items-end justify-between'>
				<Link href='https://inkland.vercel.app/' target='_blank'>
					<div className=''>
						<Image
							src={inkland}
							width={250}
							height={250}
							alt='project picture'
							className=' border rounded border-cyan-700 mb-8 hover:border-2 hover:shadow-xl transition '
						/>
					</div>
				</Link>
				<div className=' md:max-w-[50vw] '>
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
						Inkland is your go-to tattoo app, connecting clients with
						talentedartists for job-seeking opportunities. Clients can easily
						explore artistportfolios, communicate directly with tattoo
						professionals, scheduleappointments, and leave reviews, while
						artists can showcase their work, manage their schedules, and grow
						their client base. With a vibrantcommunity and a user-friendly
						interface, Inkland is the ultimatedestination for all your tattoo
						needs, whether you're looking to getinked or seeking artistic
						opportunities in the tattoo industry.
					</p>
					<div className=' py-4'>
						<span className='technology-item'>Next.js</span>
						<span className='technology-item'>Tailwind CSS</span>
						<span className='technology-item'>MongoDB</span>
					</div>
				</div>
			</div>
			<div className='flex flex-wrap-reverse w-full items-end justify-between'>
				<Link href='https://fhsu-park-ez.vercel.app/sign-in' target='_blank'>
					<div className=''>
						<Image
							src={parkez}
							width={250}
							height={250}
							alt='project picture'
							className=' border rounded border-cyan-700 mb-8 hover:border-2 hover:shadow-xl transition'
						/>
					</div>
				</Link>
				<div className=' md:max-w-[50vw]'>
					<Link href='https://fhsu-park-ez.vercel.app/sign-in' target='_blank'>
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
						finding and securing a parking spot has never been easier. Simply
						open the app, and it will guide you to the nearest available parking
						space in real-time, optimizing your parking experience. No more
						circling around crowded lots or struggling to find an open spot.
						ParkEZ also offers seamless mobile payments, eliminating the need
						for cash or card transactions. You can reserve parking spaces in
						advance, receive alerts when your time is running out, and even
						navigate back to your car effortlessly. Say goodbye to parking
						frustrations – ParkEZ is here to simplify urban mobility, making
						parking a breeze for all.
					</p>
					<div className=' py-4'>
						<span className='technology-item'>Next.js</span>
						<span className='technology-item'>Tailwind CSS</span>
						<span className='technology-item'>MongoDB</span>
					</div>
				</div>
			</div>
		</div>
	)
}

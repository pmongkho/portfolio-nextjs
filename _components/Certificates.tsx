import Image from 'next/image'
import React from 'react'
import aws from '../_media/AWS.png'
import coursera from '../_media/Coursera.png'

export default function Certificates() {
	return (
		<div className=' [&>p]:text-slate-400'>
			<h1 className='heading'>CERTIFICATIONS</h1>
			<div className=' flex justify-start items-center flex-wrap [&>*]:m-2'>
				<a href='https://aws.amazon.com/verification'>
					<Image src={aws} width={350} className='w-full' alt='certificate' />
				</a>

				<a href='https://coursera.org/verify/profession al-cert/UVR3Q6XQLN65'>
					<Image
						src={coursera}
						width={350}
						className='w-full'
						alt='certificate'
					/>
				</a>
			</div>
		</div>
	)
}

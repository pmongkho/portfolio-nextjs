'use client'

import React, { useState } from 'react'

export default function SeeMoreButton({ description }:any) {
 	const [seeMore, setSeeMore] = useState(false)
 
    return (
		<div>
			<p className={` leading-7 mb-2 ${seeMore ? '' : 'line-clamp-5'}`}>
				{description.map((descr:any) => (
					<p>{descr}</p>
				))}
			</p>
			<button
				onClick={() => setSeeMore(!seeMore)}
				className='leading-7 mb-2'
			>
				{seeMore ? 'see less' : 'see more'}
			</button>
		</div>
	)
}

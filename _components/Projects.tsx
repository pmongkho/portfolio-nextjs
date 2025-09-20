import Link from 'next/link'
import React from 'react'
import projects from '../_data/projects.json'

export default function Projects() {
        const data = projects.data

        return (
                <div className=' text-slate-400'>
                        <p className=' heading'>PROJECTS</p>
                        <div className='flex flex-col gap-16'>
                                {data.map((project) => (
                                        <div key={project._id} className='lg:max-w-[40vw] md:max-w-[70vw]'>
                                                <Link
                                                        href={project.link}
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        className=' mb-4 text-white text-lg flex items-center hover:text-cyan-500 transition'
                                                >
                                                        {project.title}
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
                                                </Link>
                                                <p className='leading-7 mb-4'>{project.summary}</p>
                                                {project.highlights?.length ? (
                                                        <ul className='list-disc pl-5 space-y-2 mb-4'>
                                                                {project.highlights.map((highlight, index) => (
                                                                        <li key={`${project._id}-highlight-${index}`}>{highlight}</li>
                                                                ))}
                                                        </ul>
                                                ) : null}
                                                <div className=' flex flex-wrap py-2'>
                                                        {project.technologies.map((item) => (
                                                                <span key={`${project._id}-${item}`} className='technology-item'>
                                                                        {item}
                                                                </span>
                                                        ))}
                                                </div>
                                        </div>
                                ))}
                        </div>
                </div>
        )
}

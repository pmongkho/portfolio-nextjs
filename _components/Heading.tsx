import Image from 'next/image'
import Link from 'next/link'
import BuyMeACoffeeButton from './BuyMeACoffeeButton'

export default function Heading() {
        return (
                <div className='w-full pt-20 px-6 sm:px-10 lg:px-0 md:max-w-[50vw] lg:fixed'>
                        <div className='flex flex-col items-center lg:items-start gap-6'>
                                <Image
                                        src='https://avatars.githubusercontent.com/u/71842268?s=400&u=ec7ddc1b88fbb5ce1f001eff5af778f963c22125&v=4'
                                        width={250}
                                        height={250}
                                        alt='profile'
                                        className='h-36 w-36 sm:h-48 sm:w-48 rounded-full border-2 border-cyan-700 object-cover'
                                />
                                <div className='space-y-4 text-center lg:text-left'>
                                        <div className='space-y-2'>
                                                <h1 className='text-4xl font-bold'>Eddy Mongkhonvilay</h1>
                                                <p className='text-xl'>Application Developer</p>
                                        </div>
                                        <p className='text-slate-400 leading-8'>
                                                Application Developer with ~3 years of experience delivering ASP.NET Core, Angular, and SQL Server solutions.
                                                Focused on shipping enterprise-style web platforms with REST APIs, role-based workflows, and cloud integrations.
                                        </p>
                                        <div className='text-slate-300 leading-7 space-y-1'>
                                                <p>Kansas City, MO</p>
                                                <a href='tel:+16208036666' className='hover:text-cyan-300 transition'>
                                                        (620) 803-6666
                                                </a>
                                                <a href='mailto:pmongkho@gmail.com' className='hover:text-cyan-300 transition'>
                                                        pmongkho@gmail.com
                                                </a>
                                                <a
                                                        href='https://github.com/pmongkho'
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        className='hover:text-cyan-300 transition'
                                                >
                                                        github.com/pmongkho
                                                </a>
                                                <a
                                                        href='https://www.linkedin.com/in/pmongkho'
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        className='hover:text-cyan-300 transition'
                                                >
                                                        linkedin.com/in/pmongkho
                                                </a>
                                        </div>
                                        <div className='flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4'>
                                                <Link
                                                        href='https://github.com/pmongkho'
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        className='transition'
                                                        aria-label='Visit Eddy Mongkhonvilay on GitHub'
                                                >
                                                        <svg
                                                                xmlns='http://www.w3.org/2000/svg'
                                                                x='0px'
                                                                y='0px'
                                                                width='35'
                                                                height='35'
                                                                viewBox='0 0 64 64'
                                                                fill='white'
                                                                className='opacity-50 hover:opacity-100 transition'
                                                        >
                                                                <path d='M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.565 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.604 29.124 47.604 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58c.61 0 1.213-.029 1.813-.07zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z'></path>
                                                        </svg>
                                                </Link>
                                                <Link
                                                        href='https://www.linkedin.com/in/pmongkho'
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        className='transition'
                                                        aria-label='Visit Eddy Mongkhonvilay on LinkedIn'
                                                >
                                                        <svg
                                                                xmlns='http://www.w3.org/2000/svg'
                                                                x='0px'
                                                                y='0px'
                                                                width='35'
                                                                height='35'
                                                                viewBox='0 0 50 50'
                                                                fill='white'
                                                                className='opacity-50 hover:opacity-100 transition'
                                                        >
                                                                <path d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z'></path>
                                                        </svg>
                                                </Link>
                                                <BuyMeACoffeeButton />
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

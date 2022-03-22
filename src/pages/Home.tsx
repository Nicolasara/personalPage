import { Link } from 'react-router-dom'
import Projects from '../components/Projects'
import '../Home.css'

function Home() {
    return (
        <div className="mx-auto">
            <div className="w-full lg:w-1/2 inline-block mb-8">
                <p className="text-2xl font-semibold">Hi there, I'm Nico</p>
                <p className="text-xl">welcome to my universe of curiosity, innovation, and creativity. A place that allows me to share my journey through tech. </p>
            </div>
            <div className="w-full lg:w-1/2 inline-block align-top">
                <Projects reposPerPage={3} pagination={false} columns={1}/>
                <div className='text-center mt-8'>
                    <Link to="/projects"  className="inline-block py-3 px-20 bg-slate-200 rounded-md hover:bg-slate-100 transition-colors duration-300">See More</Link>
                </div>
            </div>
        </div>
    )
}

export default Home
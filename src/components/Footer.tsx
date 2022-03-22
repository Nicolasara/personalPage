function Header() {
    return (
        <div className='flex w-full bg-slate-100 mt-20'>
            <div className='w-full my-10'>
                <p className='inline-block my-3 ml-10'>Made in Boston</p>
                <div className="inline-block float-right my-3">
                    <a href='https://github.com/Nicolasara' target="_blank" rel="noreferrer">
                        <img src='./github.png' alt='github' className="inline-block w-8 mr-3"/>
                    </a>
                    <a href='https://linkedin.com/in/nico-araujo' target="_blank" rel="noreferrer">
                        <img src='./linkedin.png' alt='linkedin' className="inline-block w-8 mr-3"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header
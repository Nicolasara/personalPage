interface Props {
    back: () => void,
    next: () => void,
    page: number
}

function Pagination({ back, next, page }: Props) {
    return (
        <div className='w-full text-center my-10' >
            < div className="inline-block" >
                <button onClick={back} className="inline-block py-3 px-5 bg-slate-200 rounded-md hover:bg-slate-100 transition-colors duration-300">back</button>
                <h2 className="inline-block mx-8">{page}</h2>
                <button onClick={next} className="inline-block py-3 px-5 bg-slate-200 rounded-md hover:bg-slate-100 transition-colors duration-300">next</button>
            </div >
        </div >
    )
}

export default Pagination
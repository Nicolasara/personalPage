interface Props {
    totalPages: number | undefined,
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>,
}

function Pagination({ totalPages, page, setPage }: Props) {
    async function next() {
        if (totalPages === page) return;
        setPage(page + 1);
    }

    async function back() {
        if (page === 1) return;
        setPage(page - 1);
    }

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
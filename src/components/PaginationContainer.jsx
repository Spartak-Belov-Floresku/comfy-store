import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const PaginationContainer = () => {
  const{meta} = useLoaderData();
  const {pageCount, page} = meta.pagination;

  const pages = Array.from({length: pageCount}, (_, index)=> index + 1)

  const {search, pathname} = useLocation();
  const navigate = useNavigate();

  const handlePageChange = pageNumber => {
    // search is needed to track the current page during using  filter
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber);
    navigate({
      pathname,
      search: searchParams.toString(),
    });
    navigate(`${pathname}?${searchParams.toString()}`);
  }

  if(pageCount < 2) return null;


  return (
    <div className='mt-16 flex justify-end'>
      <button 
        className='btn btn-xs sm:btn-md join-item'
        onClick={() =>{
          let prevPage = page - 1;
          if(prevPage < 1) prevPage = 1;
          handlePageChange(prevPage)
        }}
      >Prev</button>
      {pages.map(pageNumber => <button 
          key={pageNumber}
          onClick={()=> handlePageChange(pageNumber)}
          className={`btn btn-xs sm:btn-md border-none join-item ${pageNumber === page ? 'bg-base-300 border-base-300' : ''}`}
          disabled={pageNumber === page}  
        >
            {pageNumber}
          </button>
        )
      }
      <button 
        className='btn btn-xs sm:btn-md join-item'
        onClick={() => {
          let nextPage = page + 1;
          if(nextPage > pageCount) nextPage = pageCount;
          handlePageChange(nextPage)
        }}
      >Next</button>
    </div>
  )
}

export default PaginationContainer

import './Swiper.css';

const Swiper = ({pageCounter, setPageCounter, numberOfPages})=>{

    const increesePageCount = () =>{
        setPageCounter(pageCounter+=1)
    }
    const decreesePageCount = () =>{
        setPageCounter(pageCounter-=1)
    }

    return(
        <div className='Swiper'>
            <button onClick={()=> decreesePageCount()}
                    disabled={pageCounter===0 ? true : false}>
                Previous
                </button>
            <button onClick={()=> increesePageCount()}
                    disabled={pageCounter===numberOfPages-1 ? true : false}>
                Next
                </button>
        </div>
    )
}

export default Swiper;
import './Swiper.css';
//almost done I just need to add upper boundry 
const Swiper = ({pageCounter, setPageCounter})=>{

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
            <button onClick={()=> increesePageCount()}>Next</button>
        </div>
    )
}

export default Swiper;
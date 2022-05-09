import "./Guide.css"
import ProgressBar from 'react-bootstrap/ProgressBar'

const Guide = ({pageCounter, numberOfPages}) => {
    return (
        <div className="Guide">
            <ProgressBar now={(pageCounter+1)*100/numberOfPages} />
            <div>S</div>       
        </div>
    )
}

export default Guide
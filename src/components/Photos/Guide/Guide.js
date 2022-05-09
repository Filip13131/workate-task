import "./Guide.css"
import ProgressBar from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css';

const Guide = ({pageCounter, numberOfPages}) => {
    return (
        <div className="Guide">
            <ProgressBar striped variant="success" active='true' now={(pageCounter+1)*100/numberOfPages} />
            <div>S</div>       
        </div>
    )
}

export default Guide
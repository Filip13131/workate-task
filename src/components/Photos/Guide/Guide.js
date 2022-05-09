import "./Guide.css"
import ProgressBar from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css';

const Guide = ({pageCounter, numberOfPages}) => (
        <div className="Guide">
            <ProgressBar striped variant="success" active='true' now={(pageCounter+1)*100/numberOfPages} />
            <div><b>{pageCounter+1}/{numberOfPages}</b></div>       
        </div>
)

export default Guide
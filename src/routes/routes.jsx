import {Routes,Route,useNavigate} from 'react-router-dom'
import HomePage from '../pages/Home/homepage'
const Routing=()=>{
    const navigate=useNavigate()
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    )
}
export default Routing
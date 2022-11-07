import Reserva from "./Reserva";
import '../css/login.css';
import {useHistory} from "react-router-dom";


export default function Menu (params){
    const history = useHistory();
    const handleClick = () => history.push("/Reserva");  
    
    return(
        <div className="login">
            <div className="row">
                <div className="col-sm-4 offset-4 mt-5">
                    <div className="card pt-5">
                        <div className="card-header text-center">
                            <h1>🏨 HOTEL VISTA HERMOSA</h1>
                            <div><img src="./portada.jpg"/></div>
                            <div className="info">Este hotel cuenta con 50 habitaciones disponibles.</div>
                            
                            <div>10 Suits</div>
                            <div>10 Habitaciones sencillas</div>
                            <div>10 Habitaciones premiun</div>
                            <div>10 Habitaciones con vista al mar</div>
                            <div>10 Habitaciones king.</div>
                        </div>
                    </div>
                    
                        <button className='btn btn-info btn-lg btn-block' onClick={handleClick}>Ver</button>
                        
                    </div>
                   
                </div>
            </div>
    )
}
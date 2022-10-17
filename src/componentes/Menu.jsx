import Reserva from "./Reserva";
import '../css/login.css';

const reserva = () => {

    <h1><Reserva/></h1>
}

export default function Menu (params){
    return(
        <div className="login">
            <div className="row">
                <div className="col-sm-4 offset-4 mt-5">
                    <div className="card pt-5">
                        <div className="card-header text-center">
                            <h1>🏨 Hotel Vista Hermosa</h1>
                            <div><img src="./portada.jpg"/></div>
                            <div className="info">Este hotel cuenta con 50 habitaciones disponibles.</div>
                            
                            <div>10 suits</div>
                            <div>10 habitaciones sencillas</div>
                            <div>10 habitaciones premiun</div>
                            <div>10 habitaciones con vista al mar</div>
                            <div>10 habitaciones king.</div>
                        </div>
                    </div>
                    
                        <button className='btn btn-info btn-lg btn-block' onClick={reserva}>Ver</button>
                        
                    </div>
                   
                </div>
            </div>
    )
}
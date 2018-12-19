import React, { SFC } from 'react';
import { Interface } from 'readline';

interface IMyProps {
    temp: string;
    humidity: string;
    date:string;
}

const Weather: React.SFC<IMyProps> = (props) => {
    return (
        <div>
            <div>{props.date}</div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpDoKs1Z1zUbwpVpxVU9mpkntkqaUjvVWRYY_EU3cLijVaGQ_o" alt=""/>
            <div>
                <p>{props.temp}</p>
                <p>{props.humidity}</p> 
            </div>
        </div>
    )
}

export default Weather;
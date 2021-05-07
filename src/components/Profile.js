import { useAuth0 } from "@auth0/auth0-react";
import happyCat from './../pictures/happy-cat.jpg';
import grumpyCat from './../pictures/grumpy-cat.jpeg';
import Moment from 'react-moment';
import "./Profile.css"
import moment from 'moment';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    let now = moment();
    const dt = now.format();
    let image;
    let name;
    let loginText;
    let currentText;
    
    if (isAuthenticated) { 
        image = <img className="photo" src={happyCat} alt=""/>;
        name = user.name;
        loginText = <p> Last login was at : <Moment format="Do MMM YYYY@HH:mm:ssZ">{user.updated_at}</Moment> </p>;
        currentText = <p>The current time is : <Moment format="Do MMM YYYY@HH:mm:ssZ">{dt}</Moment> </p>;
    } else {
        image = <img className="photo" src={grumpyCat} alt=""/>;
        name = "Please login";
        loginText = "";
        currentText = "";
    }
    
    return (
        <div>
            <h2>{name}</h2>
            {image}
            {loginText}
            {currentText}
        </div> 
        );
}

export default Profile;
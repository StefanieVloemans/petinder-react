import {React} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {increasePopularity} from "../api/PetService";

function SetupDate() {

    const location = useLocation();
    const {transferStateFromParentToChild} = location.state.selectedPet;
    const navigate  = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        increasePopularity(transferStateFromParentToChild.name).then(navigate('/'));

    }

    return (
        <>
            <div className="container modalPopup">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="big-dialog">
                            <div className="clearfix">
                                <div className="pull-left dialog-picture">
                                    <img
                                        src={`https://petinder-react.herokuapp.com/` + transferStateFromParentToChild.image}
                                        className={"profile-picture"}
                                        alt="a visual presentation of the pet"
                                    />
                                </div>
                                <h3>{transferStateFromParentToChild.name}</h3>
                                <p>{transferStateFromParentToChild.profileText}</p>
                            </div>
                            <br/>
                            <div className="clearfix">
                                <form onSubmit={handleSubmit}>
                                    <Link to="/">
                                        <button className="btn btn-primary pull-right" type="button">Cancel</button>
                                    </Link>
                                    <button className="btn btn-primary pull-right" type="submit">Let us Play</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SetupDate;

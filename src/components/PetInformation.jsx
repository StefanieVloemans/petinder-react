import {React} from "react";
import {deletePet} from "../api/PetService";
import {Link} from 'react-router-dom';


function PetInformation({transferStateFromParentToChild, triggerParentUpdate, resetSelectedPet}) {

    function handleDelete() {
        deletePet(transferStateFromParentToChild.id).then(() => console.log("Pet is succesfully deleted"))
            .then(() => resetSelectedPet("")).then(() => triggerParentUpdate('Updated' + new Date()));

    }

     // const [popularity, setPopularity] = useState(0);
    // let navigate = useNavigate();
    // const navigateToSetupDate = () => { navigate() }

    return (<>
            {
                <div className="gallery-detail">
                    <section className="tiny-dialog fader" id="petProfile">
                        <h3>{transferStateFromParentToChild.name}</h3>
                        <p>{transferStateFromParentToChild.profileText}</p>
                        <p>
                            Popularity:
                            {transferStateFromParentToChild.popularity}
                        </p>

                        <button
                            className="btn btn-primary pull-right"
                            onClick={handleDelete}
                            type="button">
                            Delete Pet
                        </button>
                        <Link to="/setup-date" state={{selectedPet:{transferStateFromParentToChild}}} >
                            <button
                                className="btn btn-primary pull-right"
                                type="button">
                                Setup Date
                            </button>
                        </Link>
                    </section>
                </div>
            }
        </>
    )
        ;
}

export default PetInformation;
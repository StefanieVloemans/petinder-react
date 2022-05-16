import {React, useState} from "react";
import {addPet} from "../api/PetService";
import Pet from "../model/Pet";


function AddPet({triggerParentUpdate}) {

    const [name, setName] = useState("");
    const [kind, setKind] = useState("");
    const [image, setImage] = useState("");
    const [profileText, setProfileText] = useState("");

    const handleSubmit = () => {
        const newPet = new Pet(name, kind, image, profileText);
        addPet(newPet).then(() => console.log("Pet is succesfully added")).then(() => triggerParentUpdate('Updated' + new Date())).then(clearForm);
    }

    function clearForm() {
        setName("");
        setKind("");
        setImage("");
        setProfileText("");
    }

    return (<>

        <section className="tiny-dialog fader" id="petProfile">
            <div className="form-group">
                <h3>Add your pet</h3>
                <form name="addPetForm">
                    <label>
                        Name:
                        <input className="form-control" name="name" type="text"
                               value={name}
                               onChange= {e => {setName(e.target.value)}}
                            />
                    </label>
                    <br/>
                    <label>
                        Kind:
                        <input className="form-control" name="kind" type="text" value={kind}
                               onChange= {e => {setKind(e.target.value)}}/>
                    </label>
                    <br/>
                    <label>
                        Picture:
                        <input className="form-control" name="image" type="text"
                               value={image}
                               onChange= {e => {setImage(e.target.value)}}/>
                    </label>
                    <br/>
                    <label>
                        Profile Text:
                        <input className="form-control" name="profileText" type="text"
                               value={profileText}
                               onChange={e => {setProfileText(e.target.value)}}/>
                    </label>
                    <br/>
                </form>
                <button
                    className="btn btn-primary pull-right" onClick={handleSubmit}>
                    Create Pet
                </button>
            </div>
        </section>
    </>);
}

export default AddPet;


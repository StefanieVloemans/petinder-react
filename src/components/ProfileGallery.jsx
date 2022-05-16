import {React, useEffect, useState} from "react";
import {getPets} from "../api/PetService";
import AddPet from "./AddPet";
import PetInformation from "./PetInformation";

function ProfileGallery() {
    const [pets, setPets] = useState([]);
    const [inputFromUser, setInputFromUser] = useState([])
    const [componentState, setComponentState] = useState('Updated');
    const [selectedPet, setSelectedPet] = useState("");

    useEffect(() => {
        getPets().then((result) => setPets(result.data))
    },[componentState]);

    let filteredPets = pets.filter(pet => pet.name.toLowerCase().includes(inputFromUser.toString().toLowerCase()));

    const transferStateFromParentToChild = (e) => {setSelectedPet(e.pet)}

    return (<>
            <div id="gallery" className="col-md-9">
                <div className="gallery">
                    {filteredPets.sort(function (pet1, pet2) {
                        const namePet1 = pet1.name.toLowerCase();
                        const namePet2 = pet2.name.toLowerCase();
                        if (namePet1 < namePet2) {
                            return -1;
                        }
                        if (namePet1 > namePet2) {
                            return 1;
                        }
                        return 0;
                    })
                        .map((pet) =>
                            (
                                <div className="gallery-pet fader" key={pet.id} onClick={() => transferStateFromParentToChild({pet})}>
                                    <img className="profile-picture" src={`http://localhost:8080/${pet.image}`}
                                         alt="pet-picture"/>
                                    <div className="overlay">
                                        <div className="overlay-text">{pet.name}</div>
                                    </div>
                                </div>
                            ))}
                </div>
            </div>
            <div className="col-md-3">
                <div className="gallery-detail">
                    <div>
                        <section className="tiny-dialog">
                            <h3>Find your pet</h3>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={inputFromUser}
                                    onChange={(event) => setInputFromUser(event.target.value)}
                                    placeholder="Name"
                                />
                            </div>
                        </section>
                    </div>
                </div>
                <AddPet triggerParentUpdate = {setComponentState}></AddPet>
                {selectedPet
                    && (
                        <PetInformation
                            transferStateFromParentToChild = {selectedPet}
                            triggerParentUpdate={setComponentState}
                            resetSelectedPet = {setSelectedPet}></PetInformation>

                    )
                }
            </div>
        </>
    );
}

export default ProfileGallery;
import client from './Client';

export function getPets() {
    return client.get('pets');
}


// Codereview met Christoph: added async and await and remove return
export async function addPet(newPet) {
    await client.post('pets', newPet);
}

export async function deletePet(petIdOfPetToDelete) {
    await client.delete('pets/' + petIdOfPetToDelete);
}

export async function increasePopularity(petName) {
   await client.get('pets/' + petName + '/incrementPopularity' )
}
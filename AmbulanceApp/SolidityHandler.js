
import { ambulanceAbi } from './abi/abis';
import Web3 from 'web3';
const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/${27e484dcd9e3efcfd25a83a78777cdf1}"))
const contractAddr = '0x5EE2F8a5c2733d5ac2Ab880E6Cee32328e7a4D80';
const SimpleContract = new web3.eth.Contract(ambulanceAbi, contractAddr);


export function addHospital(address) {
    SimpleContract.methods.addHospital(address).send();
}

export function removeHospital(address) {
    SimpleContract.methods.removeHospital(address).send();
}

export function addPolice(address) {
    SimpleContract.methods.addPolice(address).send();
}

export function removePolice(address) {
    SimpleContract.methods.addPolice(address).send();
}

export function addAmbulance(address) {
    SimpleContract.methods.addAmbulance(TextInputValue).send();
}

export function removeAmbulance(address) {
    SimpleContract.methods.removeAmbulance(TextInputValue).send();
}

export function  verifyDelivery(address) {
    SimpleContract.methods.verifyDelivery(memoryHashString).send(); 
}

export function postBounty(memoryHashString, timeLimit, memoryLocationString, allowedHospitalsList, penaltyPrice) {
    AmbulanceBounties.methods.postBounty(memoryHashString, timeLimit, memoryLocationString, allowedHospitalsList, penal).send;
}



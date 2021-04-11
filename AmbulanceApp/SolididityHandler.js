import { ambulanceAbi } from './abi/abis';
const web3 = new Web3(Web3.givenProvider);
const contractAddr = '0x3F51Fd2c1a6faD59A413A529E1e9f342f39f2d75';
const SimpleContract = new web3.eth.Contract(ambulanceAbi, contractAddr);

//Address is a string type
//No return value
function addHospital(address) {
    SimpleContract.methods.addHospital(address).send();
}

function removeHospital(address) {
    SimpleContract.methods.removeHospital(address).send();
}

function addPolice(address) {
    SimpleContract.methods.addPolice(address).send();
}

function removePolice(address) {
    SimpleContract.methods.addPolice(address).send();
}

function addAmbulance(address) {
    SimpleContract.methods.addAmbulance(TextInputValue).send();
}

function removeAmbulance(address) {
    SimpleContract.methods.removeAmbulance(TextInputValue).send();
}

function  verifyDelivery(address) {
    SimpleContract.methods.verifyDelivery(memoryHashString).send(); 
}


function postBounty(memoryHashString, timeLimit, memoryLocationString, allowedHospitalsList, penaltyPrice) {
    AmbulanceBounties.methods.postBounty(memoryHashString, timeLimit, memoryLocationString, allowedHospitalsList, penal).send;
}



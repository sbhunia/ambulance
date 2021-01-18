//Can change names later on
//Can edit files for more specifics later

const BountyBitch = artifacts.require("./AmbulanceBounties.sol");

module.exports = function(deployer) {
   deployer.deploy(BountyBitch);
};

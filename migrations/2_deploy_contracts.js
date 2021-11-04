var Chateaushi = artifacts.require("Chateaushi");

module.exports = function(deployer) {
    deployer.deploy(Chateaushi, 10000);
};


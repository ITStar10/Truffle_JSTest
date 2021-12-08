const DateTime = artifacts.require("DateTime");
const AvgPrice = artifacts.require("AvgPrice");

module.exports = (deployer, network) => {
  deployer.deploy(DateTime).then(function() {
    return deployer.deploy(AvgPrice, DateTime.address)
  })
}

// module.exports = async(deployer) => {
//   let deployDateTime = await deployer.deploy(DateTime);
//   let deployAvgPrice = await deployer.deploy(AvgPrice);
  
//   contractAvgPrice = await AvgPrice.deployed()
//   let setAddress = await contractAvgPrice.setAddress(
//     DateTime.address,
//     { gas: 200000 }
//   )
   

// }

// module.exports = function (deployer) {
//   deployer.deploy(AvgPrice);
// };

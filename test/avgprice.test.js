// test/avgprice.test.js
// Load dependencies
const { expect } = require('chai');

// Start test block
describe('AvgPrice', function() {
    before(async function(){
        this.AvgPrice = await ethers.getContractFactory('AvgPrice');
    });

    beforeEach(async function() {
        this.avgPrice = await this.AvgPrice.deploy();
        await this.avgPrice.deployed();
    });

    // Test case
    it('store values from 7/1 to 10/1', async function() {
        // Store values
        for (let mon=7; mon<=10; mon++)
            for (let day=1; day<31; day++)
                await this.avgPrice.setDayPrice(mon, day, mon*day);
        
        // Test if getDayPrice return same value
        expect((await this.avgPrice.getDayPrice(7,1)).toString()).to.equal('7');
        expect((await this.avgPrice.getDayPrice(7,15)).toString()).to.equal('105');

        // Test if avgPrice returns correct value
        expect((await this.avgPrice.getAveragePrice(7,1,7,3)).toString()).to.equal('14');
    })

    // Test 
})
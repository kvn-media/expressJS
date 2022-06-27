'use strict';

    var assert = require('assert'),
        should = require('should'),
        exchange = require('../lib/exchange');

    var exchangeData = {};

    suite('exchange', function() {
        // place existing test cases here
    });


test('buy should add a BUY nockmarket order', function(done) {
    exchangeData = exchange.buy(40, 100, exchangeData);
    exchangeData.buys.volumes[40].should.eql(100);
    done();

    /*
    [].should.be.empty
    [1,2,3].should.eql([1,2,3])
    addUser.age.should.be.within(5,50)
    'test'.should.be.a('string')
    user.age.should.not.be.above(100)
    */
});

test('sell should add a SELL nockmarket order', function(done) {
    exchangeData = exchange.sell(41, 200, exchangeData);
    exchangeData.sells.volumes['41'].should.eql(200);
    done();
});

test('sell should produce trades', function(done) {
    exchangeData = exchange.sell(40, 75, exchangeData);
    exchangeData.trades[0].price.should.eql(40);
    exchangeData.trades[0].volume.should.eql(75);
    exchangeData.buys.volumes[40].should.eql(25);
    exchangeData.sells.volumes[41].should.eql(200);
});


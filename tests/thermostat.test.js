const {Thermostat} = require('../lib/thermostat')

describe('thermostat class', () => {
    it('should return temperature', () => {
        const temperature = new Thermostat()
        expect(temperature.getTemperature()).toBe(20)
    })
    it('should increase temperature with up method', () => {
        const temperature = new Thermostat()
        temperature.up();
        expect(temperature.getTemperature()).toBe(21);
    })
    it('should increase temperature with up method', () => {
        const temperature = new Thermostat()
        temperature.down();
        expect(temperature.getTemperature()).toBe(19);
    })
    it('should not decrease temperature below 10', () => {
        const temperature = new Thermostat()
        for (let i = 0; i < 11; i++) {
            temperature.down();
        }
        expect(temperature.getTemperature()).toBe(10);
    });
    it('should set power saving mode and adjust max temperature', () => {
        const temperature = new Thermostat()
        temperature.setPowerSavingMode(false);
        expect(temperature.getMaxTemperature()).toBe(32);
      });
    it('should reset temperature to 20', () => {
        const temperature = new Thermostat()
        temperature.up();
        temperature.reset();
        expect(temperature.getTemperature()).toBe(20);
      });
})


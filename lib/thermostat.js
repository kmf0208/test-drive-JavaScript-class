class Thermostat{
    constructor(){
        this.temperature = 20
        this.minTemperature = 10 
        this.maxTemperaturePowerSavingOn = 25
        this.maxTemperaturePowerSavingOff = 32
        this.powerSavingMode = true;
    }
    getTemperature(){
        return this.temperature
    }
    up(){
        if(this.temperature < this.getMaxTemperature()){
            return this.temperature++
        }
    }
    down(){
        if(this.temperature > this.minTemperature){
            return this.temperature--
        }

    }
    setPowerSavingMode(on){
        this.powerSavingMode = on
        if(!this.powerSavingMode && this.temperature > this.maxTemperaturePowerSavingOff){
            this.temperature = this.maxTemperaturePowerSavingOff
        } 

    }
    reset(){
        this.temperature = 20

    }
    getMaxTemperature(){
        return this.powerSavingMode ? this.maxTemperaturePowerSavingOn : this.maxTemperaturePowerSavingOff;

    }
}



module.exports = {Thermostat}
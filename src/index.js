
module.exports = function toReadable (num) {
    const lowNums = ['',' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine',' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen',' seventeen', ' eighteen', ' nineteen'];
    const hightNums = ['','',' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty',' ninety']; 
    const hundred = ' hundred';

     if(num === 0){
        return 'zero'
    } else if ( num < 20 ){
        return lowNums[num].substring(1) 
    } else if ( num < 100) {
        return hightNums[parseInt(num.toString()[0])].substring(1)  + lowNums[parseInt(num.toString()[1])]
    } else if(num > 100 && parseInt(num.toString().substring(1)) < 20) {
        return  lowNums[parseInt(num.toString()[0])].substring(1) + hundred+ lowNums[parseInt(num.toString().substring(1))]
    } else {
        return  lowNums[parseInt(num.toString()[0])].substring(1) + hundred + hightNums[parseInt(num.toString()[1])] + lowNums[parseInt(num.toString()[2])]
    }
}
// я уже делал это задание на stage 0, набор декабрь 21го
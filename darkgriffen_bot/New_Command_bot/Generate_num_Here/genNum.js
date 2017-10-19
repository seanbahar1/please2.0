module.exports = {
    randomNumber: function (/*number of possible results*/a, /*starting num*/ b) {
        let result = Math.floor(Math.random() * (a-b+1)) + b;
        return result;
    },  
};
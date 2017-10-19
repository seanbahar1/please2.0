var fs = require('fs');
var thispage = require('./Script1.js')
module.exports = {
    info: function (message) {
        var msg = message.split(" ");                      //creates an array of the splitted nessage
        var flag = false;                                  //creates a flag
        var exist = false;                                 // if exist

        /*first check*/
        if (msg[0] !== '!newcmd') return 'err1 {normal message}';
        if (msg[1].includes('!') === false) return 'err2 wrong form';

                                                     /* (stage 1) "checks if exist" */
        /*.....................................................................................................................*/
        
        if (msg[1].includes('!')) {
            var msgsa = msg[1].split('!')[1];
            var check = thispage.check_if_exist(msgsa, flag);
            exist = check.exist;
            flag = check.flag;
        }
        while (flag === false) { console.log('waiting on flag') };
        /*after check*/
        if (exist === true) return 'err3 something went wrong';

                                               /*if we here its mean the commads does not exist*/

                                                           /*creating cmd (stage 2)*/
        /*.....................................................................................................................*/

        var newMSG = message.replace(/!newcmd/gi, function (x) {             //removing !newcmd        
            x = "";
            return x;
        }) 
        var se = newMSG.replace(" !","!")                                    // small touch ups
        console.log(newMSG + " To" + se)

        /*check if the info is correct*/
        var infoCk = se.split(' ');
        if (infoCk[1] !== 'mod' && infoCk[1] !== 'normal') return 'err4 bitch do it fine';    //info mod/normal check
        if (isNaN(infoCk[2])) return 'err5 deep inside i hate griffen aka me the bot';        //check if the delay part is a num

        //creating time
        se = se.replace(/"  "/g, " ").split(' - ');                                           // creating a folder
        var newFlag = false;
        console.log(newMSG)
        var sean = thispage.createcmd(newFlag, se[0].split(' ')[0].split('!')[1], se[0].split(' ')[1], parseInt(se[0].split(' ')[2]), se[1]) //calling the create function

       /*..................................................................... Done creating .............................................................................*/

        return 'cmd was created ' + " " + newFlag + " " + se[0].split(' ')[0].split('!')[1] + " " + se[0].split(' ')[1] + " " + parseInt(se[0].split(' ')[2]) + " " + se[1];        //done
    },
    
    gennum: function(a,b){
        var that = require('./Generate_num_Here/genNum.js');
        var that1 = that.randomNumber(a, b);
        return that1;
        //done
    },
    tag: function (msg, content) {
        var func = require('./addName/addcmdifname.js').name()
        return func(content);
        //done
    },
}
// JavaScript source code

module.exports = {
    createcmd: function (flag, cmd, ifmod, delay, wts) {
        var fs = require('fs');
        var local_flg = false;
        var jsthat = {                                      // creating the json for the file
            "ifmod": ifmod,
            "delay": delay,
            'say': wts,
            'cd': 0
        };
        /*file creating*/
        fs.writeFile('./cmds/' + cmd + '.json', JSON.stringify(jsthat), function (err, data) {
            if (err) {
                return console.log(err);
            }
            console.log(data);
        });
       

    },
    check_if_exist: function (cmd, flag) {
        var fs = require('fs');
        if (fs.existsSync('./cmds/' + cmd + '.json')) {
            return { exist: true, flag: true }
        } else return { exist: false, flag: true };
        console.log(sean)
      
    },
    gennum_getinfotocmd: function (message) {

    },

};

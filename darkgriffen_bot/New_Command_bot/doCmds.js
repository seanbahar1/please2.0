// JavaScript source code
var api1 = require('./forcmdsapi.js')
var tmi = require("tmi.js");
var fs = require('fs');
const updateJsonFile = require('update-json-file')
var options = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: "darkgriffen_bot",
        password: "OUATH"
    },
    channels: ["darklordgriffen"]
}; var client = new tmi.client(options);
client.connect();
// untill here ito connected to twitch server

client.on("chat", function (channel, userstate, message, self) {
    // Don't listen to my own messages..
    if (self) return;
    var mod = false;
    if (userstate['mod'] || userstate['display-name'].toLowerCase() === 'darklordgriffen') mod = true; //checks if user is mod or streamer

    var msg = message.split(" ");                                                                      //splits the message to an array (folder)
    if (msg[0].includes('!') === false) return;                                                        //checks if message is a command
    else {                                                                                             //enters here if it is                                                                             

        var to_who = msg[1];                                                                           //takes the second place in the msg folder and putting it in to_who
        if (to_who === null || to_who === undefined || to_who === "" || to_who === " ")                //this line checks if someone is tagged
            to_who = ' @name ';                                                                        //if someone isnt tagged it auto tagges @name

        var the_cmd = msg[0].split('!')[1];                                                            //takes the command name
        if (fs.existsSync('./cmds/' + the_cmd + '.json')) {                                            //checks if the command exist || if exist run the code

            var cmd_info = JSON.parse(fs.readFileSync('./cmds/' + the_cmd + '.json'))                  // takes the file info and makes it a json(js file type for data) in file
            if (mod === true) {                                                                        // here it checks if user is a mod from earlier and just posts the cmd say

                var sw_tag = cmd_info['say'].replace(/(\$)(\()tag(\))/g, function (x) {                //replacing the $(tag) with the tagged name
                    return x = to_who;                                                                 //changes the value here
                });

                var sw_time = sw_tag.replace(/(\$)(\()gennum,\d+,\d+(\))/g, function (x) {             //replacing the gennum with a generated num fron the function we created
                    var that = x.split('$(gennum,')[1].split(')')[0];                                  //splits it to extract the nums
                    var nums = [parseInt(that.split(",")[0]), parseInt(that.split(",")[1])]            //making a folder with  the int converted nums
                    return x = " " + api1.gennum(nums[0], nums[1]) + " ";                              // runs the gennum func and returns the value
                });

                var saythat = sw_time;                                                                 //what to say
                client.say(channel, "" + saythat);                                                     //says

            }
            else {                                                                                     //if user is not a mod or streamer

                if (cmd_info['ifmod'] === 'mod') return;                                               //checks if cmd is mod only is so it breaks                                                      
                if (cmd_info['cd'] > 0) return;                                                        //checks the cmd isnt on cd if so it breaks

                else {                                                                                 //if the 2 checks are ok it enters here
                    /*same code as above*/
                    var sw_tag = cmd_info['say'].replace(/(\$)(\()tag(\))/g, function (x) {
                        return x = to_who;
                    });

                    var sw_time = sw_tag.replace(/(\$)(\()gennum,\d+,\d+(\))/g, function (x) {
                        var that = x.split('$(gennum,')[1].split(')')[0];
                        var nums = [parseInt(that.split(",")[0]), parseInt(that.split(",")[1])]
                       
                        return x = " " + api1.gennum(nums[0], nums[1]) + " ";
                    });

                    var saythat = sw_time;
                    client.say(channel, "" + saythat);
                    /*untill here same code*/

                    updateJsonFile('./cmds/' + the_cmd + ".json", (data) => {                          // updates the cd to be the delay info
                        data.cd = cmd_info['delay'];                                                   //act of update
                        return data                                                                    //returns the updated value
                    })

                    var sean = setInterval(function () {                                               //starts a new cd down to decrease the cd
                        updateJsonFile('./cmds/' + the_cmd + ".json", (data) => {
                            if (data.cd > 0) {                                                         //if cd is bigger then 0 decrease 1
                                data.cd--;
                                return data
                            }
                            else if (data.cd === 0) {                                                  //if the cd is 0 it cancles the outer cd (this function)
                                clearInterval(sean);                                                   // the clearing
                                console.log(sean + " was cleared")
                            }
                        })
                    }, 1000/*1 sec untill it does that again*/)
                }
            }
        } else return;
    }
});

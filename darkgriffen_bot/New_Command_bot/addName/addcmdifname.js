module.exports = {
    name: function (msg) {
        var message = msg.split(' '); // msg is the file content
                                      // !cmd @tagged || !cmd tagged

        /* now we will replace every place with
           $(tag) in it with the tagged person */
        var string_retu = '';
        var changed = false;                          // creating a flag so the function wont be broken
        if (message.length === 1) return;             //breaks the function if there is no tagged name
        else if (message.length > 1) {                //checks if the message tagged someone
            var tag = message[1];
            if (tag.includes('@'))                    //checks if the tag has @ in it 
                tag = message.split('@')[1];          // removes the @
            else;                                     //else do nothing

            string_retu.replace('$(tag)',` ${tag} `); //replacing $(tag) with the tagged name; 
            changed = true;                           // removing the flag
        }
        while (!changed) { };                         //waiting on the flag removel
        return string;                                //returning the edited string
    },
};
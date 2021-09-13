const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
});

const { details, state, largeImageName, largeImageText, button1Name, button1URL, clientID } = require("./config.json")

rpc.on("ready", () => {
    rpc.setActivity({
        details: details,
        largeImageKey: largeImageName,
        largeImageText: largeImageText,
        buttons: [{
            label: button1Name,
            url: button1URL
        }]
    });

    console.log("Started!");
});

rpc.login({
    clientId: clientID
});
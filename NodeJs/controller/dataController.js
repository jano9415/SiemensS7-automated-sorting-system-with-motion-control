const opcuaClient = require('../opcua/opcuaClient');
const { OPCUAClient, AttributeIds, DataType } = require("node-opcua");
const async = require("async");


const getData = async (req, res) => {
    const stringResponse = {};
    const dataFromPLC = "";

    //Siemens S7-1500 ip címe és port száma
    const endpointUrl = "opc.tcp://192.168.0.11:4840";

    //Ezek a változók vannak az 'OPCUA_data' nevezetű Data Block-ban a PLC-n
    //s="OPCUA_data".Sensor1 -> ez a helyes formátum, kellenek az idézőjelek
    //ns lehet 1, 2, 3, 4. Ha valamelyik nem jó, ki kell próbálni másik számmal.
    const nodeIds = {
        Sensor1: "ns=3;s=\"OPCUA-data\".Sensor1",
    };

    //OPC-UA kliens létrehozása
    const client = OPCUAClient.create({ endpointMustExist: false });

    try {
        //Kapcsolódás a szerverhez
        await client.connect(endpointUrl);
        console.log("Connected to the OPC UA server!");

        //Session létrehozása
        const session = await client.createSession();
        console.log("Session created!");

        //Adatok olvasása az OPCUA_data nevezetű Data Block-ból
        for (const [key, nodeId] of Object.entries(nodeIds)) {
            const dataValue = await session.read({ nodeId, attributeId: AttributeIds.Value });
            stringResponse.message = dataValue.value.value;
            console.log(`${key}:`, dataValue.value.value);
        }

        //Session lezárása
        await session.close();
        await client.disconnect();
        console.log("Disconnected from the OPC UA server!");
    } catch (err) {
        console.error("An error occurred:", err);
    }


    res.status(200).json(stringResponse);
}


/*
const getData = async (req, res) => {
    try {
        const stringResponse = {};
        stringResponse.message = await exam(); // Wait for exam() to resolve
        res.status(200).json({stringResponse});  // Send the response after the value is obtained
    } catch (error) {
        res.status(500).json({ error: 'An error occurred', details: error.message });
    }
};

async function exam() {
    const stringResponse = {};
    const dataFromPLC = "";

    //Siemens S7-1500 ip címe és port száma
    const endpointUrl = "opc.tcp://192.168.0.11:4840";

    //Ezek a változók vannak az 'OPCUA_data' nevezetű Data Block-ban a PLC-n
    //s="OPCUA_data".Sensor1 -> ez a helyes formátum, kellenek az idézőjelek
    //ns lehet 1, 2, 3, 4. Ha valamelyik nem jó, ki kell próbálni másik számmal.
    const nodeIds = {
        Sensor1: "ns=3;s=\"OPCUA-data\".Sensor1",
    };

    //OPC-UA kliens létrehozása
    const client = OPCUAClient.create({ endpointMustExist: false });

    try {
        //Kapcsolódás a szerverhez
        await client.connect(endpointUrl);
        console.log("Connected to the OPC UA server!");

        //Session létrehozása
        const session = await client.createSession();
        console.log("Session created!");

        //Adatok olvasása az OPCUA_data nevezetű Data Block-ból
        for (const [key, nodeId] of Object.entries(nodeIds)) {
            const dataValue = await session.read({ nodeId, attributeId: AttributeIds.Value });
            stringResponse.message = dataValue.value.value;
            console.log(`${key}:`, dataValue.value.value);
        }

        //Session lezárása
        await session.close();
        await client.disconnect();
        console.log("Disconnected from the OPC UA server!");
    } catch (err) {
        console.error("An error occurred:", err);
    }
}


*/


module.exports = {
    getData,

};
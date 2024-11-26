const { OPCUAClient, AttributeIds, DataType } = require("node-opcua");
const async = require("async");

//Siemens S7-1500 ip címe és port száma
const endpointUrl = "opc.tcp://192.168.0.10:4840";

//Ezek a változók vannak az 'OPCUA_data' nevezetű Data Block-ban a PLC-n
//s="OPCUA_data".Sensor1 -> ez a helyes formátum, kellenek az idézőjelek
//ns lehet 1, 2, 3, 4. Ha valamelyik nem jó, ki kell próbálni másik számmal.
const nodeIds = {
    Sensor1: "ns=3;s=\"OPCUA_data\".Sensor1",
    CurrentStep: "ns=3;s=\"OPCUA_data\".CurrentStep",
    Temperature: "ns=3;s=\"OPCUA_data\".Temperature",
    Uid: "ns=3;s=\"OPCUA_data\".Uid"
};

async function main() {
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
            console.log(`${key}:`, dataValue.value.value);
        }


        //Adat írása az OPCUA_data nevezetű Data Block-ba, Boxnumber változóba
        let nodesToWrite = [
            {
                nodeId: "ns=3;s=\"OPCUA_data\".Boxnumber",
                attributeId: AttributeIds.Value,
                value: {
                    value: {
                        dataType: DataType.Int16,
                        value: 14
                    }
                }
            }
        ]

        session.write(nodesToWrite, (err, statusCodes) => {
            if (err) {
                console.error("Error writing to node:", err);
            } else {
                console.log("Write status codes:", statusCodes);
            }
        })

        //Session lezárása
        await session.close();
        await client.disconnect();
        console.log("Disconnected from the OPC UA server!");
    } catch (err) {
        console.error("An error occurred:", err);
    }
}

main();
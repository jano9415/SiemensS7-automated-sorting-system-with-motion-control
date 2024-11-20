# SiemensS7-automated-sorting-system

The architecture of the system in localhost:


![Image23](https://github.com/user-attachments/assets/85ab0c34-80d1-4ffd-8bc7-82497ed3a24c)

This system automates the measuring and sorting process for items based on size and material. The system contains digital inputs, digital outputs, analog inputs, analog outputs, servo motor for precise control, communication between two Siemens PLC with TSEND_C and TRCV_C function blocks, HMI for display and control, OPC-UA communication between NodeJs application and Siemens PLC, NodeJs HTTP server to receive the HTTP request from React client application, web application with React for monitoring and control of the system remotely, PostgreSql to store data in database.

![image](https://github.com/user-attachments/assets/299110dd-fee4-43ca-92d7-b0f2a4fba107)


First step: The labourer or a robot places the item on the inverter controlled conveyor. The conveyor coveys the item.

Second step: An analog sensor measures the size of the item. It can be small and non metal item, small and metal, large and non metal, large and metal.

Third step: An inductive sensor checks if the item is metallic.

Fourth step: An analog load cell measures the weight of the item.

Fifth step: The item moves forward on a servo controlled table and the servo motor moves this table to the accurate position.

Sixth step: After reaching the appropriate position a cyclinder pushes the item in the expected bin for further process.

Bins:

Bin 1:	Small and non metal

Bin 2:	Small and metal

Bin 3:	Large and not metal

Bin 4:	Large and metal


Components of the entire system:

PLC1: It controls the the measuring and sorting system. It is an OPC-UA server to communicate with the NodeJs javascript based OPC-UA client. It communicates with PLC2 with TSEND_C and TRCV_C open user communication.

PLC2: It is part of an other system and it controls the further processes after the item get into the expected bin. An optical sensor checks the saturation of each bin and sends this boolean variable to PLC1. If one of the bins are full, the item doest'n move on the servo based table because a cylinder holds the item in place at the end of the inverter controlled conveyor.

HMI: It indicates the sensors, the position of the item, the state of cylinders, the position of servo controlled table and the labourer can manage the system for example start or stop the progress.

NodeJs javascripts based application: It is an OPC-UA client to send and receive data from PLC1. It is a HTTP server too, and the data from the PLC1 are sent to React application via HTTP protocoll.

React: It is a javascript based frontend application. The states of the system can be ckecked in the browser remotely from anywhere. Just type the ip address of the React application and the system can be monitored and managed from anywhere.

PostgreSql server: It holds the data in datatables.

Networks, when the system doesn't operate in localhost:

Network1 contains PLC1, PLC2, servo drive and HMI.

Network2 contains the NodeJs application

Network3 contains the PostgreSql server.

Network4 contains the React application.



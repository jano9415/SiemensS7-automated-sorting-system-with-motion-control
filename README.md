# SiemensS7-automated-sorting-system

![image](https://github.com/user-attachments/assets/6428dd24-0d1b-4717-aa35-aaa21168ee71)



![Image23](https://github.com/user-attachments/assets/85ab0c34-80d1-4ffd-8bc7-82497ed3a24c)

This system automates the measuring and sorting process for items based on size and material. The system contains digital inputs, digital outputs, analog inputs, analog outputs, servo motor for precise control, communication between two Siemens PLC with TSEND_C and TRCV_C function blocks, HMI for display and control, OPC-UA communication between NodeJs application and Siemens PLC, NodeJs HTTP server to receive the HTTP request from React client application, web application with React for monitoring and control of the system remotely, PostgreSql to store data in database.

![image](https://github.com/user-attachments/assets/299110dd-fee4-43ca-92d7-b0f2a4fba107)


First step: The labourer or a robot places the item on the inverter controlled conveyor. The conveyor conveys the item forward.

Second step: An analog sensor measures the size of the item. It can be small and non metal item, small and metal, large and non metal, large and metal.

Third step: An inductive sensor checks if the item is metallic.

Fourth step: An analog load cell measures the weight of the item.

Fifth step: The item moves forward on a servo controlled table and the servo motor moves this table to the accurate position.

Sixth step: After reaching the appropriate position a cyclinder pushes the item in the expected bin for further process.

![image](https://github.com/user-attachments/assets/3dba5d68-63f3-4a0c-854e-e54f818e60fd)


Bin 1:	Small and non metal

Bin 2:	Small and metal

Bin 3:	Large and not metal

Bin 4:	Large and metal


![image](https://github.com/user-attachments/assets/884ace3b-d37e-4754-8750-5ad7aa9c4aeb)


PLC1: It controls the the measuring and sorting system. It is an OPC-UA server to communicate with the NodeJs javascript based OPC-UA client. It communicates with PLC2 with TSEND_C and TRCV_C open user communication.

PLC2: It is part of an other system and it controls the further processes after the item get into the expected bin. An optical sensor checks the saturation of each bin and sends this boolean variable to PLC1. If one of the bins are full, the item doest'n move on the servo based table because a cylinder holds the item in place at the end of the inverter controlled conveyor.

HMI: It indicates the sensors, the position of the item, the state of cylinders, the position of servo controlled table and the labourer can manage the system for example start or stop the progress.

NodeJs javascripts based application: It is an OPC-UA client to send and receive data from PLC1. It is a HTTP server too, and the data from the PLC1 are sent to React application via HTTP protocoll.

React: It is a javascript based frontend application. The states of the system can be ckecked in the browser remotely from anywhere. Just type the ip address of the React application and the system can be monitored and managed from anywhere.

PostgreSql server: It holds the data in datatables.

![image](https://github.com/user-attachments/assets/b5af0f9d-c7bf-4b7a-8ef0-4eae5113bfa6)


Network1 contains PLC1, PLC2, servo drive and HMI.

Network2 contains the NodeJs application

Network3 contains the PostgreSql server.

Network4 contains the React application.

![image](https://github.com/user-attachments/assets/c6fa57cf-2367-4d0c-872f-12f5ee897fe5)

![image](https://github.com/user-attachments/assets/0f6149e2-b5fa-49a8-a83a-74fb3bfa3f41)

![image](https://github.com/user-attachments/assets/c41ad573-c72d-4659-ba57-3580f40e9563)

![image](https://github.com/user-attachments/assets/08301573-8600-4cfc-bbf7-28c382ad94c4)

![image](https://github.com/user-attachments/assets/2e5208f3-6026-4a39-a6be-148e98ea7cd9)

![image](https://github.com/user-attachments/assets/10ecefea-eafb-49f9-891d-600cea8b652c)










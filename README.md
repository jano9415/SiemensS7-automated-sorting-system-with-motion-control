# SiemensS7-automated-sorting-system

![image](https://github.com/user-attachments/assets/6428dd24-0d1b-4717-aa35-aaa21168ee71)



![Image23](https://github.com/user-attachments/assets/17e363b3-a777-49f8-b201-68dbf8b8c63c)


This system automates the measuring and sorting process for items based on size and material. The system contains digital inputs, digital outputs, analog inputs, analog outputs, servo motor for precise control, communication between two Siemens PLC with TSEND_C and TRCV_C function blocks, HMI for display and control, OPC-UA communication between NodeJs application and Siemens PLC, NodeJs HTTP server to receive the HTTP request from React client application, web application with React for monitoring and control of the system remotely, PostgreSql to store data in database.

![image](https://github.com/user-attachments/assets/299110dd-fee4-43ca-92d7-b0f2a4fba107)


First step: The labourer or a robot places the item on the inverter controlled conveyor. The conveyor conveys the item forward.

Second step: An analog sensor measures the size of the item. It can be small and non metal item, small and metal, large and non metal, large and metal.

Third step: An inductive sensor checks if the item is metallic.

Fourth step: An analog load cell measures the weight of the item.

Fifth step: The item moves forward on a servo controlled table and the servo motor moves this table to the accurate position.

Sixth step: After reaching the appropriate position a cyclinder pushes the item in the expected bin for further process.

![image](https://github.com/user-attachments/assets/3dba5d68-63f3-4a0c-854e-e54f818e60fd)


Bin 1:	Small and non metal. The size is between 10cm and 20cm and the weigth is less then 5kg and non metal.

Bin 2:	Small and metal. The size is between 10cm and 20cm and the weigth is less then 5kg and metal.

Bin 3:	Large and non metal. The size is more then 20cm and the weight is more then 5kg and non metal.

Bin 4:	Large and metal. The size is more then 20cm and the weight is more then 5kg and metal.


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

![image](https://github.com/user-attachments/assets/e4d9956c-7da2-42ef-ad3e-463fb4dbc924)

![image](https://github.com/user-attachments/assets/76baa081-a7ec-4f08-adf6-6c8e844b9621)

![image](https://github.com/user-attachments/assets/64882e8a-e933-4e6c-8e7a-f088d039b6d0)

![image](https://github.com/user-attachments/assets/c297853b-4e4d-4392-8f76-1fbe626f571d)

![image](https://github.com/user-attachments/assets/dea1ace9-7fbb-4e59-b6f6-0c3d5a3d7bac)

Function, function blocks, data blocks, technology objects, PLC tags, HMI screens and HMI tags in Tia Portal:

![image](https://github.com/user-attachments/assets/306b5f35-6e97-4340-875d-90b84b3e2b87)

![image](https://github.com/user-attachments/assets/975c3008-fe8c-4acb-ba3a-bd6f38ce2415)

![image](https://github.com/user-attachments/assets/360b23d1-d1c8-45ad-a588-7721426fa7a7)

![image](https://github.com/user-attachments/assets/81507abf-7ff2-4c2a-a6c5-6f744a580be7)


Main screen in the HMI after pushing the control 24V button for two seconds. There is 24V for the output modules and this is indicated by the blue light (for test case, on the screen) and the text on the screen.
![image](https://github.com/user-attachments/assets/dd25bc95-6584-40f5-9dc3-69c2ef591286)

In order to start the conveyor switch the automatic mode and push the Start conveyor button for 2 seconds. The yellow light shows that the conveyor moves.
![image](https://github.com/user-attachments/assets/0677035c-d478-4201-bcbb-e94b4baf1efb)

Put the item on the conveyor. The item starts and the green light goes on indicating that there is an item in the system and the yellow light goes off. The program mesures the size and weight and decides the material. Finally calculating the breed from the previous data.
![image](https://github.com/user-attachments/assets/f9bbdaa6-c723-41f7-9e39-3ab2489b2ef7)

If the table is at home position and the proper bin is not full (this data comes from PLC2 using TCP/IP communication with TSEND and TRCV blocks) then the cylinder in the end of the conveyor moves backward and the item moves on the table. The servo motor carries the table to the appropriate postion. In this example the item is small and metal, so it should be moved to bin 2.

![image](https://github.com/user-attachments/assets/33f75b11-f0e2-41a2-8828-a3e64d2099af)

If the bin is not full (this data comes from PLC2 using TCP/IP communication with TSEND and TRCV blocks) the cylinder situated on the table pushes the item into the bin. If the item passes in front of the sensor during heading towards the bin and the cylinder in back position on the servo controlled table, the table moves back to home position and the cycle end. There is no item in the system any more.

![image](https://github.com/user-attachments/assets/95466eb6-2b8a-43b3-8a11-e8b4570eccf2)

This is the plain operation but I have been adding new functions to the system to practise as many things as I can and creating a more complex project with more and more logic.




Inputs screen in the HMI:

![image](https://github.com/user-attachments/assets/d57d7fa9-01aa-42c1-8eed-f6b5ce46c9d2)

Manual motion screen in the HMI:

![image](https://github.com/user-attachments/assets/a4c05caf-f822-4038-885b-883a150f6617)

Servo motion screen in the HMI:

![image](https://github.com/user-attachments/assets/dcd7db7b-f0f0-4d5c-97d2-4fa722bde0c0)

Menu in react web application:

![image](https://github.com/user-attachments/assets/9eb436e0-f119-4e9e-8563-3abbf0c77789)























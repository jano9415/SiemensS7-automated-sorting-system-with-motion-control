# SiemensS7-automated-sorting-system

![Image23](https://github.com/user-attachments/assets/85ab0c34-80d1-4ffd-8bc7-82497ed3a24c)

This system automates the measuring and sorting process for items based on size and material. The system contains digital inputs, digital outputs, analog inputs, analog outputs, servo motor for precise control, communication between two Siemens PLC with TSEND_C and TRCV_C function blocks, HMI for display and control, OPC-UA communication between NodeJs application and Siemens PLC, NodeJs HTTP server to receive the HTTP request from React client application, web application with React for monitoring and control of the system remotely, PostgreSql to store data in database.

Main steps of the process:

First step: The labourer or a robot places the item on the conveyor. The conveyor coveys the item.
Second step: An analog sensor measures the size of the item. It can be small and non metal item, small and metal, large and non metal, large and metal.
Third step: An inductive sensor checks if the item is metallic.
Fourth step: An analog load cell measures the weight of the item.
Fifth step: The item moves forward on a servo controlled table and the servo motor moves this table to the accurate position.
Sixth step: After reaching the appropriate position a cyclinder pushes the item in the expected bin.

Bins:

Bin 1:	Small and non metal
Bin 2:	Small and metal
Bin 3:	Large and not metal
Bin 4:	Large and metal


Components of the entire system:



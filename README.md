# valhacks2019

index.html allows for sending demo data to all the connected devices.

device.html establishes a TCP socket to the server app, and waits for live data about the rooms temperature, light intensity and energy consumption
in order to provide advice to to the users of the room.

index.js doesnt save any data, but just forwards live all data from the sensors service to the connected monitoring devices.

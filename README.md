# Toy Robot

This is a simulation of a toy robot moving on square tabletop:

https://evgenii.com/files/2020/11/toy_robot/


## Run the simulation locally

To run the simulation on your computer, first download this repository (Git needs to be installed):

```
git clone https://github.com/evgenyneu/toy_robot.git
```

Then change into the `toy_robot` directory:

```
cd toy_robot
```

Next, start a web server. You can use any web server to run the web site locally. Bellow are examples of using Python and Node.js:


### Option 1: run a Python web server

Install Python and then run

```
python -m http.server
```

View the simulation in a web browser at [http://0.0.0.0:8000](http://0.0.0.0:8000).


### Option 2: run a Node.js web server

Install the server

```
npm install http-server -g
```

Run:

```
http-server
```

View the simulation in a web browser at [http://127.0.0.1:8080](http://127.0.0.1:8080).


## Running unit tests

Open `/test` URL path to run the JavaScript unit tests. For example, if you used the Python web server, open [http://0.0.0.0:8000/test](http://0.0.0.0:8000/test)



## The unlicense

This work is in [public domain](LICENSE).

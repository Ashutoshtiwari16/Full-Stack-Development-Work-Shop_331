import {EventEmitter} from "node:events";
const task = new EventEmitter();

task.on("greet",(name)=>{
    console.log('Hello,${name}! Welcome to the session.');
});

task.on("exit",(reason)=>{
    console.log(`Session ending. Reason: ${reason}`);
});
task.on("greet",()=>{
    console.log("class started by Ashutosh Tiwari");
});
task.on("exit",()=>{
    console.log("class finished by Ashutosh Tiwari");
});
task.on("start",(course)=>{
   console.log(`${course}started`);
});


task.emit("greet","ayush");
task.emit("exit","session ended");
task.emit("start","FSD");
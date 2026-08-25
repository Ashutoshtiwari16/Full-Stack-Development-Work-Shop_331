import{EventEmitter}from "node:events";

function createDOMElement(){
    const emitter = new EventEmitter();

    return{
        addEventListener(eventName,callback){
            emitter.on(eventName,callback)
        },

        removeEventListener(eventName,callback){
            emitter.off(eventName,callback)
        },

        dispatchEvent(event){
            emitter.emit(event.type,event);
        },
        };
    }

    const button = createDOMElement();
    button.addEventListener('click',()=>{
        console.log("button clicked");
    })


function handleClick(event){
    console.log('Button clicked!');
    console.log('Event Type:${event.type}');
    console.log('Message: ${event.detail}');

}


button.addEventListener("click",handleClick)


button.dispatchEvent({
    type:"click",
    detail:"Hello from Node.js",
});

button.removeEventListener("Click",handleClick);


    
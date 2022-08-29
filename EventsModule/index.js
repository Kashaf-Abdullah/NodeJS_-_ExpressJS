



//we are creating here class for an events
const EventEmitter=require('events')

//making an object
const event=new EventEmitter()
event.on('say my name',()=>{
    console.log('you name is abc');
    
})







event.on('say my name',()=>{
    console.log('you name is xyz');
    
})

//always emit after defining
event.emit('say my name')



//second event

event.on("checkpage",( statuscode,msg)=>{
    console.log(`status code is ${statuscode} and the page is ${msg}`)
})
event.emit("checkpage",200,"ok")





//The concept is quite simple: emitter objects emit named events that cause
//previously registered to be called .So ,an emitter object
//basically has two main feature

//Emitting name events
//Registering  and unregistering listener function
function messageHandler(e) {
    postMessage("WORKER says:  "+e.data +"  too");
}

addEventListener("message",messageHandler,true);

const loggerFunction = (logMessage) => {
    if(logMessage.status === 'recognizing text')
        console.log(logMessage.progress.toPrecision(2));
}

export { loggerFunction } 
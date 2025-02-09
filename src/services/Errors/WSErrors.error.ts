export class CantConnectToTheUrl extends Error{
    constructor(){
        super("Got some problens while trying to connect to the specified page");
    }
}
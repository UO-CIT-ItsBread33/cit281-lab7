class CustomError extends Error {
    constructor(args) {
        super(args);
        this.name = "CustomError";
    }
}
function throwGenericError() {
    throw new Error("Generic Error");
}

function throwCustomError() {
    throw new CustomError("Custom Error")
}

try {
    throwGenericError();
    console.log("Generic Error try block");
}
catch(err) {
    console.log("Generic Error catch block");
    console.log(err);
}
finally {
    console.log("Generic Error finally block")
}

try {
    throwCustomError();
    console.log("Custom Error try block");
}
catch(err) {
    console.log("Custom Error catch block");
    console.log(err);
}
finally {
    console.log("Custom Error finally block");
}
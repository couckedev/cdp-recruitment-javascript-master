function parseArgs(args) {
    return args.map(arg => {
        /*
            1 - We have to remove -- beside parameter name (example: --filter=value become filter=value)
            2 - We have to split at '=' character to have array containing parameter name first, and value second
        */
        const processedArg = arg.replace('--','').split('=');
        return { name: processedArg[0], value: processedArg[1] }; //Just return objet containing parameter name and parameter value for each arg
    })    
}

module.exports = parseArgs;
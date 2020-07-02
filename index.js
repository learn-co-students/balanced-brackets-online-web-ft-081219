function isBalanced(string){
    while (string.length > 0) {
        const length = string.length
        string = string.replace("()", "")
        string = string.replace("{}", "")
        string = string.replace("[]", "")
        if (string.length === length) {
            return false
        }
    }
    return true
}
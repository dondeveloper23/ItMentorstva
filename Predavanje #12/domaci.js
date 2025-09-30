function login(username, pw) {
    if (username.toLowerCase() === "admin" && pw.toLowerCase() === "admin") {
        return true;
    }
    return false
}
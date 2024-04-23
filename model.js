// Model
class UserModel {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    // Method to validate the username and password
     validate(username, password) {
        return this.username === username && this.password === password;
    }
}

// Data
const users = [
    new UserModel("user1", "pass1"),
    new UserModel("user2", "pass2"),
    new UserModel("user3", "pass3"),
    new UserModel("user4", "pass4"),
    new UserModel("user5", "pass5"),
    new UserModel("user6", "pass6"),
    new UserModel("user7", "pass7"),
    new UserModel("user8", "pass8"),
    new UserModel("user9", "pass9"),
    new UserModel("user10", "pass10"),
];
let currentUser = null;

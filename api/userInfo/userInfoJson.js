
function User(userName, password, userState, userZipcode, comments, likes){
    this.userName = userName;
    this.password = password;
    this.userState = userState;
    this.userZipcode = userZipcode;
    this.comments = comments;
    this.likes = likes
}

module.exports = User;
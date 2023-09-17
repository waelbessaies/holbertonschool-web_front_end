const user = {
    hobby: "Calligraphy",
    favoriteSport: "Hockey",
    astrologicalSign: "Aries",
    firstName: "Buillaume",
    lastName: "Ialva",
    location: "Telaviv",
    occupation: "Engineer",
    logwelcomeUser(welcomeString) {
        console.log(welcomeString + ',' + this.firstName + '.' + 'Your occupation is:' + this.occupation);
    }
}
let bindlogwelcomeUser = user.logwelcomeUser.bind(user);
bindlogwelcomeUser('Welcome');
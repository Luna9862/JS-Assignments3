const users = [
    {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false},
    {id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true},
    {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false},
    {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
    {id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false},
    {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
    {id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false},
    {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false}
];

const userJose= users.find(user => user.firstName === 'Jose');

const allPremiumMembers = users.filter(user => user.isPremiumMember);

const allUserLastNames = users.map(user => user.lastName);

const namesLoggedMore10Times = users
    .filter(user  => user.logins > 10)
    .map(user => `${user.firstName} ${user.lastName}`);

const totalLogins = () => {
    return users.reduce((total,user) => total + user.logins, 0);
};
  



console.log("User found with name 'jose':", userJose);
console.log("All Premium members:", allPremiumMembers);
console.log("All Users Last Names:", allUserLastNames);
console.log("Users logged more than 10 times:", namesLoggedMore10Times);
console.log("The total number of logins:",totalLogins());
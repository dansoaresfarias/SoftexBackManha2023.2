function isAdult(user) {
    return user.age >= 18;
}
var justine = {
    name: 'Justine',
    age: 23,
};
var isJustineAnAdult = isAdult(justine);
console.log(isJustineAnAdult);

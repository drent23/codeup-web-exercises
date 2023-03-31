

function getUserInfo(userName) {
    fetch('https://api.github.com/users/' + userName + '/events', {headers: {'Authorization': 'token ' + promiseToken}})
        .then(response => response.json())
        .then(data => {
            console.log(data);

        }).catch(error => console.error(error));
}
getUserInfo('drent23');

function wait(number){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {resolve()}, number)});
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

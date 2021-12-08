document.getElementById('loginForm').addEventListener('submit', (event) => {
	event.preventDefault();
});

function login() {
	console.log('login called');
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((data) => {
			console.log(data);
			alert('Logged in ' + email + ', Welcome!');
			location.replace('welcome.html');
		})
		.catch((error) => {
			document.getElementById('error').innerHTML = error.message;
		});
}

function register() {
	console.log('register called');
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then((data) => {
			console.log(data);
			alert('Registered');
			location.replace('welcome.html');
		})
		.catch((error) => {
			document.getElementById('error').innerHTML = error.message;
		});
}

function logout() {
	console.log('logged out');
	location.replace('index.html');
}
// firebase.auth().onAuthStateChanged((user) => {
// 	alert('logged out!');
// 	if (!user) {
// 	} else {
// 		document.getElementById('user').innerHTML = 'Welcome, ' + user.email;
// 	}
// });

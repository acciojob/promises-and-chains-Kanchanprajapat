//your JS code here. If required.
 document.getElementById('user-form').addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const age = document.getElementById('age').value;

            if (name === '' || age === '') {
                alert('Both fields are required.');
                return;
            }

            validateAge(name, age).then(message => {
                alert(message);
            }).catch(error => {
                alert(error);
            });
        });

        function validateAge(name, age) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (age > 18) {
                        resolve(`Welcome, ${name}. You can vote.`);
                    } else {
                        reject(`Oh sorry ${name}. You aren't old enough.`);
                    }
                }, 4000);
            });
        }
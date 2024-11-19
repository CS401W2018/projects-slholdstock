document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const first = document.getElementById('first').value;
    const last = document.getElementById('last').value;
    const pass = document.getElementById('pass').value;
    const age = document.getElementById('age').value;
    const user = document.getElementById('user').value;
    if (!first || !last) {
        alert("You need a first and last name.")
        return;
    }
    if (!age || age < 18) {
        alert("You must be 18!")
        return;
    }
    if (pass.length <= 6) {
        alert("Your password must be at least 6 characters long!")
        return;
    }
    const formData = {
        firstName: first,
        lastName: last,
        password: pass,
        username: user,
        age: age
    };
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "processing.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = xhr.response = JSON.parse(xhr.response);
            document.getElementById('message').innerHTML = response.message;
            document.getElementById('myForm').innerHTML = "";
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.')
        }
    };
    xhr.send(JSON.stringify(formData));
    console.log(formData)
})
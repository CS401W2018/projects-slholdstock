document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const first = document.getElementById('first').value;
    const last = document.getElementById('last').value;
    const email = document.getElementById('email').value;
    if (!first || !last) {
        alert("You need a first and last name.")
        return;
    }
    const formData = {
        firstName: first,
        lastName: last,
        email: email
    };
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "subscription.json", true);
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
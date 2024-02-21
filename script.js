document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;

    // You can add validation here before proceeding with signup

    // Send verification code to email (Not implemented here)

    // Proceed with signup
    alert('Signed up successfully!');
    // Redirect or do something else after signup
});

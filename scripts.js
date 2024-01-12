document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            var formData = {
                name: this.name.value,
                email: this.email.value,
                message: this.message.value
            };
            
            console.log(formData); // Replace with actual submission logic

            // Optionally, clear the form or provide a success message
            this.reset();
            alert("Thank you for your message!");
        });
    }
});


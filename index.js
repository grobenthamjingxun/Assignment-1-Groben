document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const seat = document.getElementById('seat').value;

    alert(`Thank you, ${name}! Your ${seat} ticket has been booked.`);
});

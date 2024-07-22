const services = [
    'Swedish Massage (60 mins - 30000frw)', 'Swedish Massage (90 mins - 35000frw)', 'Swedish Massage (120 mins - 50000frw)',
    'Deep Tissue Massage (60 mins - 38000frw)', 'Deep Tissue Massage (90 mins - 40000frw)', 'Deep Tissue Massage (120 mins - 60000frw)',
    'Hot Stone Massage (60 mins - 40000frw)', 'Hot Stone Massage (90 mins - 50000frw)', 'Hot Stone Massage (120 mins - 70000frw)',
    'Aromatherapy Massage (60 mins - 40000frw)', 'Aromatherapy Massage (90 mins - 50000frw)', 'Aromatherapy Massage (120 mins - 70000frw)',
    'Therapeutic Massage (60 mins - 40000frw)', 'Therapeutic Massage (90 mins - 50000frw)', 'Therapeutic Massage (120 mins - 70000frw)',
    'Reflexology (30 mins - 20000frw)', 'Reflexology (60 mins - 30000frw)', 'Di-Stress Back (60 mins - 30000frw)',
    'Head, Neck Shoulder (30 mins - 20000frw)', 'Sport Massage (60 mins - 35000frw)', 'Sport Massage (90 mins - 40000frw)',
    'Sport Massage (120 mins - 60000frw)', 'Berbere Massage (60 mins - 40000frw)', 'Berbere Massage (90 mins - 50000frw)',
    'Berbere Massage (120 mins - 70000frw)', 'Candle Massage (60 mins - 40000frw)', 'Candle Massage (90 mins - 50000frw)',
    'Candle Massage (120 mins - 70000frw)', 'Rose Scrub (25000frw)', 'Soft Scrub (30000frw)', 'Coffee Scrub (30000frw)',
    'Harmony Scrub (50000frw)', 'Harmony Body Wrap (50000frw)', 'Serenity Facial (20000frw)', 'Nourishing Facial (30000frw)',
    'Radiance Facial (40000frw)', 'Ultimate Anti-Aging Facial (50000frw)', 'Under Arm Waxing (10000frw)', 'Full Leg Waxing (30000frw)',
    'Bikini Waxing (15000frw)', 'Brazilian Waxing (30000frw)', 'Eyebrows Waxing (10000frw)', 'Lips and Chin Waxing (10000frw)',
    'Half Arm Waxing (20000frw)', 'Full Arm Waxing (30000frw)', 'Half Leg Waxing (20000frw)', 'Full Leg Waxing (30000frw)',
    'Back Waxing (20000frw)', 'Belly Waxing (15000frw)', 'Chest Waxing (20000frw)', 'Lower Back Waxing (10000frw)',
    'Lower Leg Waxing (20000frw)', 'Bikini Line Waxing (15000frw)', 'Full Body Waxing (50000frw)', 'Classic Manicure (5000frw)',
    'Delux Manicure (7000frw)', 'French Manicure (7000frw)', 'Classic Pedicure (10000frw)', 'Delux Pedicure (15000frw)',
    'French Pedicure (12000frw)', 'Bliss Package (70000frw)', 'Peaceful Pampering Package (90000frw)', 'Haven Package (120000frw)'
];

const serviceSelect = document.getElementById('service-select');
const serviceSearch = document.getElementById('service-search');
const bookingForm = document.getElementById('booking-form');
const errorMessage = document.getElementById('error-message');

function populateServiceOptions(services) {
    serviceSelect.innerHTML = ''; // Clear existing options
    services.forEach(service => {
        const option = document.createElement('option');
        option.value = service;
        option.textContent = service;
        serviceSelect.appendChild(option);
    });
}

function filterServices() {
    const searchTerm = serviceSearch.value.toLowerCase();
    const filteredServices = services.filter(service => service.toLowerCase().includes(searchTerm));
    populateServiceOptions(filteredServices);
}

// Initialize with all services
populateServiceOptions(services);

// Add event listener for the search input
serviceSearch.addEventListener('input', filterServices);

bookingForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const message = document.getElementById('message').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const selectedService = serviceSelect.value;

    // Validate date and time
    const selectedDateTime = new Date(`${date}T${time}`);
    const currentDateTime = new Date();

    if (selectedDateTime < currentDateTime) {
        errorMessage.textContent = 'The selected date and time are in the past. Please choose a future date and time.';
        return;
    } else {
        errorMessage.textContent = ''; // Clear any previous error messages
    }

    // WhatsApp phone number (replace with the actual phone number)
    const whatsappNumber = '+250783074328';

    // Create the WhatsApp message
    const whatsappMessage = `Booking Request:
Name: ${name}
Email: ${email}
Phone: ${phone}
Address: ${address}
Service: ${selectedService}
Message: ${message}
Preferred Date: ${date}
Preferred Time: ${time}`;

    // Encode the message
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Create the WhatsApp URL
    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

    // Open WhatsApp with the message
    window.open(whatsappURL, '_blank');
});
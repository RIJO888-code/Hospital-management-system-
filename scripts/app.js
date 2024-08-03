// List of doctors
const doctors = [
    { id: 1, name: 'Dr. Shakeela', specialization: 'Cardiology' },
    { id: 2, name: 'Dr. Zakeer', specialization: 'Gynacolagist' },
    { id: 3, name: 'Dr. Ramzan', specialization: 'Orthopediac' },
    { id: 4, name: 'Dr. Melvin Kattakada', specialization: 'Clinical Surgeon' },
    { id: 5, name: 'Dr. Hannah', specialization: 'Pediatrician' },
    // Add more doctors here
];

document.addEventListener('DOMContentLoaded', function() {
    const doctorSelect = document.getElementById('doctor');
    doctors.forEach(doctor => {
        const option = document.createElement('option');
        option.value = doctor.id;
        option.textContent = doctor.name;
        doctorSelect.appendChild(option);
    });
});

function toggleBookingForm() {
    const form = document.getElementById('bookingForm');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const patientName = document.getElementById('patientName').value;
    const doctorId = document.getElementById('doctor').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Find the doctor
    const doctor = doctors.find(d => d.id == doctorId);
    
    // Simulate adding patient information to patient management
    addPatientToManagement(patientName, doctor.name);

    // Add appointment to the table
    const table = document.getElementById('appointmentsTable');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>1</td>
        <td>${patientName}</td>
        <td>${doctor.name}</td>
        <td>${date}</td>
        <td>${time}</td>
    `;
    table.appendChild(row);

    // Clear the form
    document.getElementById('appointmentForm').reset();
    toggleBookingForm();
});

function addPatientToManagement(name, doctor) {
    console.log(`Added patient ${name} with doctor ${doctor}`);
    // This function would normally send data to the server or update a database
}

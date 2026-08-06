document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.querySelector('#joinUsForm');
    
    if (!registrationForm) return;

    // Reset validation state when user types
    const inputs = registrationForm.querySelectorAll('.form-control, .form-select, .form-check-input');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            input.classList.remove('is-invalid');
        });
        input.addEventListener('change', () => {
            input.classList.remove('is-invalid');
        });
    });
      
    registrationForm.addEventListener('submit', function(event) {
        // Prevent the default browser HTTP POST refresh cycle
        event.preventDefault();
          
        // Extract states from the DOM input controls
        const playerNameInput = document.querySelector('#playerName');
        const playerEmailInput = document.querySelector('#playerEmail');
        const playerRoleInput = document.querySelector('#playerRole');
        const playerExperienceInputs = document.querySelectorAll('input[name="experienceLevel"]');
        
        let isValid = true;
        
        // Validation logic
        if (playerNameInput.value.trim() === '') {
            playerNameInput.classList.add('is-invalid');
            isValid = false;
        }
        
        if (playerEmailInput.value.trim() === '' || !playerEmailInput.value.includes('@')) {
            playerEmailInput.classList.add('is-invalid');
            isValid = false;
        }

        if (playerRoleInput.value === '') {
            playerRoleInput.classList.add('is-invalid');
            isValid = false;
        }
        
        // Check if an experience level is selected
        let experienceSelected = false;
        let experienceValue = '';
        playerExperienceInputs.forEach(radio => {
            if (radio.checked) {
                experienceSelected = true;
                experienceValue = radio.value;
            }
        });
        
        if (!experienceSelected) {
            // Add is-invalid to the last radio button for visual feedback or handle via a container
            playerExperienceInputs.forEach(radio => radio.classList.add('is-invalid'));
            isValid = false;
        }
          
        if (!isValid) {
            return; // Stop execution if validation fails
        }
          
        // Dynamically mutate the modal's internal DOM node to provide custom feedback
        const modalBody = document.querySelector('#successModal .modal-body');
        modalBody.innerHTML = `
            <div class="text-center py-4">
                <div class="mb-4 text-success">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                </div>
                <h4 class="fw-bold mb-3">Registration Complete!</h4>
                <p class="text-muted mb-0"><strong>${playerNameInput.value.trim()}</strong>, you are officially registered as a <strong>${playerRoleInput.value}</strong> with <strong>${experienceValue}</strong> experience.</p>
                <p class="text-muted mt-2">We've sent a confirmation email to ${playerEmailInput.value.trim()}.</p>
            </div>
        `;
          
        // Interface directly with the Bootstrap 5 JS API to trigger the modal visually
        const successModal = new bootstrap.Modal(document.getElementById('successModal'));
        successModal.show();
        
        // Optional: clear the form
        registrationForm.reset();
    });
});

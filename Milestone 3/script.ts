const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-preview') as HTMLDivElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const institute = (document.getElementById('institute') as HTMLInputElement).value;
    const duration = (document.getElementById('duration') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const profileImageInput = document.getElementById('profile-image') as HTMLInputElement;
    const profileImage = profileImageInput.files?.[0];

    if (!profileImage) {
        console.error('No profile image selected');
        return;
    }

    // Generate resume HTML
    const resumeHTML = `
        <div class="resume-container">
            <div class="profile-section">
                <img src="${URL.createObjectURL(profileImage)}" alt="Profile Image">
                <h2>${name}</h2>
                <p>${email} | ${phone}</p>
            </div>
            <hr>
            <section>
                <h3>Education</h3>
                <ul>
                    <li><b>Degree:</b> ${degree}</li>
                    <li><b>Institute:</b> ${institute}</li>
                    <li><b>Duration:</b> ${duration}</li>
                </ul>
            </section>
            <section>
                <h3>Skills</h3>
                <ul>
                    ${skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}
                </ul>
            </section>
            <section>
                <h3>Experience</h3>
                <p>${experience}</p>
            </section>
        </div>
    `;

    // Display generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error('The resume display element is missing.');
    }
});

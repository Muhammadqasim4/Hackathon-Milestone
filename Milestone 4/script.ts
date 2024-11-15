
let form = document.getElementById('resume-form') as HTMLFormElement;
let resumeDisplayElement = document.getElementById('resume-preview') as HTMLDivElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const institute = (document.getElementById('institute') as HTMLInputElement).value;
    const duration = (document.getElementById('duration') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const profileImageInput = document.getElementById('profile-image') as HTMLInputElement;
    const profileImage = profileImageInput.files && profileImageInput.files[0];

    if (!profileImage) {
        console.error('No profile image selected');
        return;
    }

    const resumeHTML = `
        <div class="resume-container">
            <h1>Dynamic Resume</h1>
            <div class="profile-section">
                <img src="${URL.createObjectURL(profileImage)}" alt="Profile Image">
                <h2>${name}</h2>
                <p>${email} | ${phone}</p>
            </div>
            <hr>
            <section>
                <h3>Education</h3>
                <ul>
                    <li><strong>Degree:</strong> ${degree}</li>
                    <li><strong>Institute:</strong> ${institute}</li>
                    <li><strong>Duration:</strong> ${duration}</li>
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

    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error('The resume display element is missing.');
    }
});

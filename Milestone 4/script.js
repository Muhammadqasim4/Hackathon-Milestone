var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-preview');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var degree = document.getElementById('degree').value;
    var institute = document.getElementById('institute').value;
    var duration = document.getElementById('duration').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    var profileImageInput = document.getElementById('profile-image');
    var profileImage = profileImageInput.files && profileImageInput.files[0];
    if (!profileImage) {
        console.error('No profile image selected');
        return;
    }
    var resumeHTML = "\n        <div class=\"resume-container\">\n            <h1>Dynamic Resume</h1>\n            <div class=\"profile-section\">\n                <img src=\"".concat(URL.createObjectURL(profileImage), "\" alt=\"Profile Image\">\n                <h2>").concat(name, "</h2>\n                <p>").concat(email, " | ").concat(phone, "</p>\n            </div>\n            <hr>\n            <section>\n                <h3>Education</h3>\n                <ul>\n                    <li><strong>Degree:</strong> ").concat(degree, "</li>\n                    <li><strong>Institute:</strong> ").concat(institute, "</li>\n                    <li><strong>Duration:</strong> ").concat(duration, "</li>\n                </ul>\n            </section>\n            <section>\n                <h3>Skills</h3>\n                <ul>\n                    ").concat(skills.split(',').map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n                </ul>\n            </section>\n            <section>\n                <h3>Experience</h3>\n                <p>").concat(experience, "</p>\n            </section>\n        </div>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});

var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-preview');
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var degree = document.getElementById('degree').value;
    var institute = document.getElementById('institute').value;
    var duration = document.getElementById('duration').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    var profileImageInput = document.getElementById('profile-image');
    var profileImage = (_a = profileImageInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (!profileImage) {
        console.error('No profile image selected');
        return;
    }
    // Generate resume HTML
    var resumeHTML = "\n        <div class=\"resume-container\">\n            <div class=\"profile-section\">\n                <img src=\"".concat(URL.createObjectURL(profileImage), "\" alt=\"Profile Image\">\n                <h2>").concat(name, "</h2>\n                <p>").concat(email, " | ").concat(phone, "</p>\n            </div>\n            <hr>\n            <section>\n                <h3>Education</h3>\n                <ul>\n                    <li><b>Degree:</b> ").concat(degree, "</li>\n                    <li><b>Institute:</b> ").concat(institute, "</li>\n                    <li><b>Duration:</b> ").concat(duration, "</li>\n                </ul>\n            </section>\n            <section>\n                <h3>Skills</h3>\n                <ul>\n                    ").concat(skills.split(',').map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n                </ul>\n            </section>\n            <section>\n                <h3>Experience</h3>\n                <p>").concat(experience, "</p>\n            </section>\n        </div>\n    ");
    // Display generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});

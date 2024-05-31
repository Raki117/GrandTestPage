const validPasscodes = ["0219", "0714", "1018", "0304"];
const imageURL = "https://drive.google.com/file/d/12DGll42DcX8PtoGjdpxPc7qV7NY7rsXp/view?usp=drive_link"; // Ensure this URL is correct and accessible

function checkPasscode() {
    const input = document.getElementById('passcode').value;
    const messageElement = document.getElementById('message');
    
    if (input.length !== 4 || !/^\d{4}$/.test(input)) {
        messageElement.textContent = "The passcode must be 4 digits";
        messageElement.classList.remove('green-text');
        messageElement.style.color = 'red';
    } else if (validPasscodes.includes(input)) {
        messageElement.textContent = "Congratulations!, Now please wait...";
        messageElement.classList.add('green-text');
        messageElement.style.color = 'green';
        setTimeout(function() {
            window.location.href = imageURL;
        }, 2000); // Redirect after 2 seconds
    } else {
        messageElement.textContent = "Invalid Passcode";
        messageElement.classList.remove('green-text');
        messageElement.style.color = 'red';
    }
}

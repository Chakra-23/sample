function detectPhishing() {
    let emailText = document.getElementById("emailInput").value.toLowerCase();
    let result = document.getElementById("result");

    // List of common phishing phrases
    let phishingKeywords = [
        "click here", "verify your account", "urgent action required",
        "update your payment", "login to your account", "confirm your identity",
        "suspended account", "win a prize", "act now", "free gift",
        "your account has been compromised", "billing error", "security alert",
        "reset your password"
    ];

    // Check if any keyword is present in the email text
    let isPhishing = phishingKeywords.some(word => emailText.includes(word));

    if (isPhishing) {
        result.textContent = "⚠️ Warning: This email may be a phishing attempt!";
        result.style.color = "red";
    } else {
        result.textContent = "✅ This email appears to be safe.";
        result.style.color = "green";
    }
}

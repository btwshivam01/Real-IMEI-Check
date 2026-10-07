const imeiInput = document.getElementById("imeiInput");
const checkButton = document.getElementById("checkButton");

const result = document.getElementById("result");
const resultIcon = document.getElementById("resultIcon");
const resultTitle = document.getElementById("resultTitle");
const resultMessage = document.getElementById("resultMessage");
const menuToggle = document.getElementById("menuToggle");
const siteMenu = document.getElementById("siteMenu");
const lightThemeButton = document.getElementById("lightThemeButton");
const darkThemeButton = document.getElementById("darkThemeButton");
const contactForm = document.getElementById("contactForm");
const contactConfirmation = document.getElementById("contactConfirmation");
const contactBackButton = document.getElementById("contactBackButton");
const contactGmailLink = document.getElementById("contactGmailLink");
const contactSentButton = document.getElementById("contactSentButton");

const savedTheme = localStorage.getItem("imei-checker-theme");
setTheme(savedTheme === "light" ? "light" : "dark");

menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isExpanded);
});

lightThemeButton.addEventListener("click", () => {
    setTheme("light");
    setMenuOpen(false);
});

darkThemeButton.addEventListener("click", () => {
    setTheme("dark");
    setMenuOpen(false);
});

siteMenu.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
        setMenuOpen(false);
    }
});

document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav")) {
        setMenuOpen(false);
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        setMenuOpen(false);
        menuToggle.focus();
    }
});

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const emailUrl = new URL("https://mail.google.com/mail/");
    emailUrl.searchParams.set("view", "cm");
    emailUrl.searchParams.set("fs", "1");
    emailUrl.searchParams.set("to", "realimeicheck@gmail.com");
    emailUrl.searchParams.set("su", "Message from Real IMEI Check");
    emailUrl.searchParams.set(
        "body",
        `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\nMessage:\n${formData.get("message")}`
    );
    contactGmailLink.href = emailUrl.toString();

    contactForm.classList.add("hidden");
    contactConfirmation.classList.remove("hidden");
    contactGmailLink.click();
});

contactBackButton.addEventListener("click", () => {
    contactConfirmation.classList.add("hidden");
    contactForm.classList.remove("hidden");
});

contactSentButton.addEventListener("click", () => {
    window.location.reload();
});

function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    lightThemeButton.setAttribute("aria-pressed", String(theme === "light"));
    darkThemeButton.setAttribute("aria-pressed", String(theme === "dark"));
    localStorage.setItem("imei-checker-theme", theme);
}

function setMenuOpen(isOpen) {
    siteMenu.classList.toggle("hidden", !isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    const translate = window.translateSiteText || ((text) => text);
    menuToggle.setAttribute("aria-label", translate(isOpen ? "Close menu" : "Open menu"));
}


// Allow only numbers
imeiInput.addEventListener("input", () => {
    imeiInput.value = imeiInput.value.replace(/\D/g, "");
});


// Check button
checkButton.addEventListener("click", checkIMEI);


// Press Enter to check
imeiInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkIMEI();
    }
});


function checkIMEI() {

    const imei = imeiInput.value.trim();


    // Empty
    if (imei.length === 0) {
        showResult(
            false,
            "Missing IMEI",
            "Please enter an IMEI number."
        );
        return;
    }


    // Length
    if (imei.length !== 15) {
        showResult(
            false,
            "Invalid IMEI",
            "An IMEI number should contain exactly 15 digits."
        );
        return;
    }


    // Luhn validation
    const valid = validateLuhn(imei);


    if (valid) {

        showResult(
            true,
            "Valid IMEI Format",
            "This IMEI passes the standard checksum validation."
        );

    } else {

        showResult(
            false,
            "Invalid IMEI",
            "This IMEI does not pass the standard checksum validation."
        );

    }
}


/*
    Luhn Algorithm

    Used to validate the IMEI check digit.
*/

function validateLuhn(number) {

    let sum = 0;

    // Start from the second-last digit
    for (let i = number.length - 2; i >= 0; i--) {

        let digit = parseInt(number[i], 10);

        // Every second digit gets doubled
        if ((number.length - 1 - i) % 2 === 1) {

            digit *= 2;

            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
    }


    // Final check digit
    const checkDigit = parseInt(number[number.length - 1], 10);

    return (sum + checkDigit) % 10 === 0;
}


/*
    Display result
*/

function showResult(isValid, title, message) {

    result.classList.remove("hidden", "success", "error");

    if (isValid) {

        result.classList.add("success");

        resultIcon.textContent = "✓";

    } else {

        result.classList.add("error");

        resultIcon.textContent = "×";
    }

    const translate = window.translateSiteText || ((text) => text);
    resultTitle.dataset.resultEnglish = title;
    resultMessage.dataset.resultEnglish = message;
    resultTitle.textContent = translate(title);
    resultMessage.textContent = translate(message);
}
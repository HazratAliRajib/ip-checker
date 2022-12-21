// Retrieve the device's IP address
    fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('ip').innerHTML = data.ip;
    });

    // Retrieve the device's DNS
    fetch('https://api.dns-api.com/v1/current/myip.com')
    .then(response => response.json())
    .then(data => {
        document.getElementById('dns').innerHTML = data.answer[0].data;
    });

    // Retrieve the device's ISP
    fetch('https://ipapi.co/json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('isp').innerHTML = data.org;
    });

    // Retrieve the device's operating system
    const os = navigator.platform;
    document.getElementById('os').innerHTML = os;

    // Retrieve the device's browser
    const browser = navigator.userAgent;
    document.getElementById('browser').innerHTML = browser;

    // Retrieve the device's location information
    fetch('https://ipapi.co/json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('country').innerHTML = data.country_name;
    document.getElementById('region').innerHTML = data.region;
    document.getElementById('city').innerHTML = data.city;
    document.getElementById('zip').innerHTML = data.postal;
    });

    // Retrieve the device's local time zone
    const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.getElementById('localTimeZone').innerHTML = localTimeZone;

    // Retrieve the device's system time zone
    const systemTimeZone = -new Date().getTimezoneOffset() / 60;
    document.getElementById('systemTimeZone').innerHTML = systemTimeZone;

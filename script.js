function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

document.getElementById("generateBtn").addEventListener("click", function () {

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const unit = document.querySelector("input[name='unit']").value;
    const amount = document.getElementById("amount").value;
    const paymentdate = document.getElementById("paymentdate").value;
    const rentperiod = document.getElementById("rentperiod").value;
    const to = document.getElementById("to").value;
    const paymentmethod = document.getElementById("paymentmethod").value;
    const notes = document.getElementById("notes").value;

    const gender = document.querySelector("input[name='gender']:checked")?.value || "";

    const receipt = `
        <p><b>Username:</b> ${username}</p>
        <p><b>Gender:</b> ${gender}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Address:</b> ${address}</p>
        <p><b>Unit:</b> ${unit}</p>
        <p><b>Amount:</b> $${amount}</p>
        <p><b>Payment Date:</b> ${paymentdate}</p>
        <p><b>Rent Period:</b> ${rentperiod} to ${to}</p>
        <p><b>Payment Method:</b> ${paymentmethod}</p>
        <p><b>Notes:</b> ${notes}</p>
    `;

    document.getElementById("receiptCard").innerHTML = receipt;
});

document.getElementById("saveBtn").addEventListener("click", function () {

    const receiptContent = document.getElementById("receiptCard").innerText;

    const blob = new Blob([receiptContent], { type: "text/plain" });

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "rent-receipt.pdf";

    link.click();
});

document.getElementById("printBtn").addEventListener("click", function () {
    window.print();
});
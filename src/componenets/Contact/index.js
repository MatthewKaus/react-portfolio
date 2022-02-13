import React, { useState } from 'react';

const Contact = () => {

    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("https://localhost:5000/conact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(details)
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    }


    return (
        <section>
            <h1>Contact Me</h1>



            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" id="name" required />
                    <label htmlFor="name">Name:</label>
                </div>
                <div>
                    <input type="email" id="email" required />
                    <label htmlFor="email">Email:</label>
                </div>
                <div>
                    <textarea id="message" required />
                    <label htmlFor="message">Message:</label>
                </div>
                <button type="submit">{status}</button>
            </form>
        </section>
    )
}

export default Contact;
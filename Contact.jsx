import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section">
      <h2>Contact Us</h2>

      <form className="contact-form">
        <input 
          type="text" 
          defaultValue="nikhil nani" 
          placeholder="Your Name" 
        />

        <input 
          type="email" 
          defaultValue="Nikhil@gmail.com" 
          placeholder="Email" 
        />

        <textarea 
          defaultValue="Hello, I am interested in your services. Please contact me back."
          placeholder="Your Message">
        </textarea>

        <div className="btn-row">
          <button type="submit" className="btn-primary">Send</button>
          <button type="reset" className="btn-secondary">Reset</button>
        </div>
      </form>
    </section>
  );
}

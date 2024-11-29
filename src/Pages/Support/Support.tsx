import { useState } from "react";
import "./Support.css";
import SupportMessage from "./SupportMessage";

function SupportTicketForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    topic: "",
    description: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="support-container">
      <h1>Support Ticket Form</h1>
      <hr />
      {formSubmitted ? (
        <SupportMessage/>
      ) : (
        <form onSubmit={handleSubmit}>
          <section className="form-row">
            {/* Left Column */}
            <section className="form-column">
              {/* Name */}
              <section className="name">
                <h3>Name</h3>
                <section className="input-row">
                  <section className="input-column">
                    <input
                      type="text"
                      name="firstName"
                      id="first"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="first">First</label>
                  </section>
                  <section className="input-column">
                    <input
                      type="text"
                      name="lastName"
                      id="last"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="last">Last</label>
                  </section>
                </section>
              </section>

              {/* Email */}
              <section className="email">
                <h3>Email</h3>
                <section className="form-row">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </section>
              </section>

              {/* Topic */}
              <section className="topic">
                <h3>Topic</h3>
                <section className="form-column">
                  <div className="dashed-border">
                    <p>What can we help you today?</p>
                    <section className="input-column">
                      <section className="input-row">
                        <input
                          type="radio"
                          name="topic"
                          id="general"
                          value="General"
                          checked={formData.topic === "General"}
                          onChange={handleChange}
                        />
                        <label htmlFor="general">General</label>
                      </section>
                      <section className="input-row">
                        <input
                          type="radio"
                          name="topic"
                          id="bug"
                          value="Bug"
                          checked={formData.topic === "Bug"}
                          onChange={handleChange}
                        />
                        <label htmlFor="bug">Bug</label>
                      </section>
                    </section>
                  </div>
                </section>
              </section>
            </section>

            {/* Right Column */}
            <section className="description-section">
              <h3>
                Description <span>Optional</span>
              </h3>
              <textarea
                name="description"
                id="message"
                cols={30}
                rows={10}
                placeholder="Description Report"
                value={formData.description}
                onChange={handleChange}
              />
            </section>
          </section>

          {/* Button */}
          <section className="button-section">
            <button type="submit" className="support-send-btn">
              SEND
            </button>
          </section>
        </form>
      )}
    </div>
  );
}

export default SupportTicketForm;

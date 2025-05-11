export default function Contact() {
  return (
    <section>
      <h2 className="text-4xl font-extrabold text-primary mb-8 text-center drop-shadow-[0_0_8px_#00e6ff]">Contact Us</h2>
      <div className="glass-card max-w-lg mx-auto p-8">
        <form>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 rounded-lg bg-dark.surface border border-border text-white focus:ring-2 focus:ring-primary outline-none"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-lg bg-dark.surface border border-border text-white focus:ring-2 focus:ring-primary outline-none"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
            <textarea
              id="message"
              className="w-full p-3 rounded-lg bg-dark.surface border border-border text-white focus:ring-2 focus:ring-primary outline-none"
              rows={4}
              placeholder="Your Message"
            ></textarea>
          </div>
          <button className="neon-btn w-full">Send Message</button>
        </form>
      </div>
    </section>
  );
}
export default function Contact() {
  return (
    <section className="px-2 sm:px-4 py-8 sm:py-16">
      <h2 className="text-2xl sm:text-4xl font-extrabold text-primary mb-8 text-center drop-shadow-[0_0_8px_#00e6ff]">Contact Us</h2>
      <div className="glass-card w-full max-w-full sm:max-w-lg mx-auto p-4 sm:p-8">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 rounded-lg bg-dark.surface border border-border text-white focus:ring-2 focus:ring-primary outline-none"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-lg bg-dark.surface border border-border text-white focus:ring-2 focus:ring-primary outline-none"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
            <textarea
              id="message"
              className="w-full p-3 rounded-lg bg-dark.surface border border-border text-white focus:ring-2 focus:ring-primary outline-none"
              rows={4}
              placeholder="Your Message"
            ></textarea>
          </div>
          <button className="neon-btn w-full sm:w-auto">Send Message</button>
        </form>
      </div>
    </section>
  );
}
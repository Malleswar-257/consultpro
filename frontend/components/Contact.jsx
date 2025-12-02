function Contact() {
  return (
    <div className="container mx-auto p-4 pt-6">
      <h2 className="text-3xl font-bold">Get in Touch</h2>
      <form>
        <input type="text" placeholder="Name" className="w-full p-2 mb-4" />
        <input type="email" placeholder="Email" className="w-full p-2 mb-4" />
        <textarea placeholder="Message" className="w-full p-2 mb-4" rows={5} />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send</button>
      </form>
    </div>
  );
}

export default Contact;
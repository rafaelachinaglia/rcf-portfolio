import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="gap-x-16 grid grid-cols-2">
      <div className="col-span-2 text-right mb-8">
        <h1>contato</h1>
        <span className="font-extralight ml-2">Vamos conversar?</span>
      </div>
      <div className="col-span-1">
        <img src="/rcf-contact.jpg" height={400} width={400} />
      </div>
      <div className="col-span-1">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;

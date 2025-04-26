import { FormEvent, useState } from "react";
import { Button } from "./ui/button";
import emailjs from "emailjs-com";
import { toast } from "sonner";
import FormField from "./FormField";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitIsLoading, setSubmitIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitIsLoading(true);

    const serviceID = "service_wnr40x8";
    const templateID = "template_o61ut4k";
    const userID = "_E1OTfJ0-pSK5zzPk";

    try {
      await emailjs.sendForm(serviceID, templateID, e.currentTarget, userID);
      toast.success("Mensagem enviada com sucesso! ✅");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      toast.error("Erro ao enviar mensagem. ❌");
    } finally {
      setSubmitIsLoading(false);
    }
  };

  return (
    <form className="space-y-4 w-80" onSubmit={handleSubmit}>
      <FormField
        disabled={submitIsLoading}
        id="name"
        label="Nome"
        onChange={handleChange}
        type="text"
        value={formData.name}
      />
      <FormField
        disabled={submitIsLoading}
        id="email"
        label="E-mail"
        onChange={handleChange}
        type="email"
        value={formData.email}
      />
      <FormField
        disabled={submitIsLoading}
        id="message"
        isTextarea
        label="Mensagem"
        onChange={handleChange}
        value={formData.message}
      />

      <Button className="mt-4 rounded-md w-full" disabled={submitIsLoading}>
        {submitIsLoading ? "Aguarde..." : "Enviar"}
      </Button>
    </form>
  );
};

export default ContactForm;

import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface FormFieldProps {
  disabled: boolean;
  id: string;
  isTextarea?: boolean;
  label: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type?: string;
  value: string;
}

const FormField = ({
  disabled,
  id,
  isTextarea,
  label,
  onChange,
  type = "text",
  value,
}: FormFieldProps) => (
  <div>
    {isTextarea ? (
      <Textarea
        className="mt-2 w-full rounded-lg bg-primary/10"
        disabled={disabled}
        id={id}
        name={id}
        onChange={onChange}
        placeholder={label}
        required
        value={value}
      />
    ) : (
      <Input
        className="mt-2 rounded-full bg-primary/10"
        disabled={disabled}
        id={id}
        name={id}
        onChange={onChange}
        placeholder={label}
        required
        type={type}
        value={value}
      />
    )}
  </div>
);

export default FormField;

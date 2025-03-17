import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface FormFieldProps {
  disabled: boolean;
  id: string;
  isTextarea?: boolean;
  label: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder: string;
  type?: string;
  value: string;
}

const FormField = ({
  disabled,
  id,
  isTextarea,
  label,
  onChange,
  placeholder,
  type = "text",
  value,
}: FormFieldProps) => (
  <div>
    <Label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
      <span className="text-primary"> *</span>
    </Label>
    {isTextarea ? (
      <Textarea
        className="mt-2 w-full rounded-lg"
        disabled={disabled}
        id={id}
        name={id}
        onChange={onChange}
        placeholder={placeholder}
        required
        value={value}
      />
    ) : (
      <Input
        className="mt-2 rounded-full"
        disabled={disabled}
        id={id}
        name={id}
        onChange={onChange}
        placeholder={placeholder}
        required
        type={type}
        value={value}
      />
    )}
  </div>
);

export default FormField;

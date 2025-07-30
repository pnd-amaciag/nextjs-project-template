type TextInputProps = {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  defaultValue?: string;
  required?: boolean;
};

export function TextInput({ 
  id, 
  name, 
  label, 
  placeholder, 
  defaultValue = "", 
  required = false 
}: TextInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={name}
        required={required}
        defaultValue={defaultValue}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder={placeholder}
      />
    </div>
  );
}
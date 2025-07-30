type RadioOption = {
  value: string;
  label: string;
};

type RadioGroupProps = {
  name: string;
  legend: string;
  options: RadioOption[];
  defaultValue?: string;
  required?: boolean;
};

export function RadioGroup({ 
  name, 
  legend, 
  options, 
  defaultValue, 
  required = false 
}: RadioGroupProps) {
  return (
    <div>
      <fieldset>
        <legend className="block text-sm font-medium text-gray-700 mb-2">
          {legend}
        </legend>
        <div className="space-y-2">
          {options.map((option) => (
            <label key={option.value} className="flex items-center">
              <input
                type="radio"
                name={name}
                value={option.value}
                required={required}
                defaultChecked={defaultValue === option.value}
                className="mr-2 text-blue-600 focus:ring-blue-500"
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
import * as React from "react";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import styles from "./styles.module.css";

interface SelectFormProps {
  options: string[];
  placeholder?: string;
  name?: string; // Add name for form submission
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

const SelectForm: React.FC<SelectFormProps> = ({
  options,
  placeholder,
  name,
  defaultValue,
  onValueChange,
}) => {
  const [value, setValue] = React.useState(defaultValue || "");

  const handleChange = (val: string) => {
    setValue(val);
    if (onValueChange) onValueChange(val);
  };

  return (
    <Select.Root value={value} onValueChange={handleChange}>
      <Select.Trigger className={styles.Trigger} aria-label={placeholder}>
        <Select.Value placeholder={placeholder} />
        <Select.Icon className={styles.Icon}>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className={styles.Content}>
          <Select.ScrollUpButton className={styles.ScrollButton}>
            <ChevronUpIcon />
          </Select.ScrollUpButton>

          <Select.Viewport className={styles.Viewport}>
            {options.map((opt) => (
              <Select.Item key={opt} value={opt} className={styles.Item}>
                <Select.ItemText>{opt}</Select.ItemText>
                <Select.ItemIndicator className={styles.ItemIndicator}>
                  <CheckIcon />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>

          <Select.ScrollDownButton className={styles.ScrollButton}>
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>

      {/* Hidden input so FormData can read value */}
      {name && <input type="hidden" name={name} value={value} />}
    </Select.Root>
  );
};

export default SelectForm;
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const InputField = ({
  name,
  label,
  placeholder,
  type = 'text',
  register,
  error,
  validation,
  disabled,
  // components/forms/InputField.tsx
  const InputField = ({
    name,
    label,
    type,
    placeholder,
    disabled,
  }: FormInputProps) => {
    return (
      <div className="space-y-2">
        <Label htmlFor={name} className="form-label">
          {label}
        </Label>
        <Input
          type={type}
          id={name}
          placeholder={placeholder}
          disabled={disabled}
          className={cn('form-input', {
            'opacity-50 cursor-not-allowed': disabled,
          })}
          {...register(name, validation)}
        />
      </div>
    )
  }
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};
export default InputField;

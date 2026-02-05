import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    prefix?: string;
    suffix?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, prefix, suffix, type = 'text', ...props }, ref) => {
        return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-medium text-dark-300 mb-1.5">
                        {label}
                    </label>
                )}

                <div className="relative">
                    {prefix && (
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-400 font-medium">
                            {prefix}
                        </div>
                    )}

                    <input
                        ref={ref}
                        type={type}
                        className={cn(
                            'w-full px-4 py-2.5 bg-dark-800 border border-dark-700 rounded-lg',
                            'text-dark-50 placeholder:text-dark-500',
                            'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
                            'transition-all duration-200',
                            'disabled:opacity-50 disabled:cursor-not-allowed',
                            error && 'border-error-500 focus:ring-error-500',
                            prefix && 'pl-8',
                            suffix && 'pr-12',
                            className
                        )}
                        {...props}
                    />

                    {suffix && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-400 text-sm">
                            {suffix}
                        </div>
                    )}
                </div>

                {error && (
                    <p className="mt-1.5 text-sm text-error-500">{error}</p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';

export default Input;

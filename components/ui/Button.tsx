import { ButtonHTMLAttributes, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onDrag' | 'onDragEnd' | 'onDragStart'> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, onClick, type, ...rest }, ref) => {
        const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all focus-ring disabled:opacity-50 disabled:cursor-not-allowed';

        const variants = {
            primary: 'gradient-primary text-white hover:shadow-lg hover:shadow-primary-500/50',
            secondary: 'glass glass-hover text-dark-50',
            ghost: 'hover:bg-white/5 text-dark-300 hover:text-dark-50',
            outline: 'border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white',
        };

        const sizes = {
            sm: 'px-3 py-1.5 text-sm',
            md: 'px-4 py-2 text-base',
            lg: 'px-6 py-3 text-lg',
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: disabled ? 1 : 1.02 }}
                whileTap={{ scale: disabled ? 1 : 0.98 }}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                disabled={disabled || isLoading}
                onClick={onClick}
                type={type}
                {...rest}
            >
                {isLoading ? (
                    <motion.div
                        className="mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                ) : null}
                {children}
            </motion.button>
        );
    }
);

Button.displayName = 'Button';

export default Button;

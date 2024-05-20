import Link from 'next/link';
import clsx from 'clsx';
import { use } from 'react';

interface FormProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
}

export function FormButton({ children, className, icon, href, ...rest }: FormProps) {
  

  return (
   <button
      {...rest}
      className={clsx(
        'inline-flex items-center px-6 py-3 bg-white border border-orange-500 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out uppercase',
        className,
      )}
    >
      {icon}
      {children}
    </button>
  );
}

interface RoundedButtonProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({ href, children, icon }) => {
  return (
    <Link href={href}>
      <div className="inline-flex items-center px-6 py-3 bg-white border border-orange-500 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out uppercase">
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </div>
    </Link>
  );
};

export default RoundedButton;


export function ChatBotButton({ icon, onClick, children }: FormProps) {
  
  return (
   <button
      onClick={onClick}
      className={clsx(
        'inline-flex items-center px-6 py-3 bg-orange-500 border border-orange-500 rounded text-white hover:bg-white hover:text-orange-500 transition duration-300 ease-in-out uppercase',
      )}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}


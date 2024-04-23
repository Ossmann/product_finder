import Link from 'next/link';

interface RoundedButtonProps {
  href: string;
  children: React.ReactNode;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({ href, children }) => {
  return (
    <Link href={href}>
      <div className="inline-block px-6 py-3 border border-orange-500 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out">
        {children}
      </div>
    </Link>
  );
};

export default RoundedButton;

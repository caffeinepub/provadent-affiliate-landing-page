import { Button } from '@/components/ui/button';
import { AFFILIATE_URL, CTA_LABEL } from '@/constants/affiliate';

interface BuyNowButtonProps {
  variant?: 'default' | 'secondary' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
}

export default function BuyNowButton({ 
  variant = 'default', 
  size = 'lg',
  className = '' 
}: BuyNowButtonProps) {
  const handleClick = () => {
    window.location.href = AFFILIATE_URL;
  };

  return (
    <Button 
      onClick={handleClick}
      variant={variant}
      size={size}
      className={`bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-orange-500/50 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 ${className}`}
    >
      {CTA_LABEL}
    </Button>
  );
}

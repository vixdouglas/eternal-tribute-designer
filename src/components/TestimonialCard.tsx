import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const TestimonialCard = ({ name, role, content, rating }: TestimonialCardProps) => {
  return (
    <Card className="h-full hover-lift bg-background/95 backdrop-blur-sm">
      <CardContent className="p-3 sm:p-4 md:p-6 space-y-2 sm:space-y-3 md:space-y-4">
        <div className="flex gap-0.5 sm:gap-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-xs sm:text-sm md:text-base text-muted-foreground italic leading-relaxed">{content}</p>
        <div className="pt-2 sm:pt-3 md:pt-4 border-t border-border">
          <p className="font-semibold text-xs sm:text-sm md:text-base text-foreground">{name}</p>
          <p className="text-xs sm:text-xs md:text-sm text-muted-foreground">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;

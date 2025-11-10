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
    <Card className="h-full hover-lift">
      <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
        <div className="flex gap-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-sm md:text-base text-muted-foreground italic leading-relaxed">{content}</p>
        <div className="pt-3 md:pt-4 border-t border-border">
          <p className="font-semibold text-sm md:text-base text-foreground">{name}</p>
          <p className="text-xs md:text-sm text-muted-foreground">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;

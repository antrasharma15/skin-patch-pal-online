
import React from "react";
import { cn } from "@/lib/utils";

interface InfoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  icon,
  className,
}) => {
  return (
    <div className={cn(
      "relative overflow-hidden rounded-lg border bg-background p-6",
      className
    )}>
      <div className="flex flex-col gap-4">
        <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h3 className="font-bold text-xl">{title}</h3>
          <p className="text-muted-foreground mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

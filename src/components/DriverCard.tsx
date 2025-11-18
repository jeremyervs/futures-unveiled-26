interface DriverCardProps {
  title: string;
  description: string;
  evidence: string[];
  isNegative?: boolean;
}

export const DriverCard = ({ title, description, evidence, isNegative = false }: DriverCardProps) => {
  return (
    <div
      className={`card-elevated group cursor-pointer transition-all duration-300 ${
        isNegative ? "hover:border-accent-risk" : "hover:border-accent-good"
      }`}
    >
      <h3 className="text-xl font-semibold mb-3 text-foreground">
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed mb-4">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {evidence.map((item, idx) => (
          <span
            key={idx}
            className="inline-block px-2 py-1 rounded-md bg-muted text-xs text-muted-foreground border border-border"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

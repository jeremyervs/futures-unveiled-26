interface DriverCardProps {
  title: string;
  description: string;
  evidence: string[];
  isNegative?: boolean;
}

export const DriverCard = ({ title, description, evidence, isNegative = false }: DriverCardProps) => {
  return (
    <div
      className={`card-elevated group cursor-pointer transition-all duration-500 hover:-translate-y-2 ${
        isNegative 
          ? "hover:border-accent-risk hover:shadow-[0_0_40px_hsl(var(--accent-risk)/0.3)]" 
          : "hover:border-accent-good hover:shadow-[0_0_40px_hsl(var(--accent-good)/0.3)]"
      }`}
    >
      <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${
        isNegative ? "bg-accent-risk" : "bg-accent-good"
      }`} />
      
      <h3 className="text-2xl font-bold mb-4 text-foreground relative z-10 group-hover:text-accent-good-bright transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed mb-6 text-base relative z-10">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 relative z-10">
        {evidence.map((item, idx) => (
          <span
            key={idx}
            className={`inline-block px-3 py-1.5 rounded-lg text-xs font-medium border-2 backdrop-blur-sm transition-all duration-300 ${
              isNegative
                ? "bg-accent-risk/10 text-accent-risk-bright border-accent-risk/30 hover:bg-accent-risk/20"
                : "bg-accent-good/10 text-accent-good-bright border-accent-good/30 hover:bg-accent-good/20"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

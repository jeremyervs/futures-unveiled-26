import { ExternalLink } from "lucide-react";

interface SignalCardProps {
  category: string;
  title: string;
  description: string;
  source?: string;
}

export const SignalCard = ({ category, title, description, source }: SignalCardProps) => {
  return (
    <div className="card-elevated group">
      <div className="mb-3">
        <span className="inline-block px-3 py-1 rounded-full bg-accent-neutral/10 text-accent-neutral text-xs font-medium border border-accent-neutral/20">
          {category}
        </span>
      </div>
      
      <h3 className="text-lg font-semibold mb-2 text-foreground">
        {title}
      </h3>
      
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {description}
      </p>
      
      {source && (
        <a
          href={source}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-accent-good hover:text-accent-good/80 transition-colors"
        >
          <ExternalLink size={12} />
          Source
        </a>
      )}
    </div>
  );
};

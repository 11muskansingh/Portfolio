
type TextWithHighlightProps = {
  text: string;
  highlightStart?: number;
  highlightEnd?: number;
  highlightText?: string;
  className?: string;
};

const TextWithHighlight = ({
  text,
  highlightStart,
  highlightEnd,
  highlightText,
  className = "",
}: TextWithHighlightProps) => {
  if (highlightText) {
    const parts = text.split(highlightText);
    if (parts.length === 1) return <span className={className}>{text}</span>;
    
    return (
      <span className={className}>
        {parts.map((part, i) => (
          <>
            {part}
            {i < parts.length - 1 && <span className="text-primary">{highlightText}</span>}
          </>
        ))}
      </span>
    );
  }

  if (highlightStart !== undefined && highlightEnd !== undefined) {
    return (
      <span className={className}>
        {text.substring(0, highlightStart)}
        <span className="text-primary">{text.substring(highlightStart, highlightEnd)}</span>
        {text.substring(highlightEnd)}
      </span>
    );
  }

  return <span className={className}>{text}</span>;
};

export default TextWithHighlight;

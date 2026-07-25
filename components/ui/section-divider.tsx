export function SectionDivider() {
  return (
    <div className="mt-8 flex items-center justify-center gap-3" aria-hidden>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-border sm:w-24" />
      <span className="h-2 w-2 rotate-45 border border-accent/50" />
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-border sm:w-24" />
    </div>
  );
}

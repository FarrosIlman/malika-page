// Subtle, single warm-toned radial light — bukan blob berwarna-warni
export function BackgroundMesh() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
      {/* Single warm ambient light */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px]"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(200, 169, 126, 0.07) 0%, transparent 100%)",
        }}
      />
      {/* Very subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(200,169,126,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 0%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 0%, transparent 100%)",
        }}
      />
    </div>
  );
}

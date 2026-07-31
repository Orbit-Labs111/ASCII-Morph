import { useState } from "react";
import AsciiImage, { ColorMode, Fit, RevealOptions } from "./components/AsciiImage";
import { Sparkles } from "lucide-react";

const REQUESTED_IMAGE =
  "https://images.unsplash.com/photo-1620064825091-0ba9262d6ae4?q=80&w=1510&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function App() {
  const [currentImage] = useState<string>(REQUESTED_IMAGE);
  const [columns] = useState<number>(180);
  const [contrast] = useState<number>(110);
  const [invert] = useState<boolean>(false);
  const [colorMode] = useState<ColorMode>("mono");
  const [inkColor] = useState<string>("#FFFFFF");
  const [reveal] = useState<boolean>(true);
  const [revealOptions] = useState<RevealOptions>({
    size: 85,
    softness: 18,
  });
  const [fit] = useState<Fit>("cover");
  const [ramp] = useState<string>(" .:-=+*#%@");

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#1F1D1A] flex flex-col justify-between items-center p-4 sm:p-8 font-sans selection:bg-amber-200 selection:text-amber-900">
      {/* Main Container - Centered Canvas Display */}
      <main className="flex-1 w-full max-w-5xl flex flex-col items-center justify-center my-4 sm:my-8">
        <div className="relative w-full max-w-3xl aspect-[4/3] sm:aspect-[16/10] bg-[#0F0F0F] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-black/10 group">
          {/* Canvas Component */}
          <AsciiImage
            image={currentImage}
            fit={fit}
            columns={columns}
            ramp={ramp}
            invert={invert}
            contrast={contrast}
            colorMode={colorMode}
            inkColor={inkColor}
            reveal={reveal}
            revealOptions={revealOptions}
          />

          {/* Interactive Hint */}
          {reveal && (
            <div className="absolute top-4 left-4 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-md text-white text-[11px] px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/10 shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              <span>Hover cursor over ASCII to reveal photo</span>
            </div>
          )}

          {/* Image Tag / Credit Badge */}
          <div className="absolute bottom-4 right-4 pointer-events-none bg-black/60 backdrop-blur-md text-white/80 text-[10px] px-2.5 py-1 rounded-md border border-white/10 font-mono">
            {columns} cols • {colorMode.toUpperCase()}
          </div>
        </div>
      </main>

      {/* Footer minimal info */}
      <footer className="mt-4 text-[11px] text-[#A8A29E] font-mono text-center">
        ASCII Reveal Engine • High performance HTML5 Canvas rendering
      </footer>
    </div>
  );
}


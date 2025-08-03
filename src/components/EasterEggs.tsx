import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Terminal, Activity, Clock, Zap } from "lucide-react";

const EasterEggs = () => {
  const [isMatrixMode, setIsMatrixMode] = useState(false);
  const [konamiCode, setKonamiCode] = useState<string[]>([]);
  const [showDevStats, setShowDevStats] = useState(false);
  
  const expectedKonami = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
  ];

  useEffect(() => {
    // Matrix mode easter egg
    (window as any).matrix = () => {
      setIsMatrixMode(true);
      console.log("🔥 Matrix mode activated!");
      setTimeout(() => setIsMatrixMode(false), 5000);
    };

    // Dev stats easter egg
    (window as any).stats = () => {
      setShowDevStats(true);
      setTimeout(() => setShowDevStats(false), 3000);
    };

    // Konami code listener
    const handleKeyDown = (e: KeyboardEvent) => {
      const newCode = [...konamiCode, e.code].slice(-10);
      setKonamiCode(newCode);
      
      if (JSON.stringify(newCode) === JSON.stringify(expectedKonami)) {
        console.log("🎉 KONAMI CODE ACTIVATED! You found the secret!");
        setIsMatrixMode(true);
        setShowDevStats(true);
        setTimeout(() => {
          setIsMatrixMode(false);
          setShowDevStats(false);
        }, 3000);
        setKonamiCode([]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiCode]);

  return (
    <>
      {/* Matrix rain effect */}
      {isMatrixMode && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          <div className="matrix-rain">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="matrix-column absolute top-0 text-green-400 text-xs font-mono opacity-70"
                style={{
                  left: `${i * 5}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animation: 'matrixRain 3s linear infinite'
                }}
              >
                {Array.from({ length: 30 }).map((_, j) => (
                  <div key={j} className="matrix-char">
                    {String.fromCharCode(0x30A0 + Math.random() * 96)}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Dev stats overlay */}
      {showDevStats && (
        <div className="fixed top-20 right-6 z-50 bg-card/95 backdrop-blur-sm border border-border rounded-lg p-4 shadow-glow animate-fade-in">
          <div className="flex items-center gap-2 mb-3">
            <Terminal className="w-5 h-5 text-primary" />
            <h3 className="font-bold text-foreground">Dev Stats</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-green-400" />
              <span>Lines of Code: 2,847</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-400" />
              <span>Hours Coded: 156h</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>Coffee Consumed: ∞</span>
            </div>
            <Badge variant="outline" className="mt-2">
              Achievement Unlocked: Secret Finder! 🏆
            </Badge>
          </div>
        </div>
      )}

      <style>{`
        @keyframes matrixRain {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
        .matrix-char {
          display: block;
          height: 20px;
        }
      `}</style>
    </>
  );
};

export default EasterEggs;
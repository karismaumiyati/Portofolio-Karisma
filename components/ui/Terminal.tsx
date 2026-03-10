import React, { useState, useEffect, useRef } from 'react';

interface TerminalProps {
  projectTitle: string;
  onRun?: () => string;
  defaultOutput?: string;
  isInteractive?: boolean;
}

export const Terminal: React.FC<TerminalProps> = ({ projectTitle, onRun, defaultOutput = "", isInteractive = false }) => {
  const [output, setOutput] = useState<string[]>(defaultOutput ? [defaultOutput] : []);
  const [isGameActive, setIsGameActive] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [gameStep, setGameStep] = useState(0); // For number guessing state
  const [targetNumber, setTargetNumber] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of terminal content ONLY, preventing page scroll
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [output]);

  const handleRun = () => {
    setOutput([]); // Clear previous
    if (!isInteractive && onRun) {
        setOutput(['> python3 main.py', 'Running...', onRun()]);
        return;
    }

    if (isInteractive) {
        if (projectTitle.includes("Number")) {
            startNumberGame();
        } else if (projectTitle.includes("Password")) {
            startPasswordChecker();
        }
    }
  };

  const startNumberGame = () => {
      setIsGameActive(true);
      setTargetNumber(Math.floor(Math.random() * 10) + 1);
      setGameStep(1);
      setOutput(['> python3 guess_number.py', 'Welcome to Number Guessing Game!', 'I am thinking of a number between 1 and 10.', 'Enter your guess:']);
  };

  const startPasswordChecker = () => {
      setIsGameActive(true);
      setGameStep(1);
      setOutput(['> python3 password_check.py', '--- STRONG PASSWORD CHECKER ---', 'Enter a password to check strength:']);
  }

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userIn = inputValue.trim();
    const newOutput = [...output, `> ${userIn}`];
    setInputValue('');

    if (projectTitle.includes("Number")) {
        const guess = parseInt(userIn);
        if (isNaN(guess)) {
            newOutput.push("Please enter a valid number.");
        } else if (guess === targetNumber) {
            newOutput.push(`CORRECT! The number was ${targetNumber}.`, "Game Over. Restarting...");
            setIsGameActive(false);
        } else if (guess < targetNumber) {
            newOutput.push("Too low! Try again:");
        } else {
            newOutput.push("Too high! Try again:");
        }
    } else {
        // Password Logic
        let strength = 0;
        if (userIn.length >= 8) strength++;
        if (/[A-Z]/.test(userIn)) strength++;
        if (/[0-9]/.test(userIn)) strength++;
        if (/[^A-Za-z0-9]/.test(userIn)) strength++;

        const msgs = ["Weak 🔴", "Moderate 🟡", "Strong 🟢", "Very Strong 🚀"];
        const idx = Math.max(0, Math.min(3, strength - 1));
        
        newOutput.push(`Analyzing...`);
        newOutput.push(`Strength: ${msgs[idx]}`);
        newOutput.push(`Enter another password or click Run to restart.`);
    }

    setOutput(newOutput);
  };

  return (
    <div className="bg-[#1e1e1e] border border-[#3e3e42] rounded-md font-mono text-sm shadow-lg overflow-hidden flex flex-col h-64 w-full max-w-2xl mx-auto my-4">
      <div className="bg-[#252526] px-4 py-1 flex justify-between items-center text-xs text-gray-400 border-b border-[#3e3e42] shrink-0">
        <span>TERMINAL - {projectTitle}</span>
        <div className="flex space-x-2">
            <button onClick={() => setOutput([])} className="hover:text-white">Clear</button>
            <button onClick={handleRun} className="text-green-500 hover:text-green-400">Run ▶</button>
        </div>
      </div>
      <div 
        ref={containerRef}
        className="flex-1 p-4 overflow-y-auto text-gray-300 space-y-1 scroll-smooth"
      >
        {output.map((line, i) => (
            <div key={i} className={`${line.startsWith('>') ? 'text-gray-400' : 'text-vscode-text'}`}>{line}</div>
        ))}
        {isGameActive && (
            <form onSubmit={handleInputSubmit} className="flex">
                <span className="text-green-500 mr-2">$</span>
                <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="bg-transparent outline-none text-white w-full"
                    autoFocus
                />
            </form>
        )}
      </div>
    </div>
  );
};
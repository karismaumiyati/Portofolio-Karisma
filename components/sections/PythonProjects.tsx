import React, { useState } from 'react';
import { Terminal } from '../ui/Terminal';
import { Lock, Hash, Github } from 'lucide-react';

export const PythonProjects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<'password' | 'number'>('password');
  const [mode, setMode] = useState<'run' | 'code'>('run');

  return (
    <section id="python" className="h-screen min-h-[600px] flex items-center justify-center px-6 bg-[#1e1e1e] border-t border-[#3e3e42] snap-start">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-yellow-400 mb-8 flex items-center font-mono">
            <span className="text-white mr-2">def</span> mini_projects():
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
            {/* Project Selector */}
            <div className="w-full md:w-1/3 space-y-4">
                <div 
                    onClick={() => setActiveProject('password')}
                    className={`p-4 rounded border cursor-pointer transition-colors ${activeProject === 'password' ? 'bg-[#37373d] border-vscode-accent' : 'bg-[#252526] border-[#3e3e42] hover:border-gray-500'}`}
                >
                    <div className="flex items-center text-vscode-text mb-2">
                        <Lock size={18} className="mr-2 text-green-400" />
                        <h3 className="font-bold">Password Checker</h3>
                    </div>
                    <p className="text-xs text-gray-400">Evaluates password strength based on complexity rules.</p>
                </div>

                <div 
                    onClick={() => setActiveProject('number')}
                    className={`p-4 rounded border cursor-pointer transition-colors ${activeProject === 'number' ? 'bg-[#37373d] border-vscode-accent' : 'bg-[#252526] border-[#3e3e42] hover:border-gray-500'}`}
                >
                    <div className="flex items-center text-vscode-text mb-2">
                        <Hash size={18} className="mr-2 text-blue-400" />
                        <h3 className="font-bold">Number Guessing</h3>
                    </div>
                    <p className="text-xs text-gray-400">Interactive CLI game. Binary search logic demo.</p>
                </div>
            </div>

            {/* Display Area */}
            <div className="w-full md:w-2/3">
                <div className="flex space-x-2 mb-2">
                    <button 
                        onClick={() => setMode('run')} 
                        className={`px-3 py-1 text-xs rounded ${mode === 'run' ? 'bg-vscode-accent text-white' : 'bg-[#2d2d2d] text-gray-400'}`}
                    >
                        Terminal (Run)
                    </button>
                    <button 
                        onClick={() => setMode('code')} 
                        className={`px-3 py-1 text-xs rounded ${mode === 'code' ? 'bg-vscode-accent text-white' : 'bg-[#2d2d2d] text-gray-400'}`}
                    >
                        View Code
                    </button>
                    <a href="#" className="ml-auto px-3 py-1 text-xs bg-[#2d2d2d] text-gray-400 rounded flex items-center hover:text-white">
                        <Github size={12} className="mr-1" /> View on Git
                    </a>
                </div>

                {mode === 'run' ? (
                    <Terminal 
                        projectTitle={activeProject === 'password' ? 'Password Checker' : 'Number Guessing Game'} 
                        isInteractive={true}
                    />
                ) : (
                    <div className="bg-[#1e1e1e] border border-[#3e3e42] p-4 rounded h-64 overflow-y-auto font-mono text-xs text-gray-300 shadow-inner">
                        <pre>
{activeProject === 'password' ? `# Python Password Checker
import re

def check_password(password):
    score = 0
    if len(password) > 8: score += 1
    if re.search("[a-z]", password): score += 1
    if re.search("[A-Z]", password): score += 1
    if re.search("[0-9]", password): score += 1
    
    return "Strong" if score == 4 else "Weak"
` : `# Python Number Guessing
import random

def play_game():
    target = random.randint(1, 10)
    while True:
        guess = int(input("Guess: "))
        if guess == target:
            print("Win!")
            break
        elif guess < target:
            print("Higher")
        else:
            print("Lower")
`}
                        </pre>
                    </div>
                )}
            </div>
        </div>
      </div>
    </section>
  );
};
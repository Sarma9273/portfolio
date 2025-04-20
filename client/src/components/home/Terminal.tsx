import { useEffect, useRef, useState } from "react";

interface TerminalProps {
  title: string;
  commands: {
    command: string;
    output: string;
  }[];
}

const Terminal = ({ title, commands }: TerminalProps) => {
  const [visibleCommands, setVisibleCommands] = useState<number>(0);
  const [currentOutput, setCurrentOutput] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Function to animate terminal typing one command at a time
    const animateTerminal = () => {
      if (visibleCommands < commands.length) {
        const timer = setTimeout(() => {
          setVisibleCommands((prev) => prev + 1);
          // Add the command output to the visible outputs
          setCurrentOutput((prev) => [
            ...prev,
            commands[visibleCommands].output,
          ]);
          
          // Scroll to bottom
          if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
          }
        }, 500); // Delay between commands
        
        return () => clearTimeout(timer);
      }
    };
    
    animateTerminal();
  }, [commands, visibleCommands]);

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <div className="terminal-header flex items-center justify-between p-3 border-b border-border bg-gradient-to-r from-muted to-muted/70">
        <div className="terminal-dots flex">
          <span className="h-3 w-3 bg-red-500 rounded-full mr-1.5"></span>
          <span className="h-3 w-3 bg-yellow-500 rounded-full mr-1.5"></span>
          <span className="h-3 w-3 bg-green-500 rounded-full"></span>
        </div>
        <div className="text-sm text-muted-foreground font-mono">{title}</div>
        <div className="w-4"></div>
      </div>
      
      <div 
        ref={terminalRef}
        className="p-5 bg-muted font-mono text-sm scrollbar-thin overflow-y-auto max-h-96"
      >
        {commands.slice(0, visibleCommands).map((cmd, index) => (
          <div key={index}>
            <div className="mb-3">
              <span className="text-primary">john@cybersec</span>
              <span className="text-blue-500">:~$</span>
              <span className="text-foreground"> {cmd.command}</span>
            </div>
            
            {/* We only show output if it exists and has been processed */}
            {currentOutput[index] && (
              <div 
                className="mb-3 text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: currentOutput[index] }}
              ></div>
            )}
          </div>
        ))}
        
        {/* Blinking cursor at the end */}
        {visibleCommands === commands.length && (
          <div className="mt-3">
            <span className="text-primary">john@cybersec</span>
            <span className="text-blue-500">:~$</span>
            <span className="text-foreground ml-1 w-2 h-5 bg-primary animate-blink inline-block"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;

import { Minus, Square, X } from 'lucide-react';
import { ReactNode } from 'react';

interface WindowsXPWindowProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function WindowsXPWindow({ title, icon, children, className = "" }: WindowsXPWindowProps) {
  return (
    <div className={`bg-white border border-gray-400 shadow-lg rounded-t-lg overflow-hidden ${className}`}>
      {/* Title Bar */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-2 py-1 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {icon && <div className="w-4 h-4">{icon}</div>}
          <span className="text-sm font-medium">{title}</span>
        </div>
        <div className="flex space-x-1">
          <button className="w-4 h-4 bg-gray-300 hover:bg-gray-400 flex items-center justify-center text-xs border border-gray-400">
            <Minus className="w-2 h-2 text-gray-700" />
          </button>
          <button className="w-4 h-4 bg-gray-300 hover:bg-gray-400 flex items-center justify-center text-xs border border-gray-400">
            <Square className="w-2 h-2 text-gray-700" />
          </button>
          <button className="w-4 h-4 bg-red-500 hover:bg-red-600 flex items-center justify-center text-xs border border-gray-400">
            <X className="w-2 h-2 text-white" />
          </button>
        </div>
      </div>
      
      {/* Window Content */}
      <div className="bg-gray-100 text-black">
        {children}
      </div>
    </div>
  );
}
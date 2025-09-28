// Íconos estilo Windows XP
export function PaintIcon() {
  return (
    <div className="w-6 h-6 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-600 rounded-sm border border-gray-400"></div>
      <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full"></div>
      <div className="absolute bottom-1 right-1 w-2 h-1 bg-yellow-300 rounded-sm"></div>
    </div>
  );
}

export function NotepadIcon() {
  return (
    <div className="w-6 h-6 relative">
      <div className="absolute inset-0 bg-white border border-gray-400 rounded-sm"></div>
      <div className="absolute top-1 left-1 right-1 h-0.5 bg-blue-300"></div>
      <div className="absolute top-2 left-1 right-1 h-0.5 bg-gray-300"></div>
      <div className="absolute top-3 left-1 right-1 h-0.5 bg-gray-300"></div>
      <div className="absolute top-4 left-1 w-3 h-0.5 bg-gray-300"></div>
    </div>
  );
}

export function CalculatorIcon() {
  return (
    <div className="w-6 h-6 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-500 rounded-sm border border-gray-600"></div>
      <div className="absolute top-1 left-1 right-1 h-1.5 bg-black rounded-sm"></div>
      <div className="absolute bottom-1 left-1 grid grid-cols-3 gap-0.5 w-4 h-3">
        <div className="bg-gray-200 rounded-sm"></div>
        <div className="bg-gray-200 rounded-sm"></div>
        <div className="bg-gray-200 rounded-sm"></div>
        <div className="bg-gray-200 rounded-sm"></div>
        <div className="bg-gray-200 rounded-sm"></div>
        <div className="bg-gray-200 rounded-sm"></div>
      </div>
    </div>
  );
}

export function MediaPlayerIcon() {
  return (
    <div className="w-6 h-6 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-sm border border-gray-400"></div>
      <div className="absolute inset-1 bg-black rounded-sm"></div>
      <div className="absolute top-2 left-2 w-0 h-0 border-l-2 border-l-white border-t-1 border-t-transparent border-b-1 border-b-transparent"></div>
    </div>
  );
}

export function SolitaireIcon() {
  return (
    <div className="w-6 h-6 relative">
      <div className="absolute inset-0 bg-green-600 rounded-sm border border-gray-400"></div>
      <div className="absolute top-1 left-1 w-3 h-4 bg-red-500 rounded-sm border border-white transform rotate-3"></div>
      <div className="absolute top-1.5 left-2 w-3 h-4 bg-black rounded-sm border border-white"></div>
    </div>
  );
}

export function MinesweeperIcon() {
  return (
    <div className="w-6 h-6 relative">
      <div className="absolute inset-0 bg-gray-300 rounded-sm border border-gray-600"></div>
      <div className="absolute inset-1 grid grid-cols-3 gap-0.5">
        <div className="bg-gray-200 border border-gray-400"></div>
        <div className="bg-red-500 border border-gray-400 flex items-center justify-center">
          <div className="w-1 h-1 bg-black rounded-full"></div>
        </div>
        <div className="bg-gray-200 border border-gray-400"></div>
        <div className="bg-gray-200 border border-gray-400"></div>
        <div className="bg-gray-200 border border-gray-400"></div>
        <div className="bg-gray-200 border border-gray-400"></div>
      </div>
    </div>
  );
}

export function ExplorerIcon() {
  return (
    <div className="w-6 h-6 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-sm border border-gray-400"></div>
      <div className="absolute top-1 left-1 w-2 h-3 bg-blue-500 rounded-sm"></div>
      <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-sm border border-gray-400"></div>
      <div className="absolute bottom-1 left-1 right-1 h-1 bg-gray-200 rounded-sm"></div>
    </div>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { History } from 'lucide-react';

interface MoveHistoryProps {
  moves: string[];
}

export const MoveHistory = ({ moves }: MoveHistoryProps) => {
  const movePairs = [];
  for (let i = 0; i < moves.length; i += 2) {
    movePairs.push({
      moveNumber: Math.floor(i / 2) + 1,
      white: moves[i],
      black: moves[i + 1] || ''
    });
  }

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-white">
          <History className="w-5 h-5" />
          Move History
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-4 pt-0">
        <ScrollArea className="h-[200px]">
          {movePairs.length === 0 ? (
            <p className="text-gray-400 text-center py-4">No moves yet</p>
          ) : (
            <div className="space-y-1">
              {movePairs.map((pair, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-2 rounded hover:bg-gray-700 transition-colors"
                >
                  <span className="text-gray-400 w-6 text-sm">
                    {pair.moveNumber}.
                  </span>
                  <span className="text-white font-mono text-sm flex-1">
                    {pair.white}
                  </span>
                  {pair.black && (
                    <span className="text-gray-300 font-mono text-sm flex-1">
                      {pair.black}
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};


import { Chess } from 'chess.js';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Target, TrendingUp } from 'lucide-react';

interface LearningModalProps {
  isOpen: boolean;
  onClose: () => void;
  gameState: Chess;
  lastMove?: string;
}

export const LearningModal = ({ isOpen, onClose, gameState, lastMove }: LearningModalProps) => {
  const generateAnalysis = () => {
    if (!lastMove) return null;

    // Simplified analysis - in real implementation, use actual chess engine
    const possibleMoves = gameState.moves();
    const isCheck = gameState.isCheck();
    
    return {
      moveQuality: Math.random() > 0.5 ? 'Good' : 'Excellent',
      explanation: `Your move ${lastMove} ${isCheck ? 'puts the opponent in check' : 'develops your position well'}. This move helps control key squares and improves your piece coordination.`,
      alternatives: possibleMoves.slice(0, 3),
      tips: [
        'Always look for checks, captures, and threats',
        'Develop pieces toward the center',
        'Ensure king safety before launching attacks'
      ]
    };
  };

  const analysis = generateAnalysis();

  if (!analysis) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-800 border-gray-700 text-white max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-yellow-400" />
            Move Analysis: {lastMove}
          </DialogTitle>
          <DialogDescription className="text-gray-300">
            Learn from your move and discover better alternatives
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Move Quality */}
          <Card className="bg-gray-700 border-gray-600">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Move Quality
                </h3>
                <Badge className={analysis.moveQuality === 'Excellent' ? 'bg-green-600' : 'bg-blue-600'}>
                  {analysis.moveQuality}
                </Badge>
              </div>
              <p className="text-gray-300">{analysis.explanation}</p>
            </CardContent>
          </Card>

          {/* Alternative Moves */}
          <Card className="bg-gray-700 border-gray-600">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Alternative Moves to Consider
              </h3>
              <div className="flex flex-wrap gap-2">
                {analysis.alternatives.map((move, index) => (
                  <Badge key={index} variant="outline" className="text-gray-300 border-gray-500">
                    {move}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Learning Tips */}
          <Card className="bg-gray-700 border-gray-600">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3">💡 Learning Tips</h3>
              <ul className="space-y-2">
                {analysis.tips.map((tip, index) => (
                  <li key={index} className="text-gray-300 flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="flex gap-3">
            <Button onClick={onClose} className="flex-1">
              Continue Playing
            </Button>
            <Button variant="outline" className="flex-1">
              Practice Similar Positions
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

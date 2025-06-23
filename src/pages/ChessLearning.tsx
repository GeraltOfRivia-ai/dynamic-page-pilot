
import { useState, useEffect } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import { ChessAI } from '@/components/chess/ChessAI';
import { MoveHistory } from '@/components/chess/MoveHistory';
import { TutorialSidebar } from '@/components/chess/TutorialSidebar';
import { LearningModal } from '@/components/chess/LearningModal';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Brain, Play, Pause, RotateCcw } from 'lucide-react';
import { toast } from 'sonner';

export const ChessLearning = () => {
  const [game, setGame] = useState(new Chess());
  const [gamePosition, setGamePosition] = useState(game.fen());
  const [moveHistory, setMoveHistory] = useState<string[]>([]);
  const [isLearningMode, setIsLearningMode] = useState(false);
  const [showLearningModal, setShowLearningModal] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [isAIThinking, setIsAIThinking] = useState(false);
  const [gameStatus, setGameStatus] = useState('');

  useEffect(() => {
    updateGameStatus();
  }, [gamePosition]);

  const updateGameStatus = () => {
    if (game.isCheckmate()) {
      setGameStatus(game.turn() === 'w' ? 'Black wins by checkmate!' : 'White wins by checkmate!');
    } else if (game.isDraw()) {
      setGameStatus('Game is a draw!');
    } else if (game.isCheck()) {
      setGameStatus(game.turn() === 'w' ? 'White is in check!' : 'Black is in check!');
    } else {
      setGameStatus('');
    }
  };

  const makeMove = (sourceSquare: string, targetSquare: string) => {
    try {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q'
      });

      if (move) {
        setGamePosition(game.fen());
        setMoveHistory(prev => [...prev, move.san]);
        
        if (isLearningMode) {
          setShowLearningModal(true);
        } else {
          // AI makes a move after player
          setTimeout(() => makeAIMove(), 1000);
        }
        
        toast.success(`Move: ${move.san}`);
        return true;
      }
    } catch (error) {
      toast.error('Invalid move!');
      return false;
    }
    return false;
  };

  const makeAIMove = async () => {
    if (game.isGameOver()) return;
    
    setIsAIThinking(true);
    try {
      // Simulate AI thinking time
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const possibleMoves = game.moves();
      if (possibleMoves.length > 0) {
        const randomIndex = Math.floor(Math.random() * possibleMoves.length);
        const aiMove = game.move(possibleMoves[randomIndex]);
        
        setGamePosition(game.fen());
        setMoveHistory(prev => [...prev, aiMove.san]);
        toast.info(`AI plays: ${aiMove.san}`);
      }
    } catch (error) {
      toast.error('AI move failed');
    } finally {
      setIsAIThinking(false);
    }
  };

  const resetGame = () => {
    const newGame = new Chess();
    setGame(newGame);
    setGamePosition(newGame.fen());
    setMoveHistory([]);
    setGameStatus('');
    toast.success('Game reset!');
  };

  const onDrop = (sourceSquare: string, targetSquare: string) => {
    return makeMove(sourceSquare, targetSquare);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Chess Learning AI
          </h1>
          <p className="text-gray-300 text-lg">
            Play against AI and learn from every move
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Tutorial Sidebar */}
          <div className={`lg:col-span-1 ${showTutorial ? 'block' : 'hidden lg:block'}`}>
            <TutorialSidebar />
          </div>

          {/* Main Game Area */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-800 border-gray-700 p-6">
              {/* Game Controls */}
              <div className="flex flex-wrap gap-4 mb-6 justify-center">
                <Button
                  onClick={() => setIsLearningMode(!isLearningMode)}
                  variant={isLearningMode ? "default" : "outline"}
                  className="flex items-center gap-2"
                >
                  <Brain className="w-4 h-4" />
                  {isLearningMode ? 'Exit Learn Mode' : 'Learn Mode'}
                </Button>
                
                <Button
                  onClick={() => setShowTutorial(!showTutorial)}
                  variant="outline"
                  className="lg:hidden"
                >
                  Tutorials
                </Button>
                
                <Button onClick={resetGame} variant="outline">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>

              {/* Game Status */}
              {gameStatus && (
                <div className="text-center mb-4 p-3 bg-yellow-600 rounded-lg">
                  {gameStatus}
                </div>
              )}

              {/* AI Thinking Indicator */}
              {isAIThinking && (
                <div className="text-center mb-4 p-3 bg-blue-600 rounded-lg">
                  AI is thinking...
                </div>
              )}

              {/* Chessboard */}
              <div className="mb-6 flex justify-center">
                <div className="w-full max-w-[500px]">
                  <Chessboard
                    position={gamePosition}
                    onPieceDrop={onDrop}
                    boardOrientation="white"
                    customBoardStyle={{
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    }}
                    customDarkSquareStyle={{ backgroundColor: '#374151' }}
                    customLightSquareStyle={{ backgroundColor: '#9ca3af' }}
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* AI Chat & Move History */}
          <div className="lg:col-span-1 space-y-6">
            <ChessAI gameState={game} currentPosition={gamePosition} />
            <MoveHistory moves={moveHistory} />
          </div>
        </div>

        {/* Learning Modal */}
        <LearningModal
          isOpen={showLearningModal}
          onClose={() => setShowLearningModal(false)}
          gameState={game}
          lastMove={moveHistory[moveHistory.length - 1]}
        />
      </div>
    </div>
  );
};

export default ChessLearning;

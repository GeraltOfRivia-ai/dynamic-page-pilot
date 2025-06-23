
import { useState } from 'react';
import { Chess } from 'chess.js';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, Send, Lightbulb } from 'lucide-react';
import { toast } from 'sonner';

interface Message {
  role: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

interface ChessAIProps {
  gameState: Chess;
  currentPosition: string;
}

export const ChessAI = ({ gameState, currentPosition }: ChessAIProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'ai',
      content: 'Hello! I\'m your chess AI tutor. Ask me about moves, strategies, or request analysis of the current position.',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      role: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Simulate AI response (replace with actual Gemini API call)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const aiResponse = generateAIResponse(inputMessage, gameState);
      
      const aiMessage: Message = {
        role: 'ai',
        content: aiResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      toast.error('Failed to get AI response');
    } finally {
      setIsLoading(false);
    }
  };

  const generateAIResponse = (query: string, game: Chess): string => {
    // Simplified AI response generation (replace with actual Gemini API)
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('analyze') || lowerQuery.includes('position')) {
      const moves = game.moves();
      return `Current position analysis: You have ${moves.length} legal moves available. ${
        game.isCheck() ? 'You are in check! ' : ''
      }Key pieces to focus on: Look for tactical opportunities and piece safety.`;
    }
    
    if (lowerQuery.includes('strategy') || lowerQuery.includes('plan')) {
      return `Strategic advice: Control the center, develop your pieces, ensure king safety, and look for tactical opportunities. In the current position, focus on piece coordination.`;
    }
    
    if (lowerQuery.includes('best move') || lowerQuery.includes('recommend')) {
      const moves = game.moves();
      const randomMove = moves[Math.floor(Math.random() * moves.length)];
      return `I recommend considering ${randomMove}. This move helps with piece development and maintains a solid position.`;
    }
    
    return `I understand you're asking about "${query}". In chess, every move should have a purpose - whether it's controlling key squares, improving piece positions, or creating threats. What specific aspect would you like me to explain?`;
  };

  const analyzePosition = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const analysis = `Position Analysis:
      
• Material: ${gameState.turn() === 'w' ? 'White' : 'Black'} to move
• King Safety: ${gameState.isCheck() ? 'In check' : 'Secure'}
• Piece Activity: Look for active piece placement
• Tactical Motifs: Check for pins, forks, and skewers
      
Best candidate moves: ${gameState.moves().slice(0, 3).join(', ')}`;

      const aiMessage: Message = {
        role: 'ai',
        content: analysis,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-gray-800 border-gray-700 h-[500px] flex flex-col">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-white">
          <MessageCircle className="w-5 h-5" />
          Chess AI Tutor
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col p-4 pt-0">
        <ScrollArea className="flex-1 mb-4 pr-4">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg max-w-[85%] ${
                  message.role === 'user'
                    ? 'bg-blue-600 ml-auto'
                    : 'bg-gray-700 mr-auto'
                }`}
              >
                <p className="text-sm text-white whitespace-pre-line">
                  {message.content}
                </p>
                <span className="text-xs text-gray-300 block mt-1">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
            ))}
            {isLoading && (
              <div className="bg-gray-700 p-3 rounded-lg max-w-[85%] mr-auto">
                <p className="text-sm text-white">AI is thinking...</p>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="space-y-2">
          <Button
            onClick={analyzePosition}
            variant="outline"
            className="w-full"
            disabled={isLoading}
          >
            <Lightbulb className="w-4 h-4 mr-2" />
            Analyze Position
          </Button>
          
          <div className="flex gap-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask the AI for help..."
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              className="bg-gray-700 border-gray-600 text-white"
              disabled={isLoading}
            />
            <Button
              onClick={sendMessage}
              disabled={isLoading || !inputMessage.trim()}
              size="icon"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

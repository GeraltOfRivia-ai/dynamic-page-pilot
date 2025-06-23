
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Crown, Shield, Sword } from 'lucide-react';

const tutorials = [
  {
    category: 'Basics',
    icon: BookOpen,
    lessons: [
      { title: 'How Pieces Move', difficulty: 'Beginner' },
      { title: 'Castling & En Passant', difficulty: 'Beginner' },
      { title: 'Check & Checkmate', difficulty: 'Beginner' }
    ]
  },
  {
    category: 'Strategy',
    icon: Crown,
    lessons: [
      { title: 'Opening Principles', difficulty: 'Intermediate' },
      { title: 'Pawn Structure', difficulty: 'Intermediate' },
      { title: 'Piece Coordination', difficulty: 'Advanced' }
    ]
  },
  {
    category: 'Tactics',
    icon: Sword,
    lessons: [
      { title: 'Pins & Skewers', difficulty: 'Intermediate' },
      { title: 'Forks & Discoveries', difficulty: 'Intermediate' },
      { title: 'Sacrifices', difficulty: 'Advanced' }
    ]
  },
  {
    category: 'Endgames',
    icon: Shield,
    lessons: [
      { title: 'King & Pawn vs King', difficulty: 'Intermediate' },
      { title: 'Rook Endgames', difficulty: 'Advanced' },
      { title: 'Queen Endgames', difficulty: 'Advanced' }
    ]
  }
];

export const TutorialSidebar = () => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-600';
      case 'Intermediate': return 'bg-yellow-600';
      case 'Advanced': return 'bg-red-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <Card className="bg-gray-800 border-gray-700 h-fit">
      <CardHeader className="pb-3">
        <CardTitle className="text-white">Chess Tutorials</CardTitle>
      </CardHeader>
      
      <CardContent className="p-4 pt-0">
        <ScrollArea className="h-[500px] pr-4">
          <div className="space-y-6">
            {tutorials.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-3">
                  <category.icon className="w-5 h-5" />
                  {category.category}
                </h3>
                
                <div className="space-y-2">
                  {category.lessons.map((lesson, lessonIndex) => (
                    <Button
                      key={lessonIndex}
                      variant="ghost"
                      className="w-full justify-start p-3 h-auto hover:bg-gray-700"
                    >
                      <div className="flex flex-col items-start gap-1 w-full">
                        <span className="text-white text-sm">
                          {lesson.title}
                        </span>
                        <Badge 
                          className={`${getDifficultyColor(lesson.difficulty)} text-xs`}
                        >
                          {lesson.difficulty}
                        </Badge>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

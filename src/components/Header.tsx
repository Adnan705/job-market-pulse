
import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Header() {
  return (
    <header className="h-14 sm:h-16 border-b bg-white/80 backdrop-blur-sm flex items-center justify-between px-3 sm:px-6">
      <div className="flex items-center gap-2 sm:gap-4 flex-1">
        <div className="relative max-w-full sm:max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
          <Input 
            placeholder="Search jobs in Pakistan..." 
            className="pl-10 w-full sm:w-80 text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <div className="hidden sm:flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-slate-600">Live Data</span>
          <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
            Real-time
          </Badge>
        </div>
        
        <Button variant="ghost" size="sm" className="relative">
          <Bell className="w-4 sm:w-5 h-4 sm:h-5" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
        </Button>
        
        <Button variant="ghost" size="sm">
          <User className="w-4 sm:w-5 h-4 sm:h-5" />
        </Button>
      </div>
    </header>
  );
}

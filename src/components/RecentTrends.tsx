
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const trendsData = [
  {
    skill: 'E-commerce Development',
    change: 45,
    status: 'rising',
    timeframe: '7 days',
    jobs: 567
  },
  {
    skill: 'Digital Marketing',
    change: 32,
    status: 'rising',
    timeframe: '14 days',
    jobs: 892
  },
  {
    skill: 'Mobile App Development',
    change: 28,
    status: 'rising',
    timeframe: '7 days',
    jobs: 423
  },
  {
    skill: 'Data Entry',
    change: -8,
    status: 'falling',
    timeframe: '30 days',
    jobs: 234
  },
  {
    skill: 'Content Writing',
    change: 0,
    status: 'stable',
    timeframe: '14 days',
    jobs: 345
  },
];

export function RecentTrends() {
  const getIcon = (status: string) => {
    switch (status) {
      case 'rising':
        return <TrendingUp className="w-4 h-4" />;
      case 'falling':
        return <TrendingDown className="w-4 h-4" />;
      default:
        return <Minus className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'rising':
        return 'bg-green-100 text-green-700';
      case 'falling':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base sm:text-lg">Pakistan Market Trends</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4">
        {trendsData.map((trend, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg border bg-slate-50/50">
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base truncate">{trend.skill}</h4>
              <p className="text-xs sm:text-sm text-slate-500">{trend.jobs} active jobs</p>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-3 ml-2">
              <Badge className={`${getStatusColor(trend.status)} text-xs px-2 py-1`}>
                {getIcon(trend.status)}
                {trend.change !== 0 && (
                  <span className="ml-1">
                    {trend.change > 0 ? '+' : ''}{trend.change}%
                  </span>
                )}
                {trend.change === 0 && <span className="ml-1">Stable</span>}
              </Badge>
              <span className="text-xs text-slate-400 hidden sm:inline">{trend.timeframe}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

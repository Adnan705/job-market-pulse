
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const trendsData = [
  {
    skill: 'Artificial Intelligence',
    change: 67,
    status: 'rising',
    timeframe: '7 days',
    jobs: 1234
  },
  {
    skill: 'Remote Work',
    change: 23,
    status: 'rising',
    timeframe: '14 days',
    jobs: 8945
  },
  {
    skill: 'Blockchain',
    change: -12,
    status: 'falling',
    timeframe: '30 days',
    jobs: 567
  },
  {
    skill: 'Cloud Computing',
    change: 45,
    status: 'rising',
    timeframe: '7 days',
    jobs: 2890
  },
  {
    skill: 'Cybersecurity',
    change: 0,
    status: 'stable',
    timeframe: '14 days',
    jobs: 1678
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
        <CardTitle>Recent Trends</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {trendsData.map((trend, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg border bg-slate-50/50">
            <div className="flex-1">
              <h4 className="font-medium text-slate-900">{trend.skill}</h4>
              <p className="text-sm text-slate-500">{trend.jobs} active jobs</p>
            </div>
            
            <div className="flex items-center gap-3">
              <Badge className={getStatusColor(trend.status)}>
                {getIcon(trend.status)}
                {trend.change !== 0 && (
                  <span className="ml-1">
                    {trend.change > 0 ? '+' : ''}{trend.change}%
                  </span>
                )}
                {trend.change === 0 && <span className="ml-1">Stable</span>}
              </Badge>
              <span className="text-xs text-slate-400">{trend.timeframe}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

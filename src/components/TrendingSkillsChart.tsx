
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const skillsData = [
  { skill: 'Python', demand: 2847, growth: 23 },
  { skill: 'React', demand: 2156, growth: 18 },
  { skill: 'AWS', demand: 1943, growth: 31 },
  { skill: 'TypeScript', demand: 1678, growth: 41 },
  { skill: 'Node.js', demand: 1534, growth: 15 },
  { skill: 'Docker', demand: 1423, growth: 28 },
  { skill: 'Kubernetes', demand: 1298, growth: 35 },
  { skill: 'GraphQL', demand: 1156, growth: 52 },
];

export function TrendingSkillsChart() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Most In-Demand Skills
          <span className="text-sm font-normal text-slate-500">(Last 30 days)</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={skillsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis 
              dataKey="skill" 
              tick={{ fontSize: 12 }}
              stroke="#64748b"
            />
            <YAxis 
              tick={{ fontSize: 12 }}
              stroke="#64748b"
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
              }}
              formatter={(value, name) => [
                name === 'demand' ? `${value} jobs` : `+${value}%`,
                name === 'demand' ? 'Job Postings' : 'Growth Rate'
              ]}
            />
            <Bar 
              dataKey="demand" 
              fill="url(#skillGradient)" 
              radius={[4, 4, 0, 0]}
            />
            <defs>
              <linearGradient id="skillGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

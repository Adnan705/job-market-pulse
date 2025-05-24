
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const skillsData = [
  { skill: 'PHP', demand: 1247, growth: 28 },
  { skill: 'JavaScript', demand: 1156, growth: 22 },
  { skill: 'Python', demand: 987, growth: 35 },
  { skill: 'Laravel', demand: 845, growth: 18 },
  { skill: 'React', demand: 734, growth: 42 },
  { skill: 'WordPress', demand: 692, growth: 12 },
  { skill: 'MySQL', demand: 634, growth: 15 },
  { skill: 'Node.js', demand: 567, growth: 38 },
];

export function TrendingSkillsChart() {
  return (
    <Card className="col-span-1 xl:col-span-2">
      <CardHeader>
        <CardTitle className="flex flex-col sm:flex-row sm:items-center gap-2">
          <span>Most In-Demand Skills in Pakistan</span>
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
              angle={-45}
              textAnchor="end"
              height={80}
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
                <stop offset="0%" stopColor="#16a34a" />
                <stop offset="100%" stopColor="#15803d" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

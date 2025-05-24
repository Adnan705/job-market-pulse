
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const categoriesData = [
  { name: 'Software Engineering', value: 35, jobs: 12580 },
  { name: 'Data Science', value: 18, jobs: 6470 },
  { name: 'Product Management', value: 12, jobs: 4320 },
  { name: 'DevOps', value: 15, jobs: 5390 },
  { name: 'UI/UX Design', value: 8, jobs: 2880 },
  { name: 'Marketing', value: 7, jobs: 2520 },
  { name: 'Sales', value: 5, jobs: 1800 },
];

const COLORS = [
  '#3b82f6', '#06b6d4', '#10b981', '#f59e0b', 
  '#ef4444', '#8b5cf6', '#ec4899'
];

export function JobCategoriesChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Job Categories Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={categoriesData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={120}
              paddingAngle={2}
              dataKey="value"
            >
              {categoriesData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value, name, props) => [
                `${value}% (${props.payload.jobs} jobs)`,
                'Market Share'
              ]}
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
              }}
            />
            <Legend 
              verticalAlign="bottom" 
              height={36}
              iconType="circle"
              wrapperStyle={{ fontSize: '12px' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

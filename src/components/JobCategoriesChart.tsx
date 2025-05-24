
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const categoriesData = [
  { name: 'IT Services', value: 28, jobs: 3584 },
  { name: 'Banking & Finance', value: 18, jobs: 2312 },
  { name: 'Telecommunications', value: 12, jobs: 1542 },
  { name: 'Education', value: 11, jobs: 1413 },
  { name: 'Healthcare', value: 8, jobs: 1028 },
  { name: 'Manufacturing', value: 10, jobs: 1285 },
  { name: 'Marketing & Sales', value: 8, jobs: 1028 },
  { name: 'Others', value: 5, jobs: 643 },
];

const COLORS = [
  '#16a34a', '#059669', '#0d9488', '#0891b2', 
  '#0284c7', '#2563eb', '#7c3aed', '#9333ea'
];

export function JobCategoriesChart() {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle className="text-base sm:text-lg">Pakistan Job Categories</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={categoriesData}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={100}
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
              wrapperStyle={{ fontSize: '11px' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

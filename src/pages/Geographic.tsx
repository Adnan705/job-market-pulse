
import React from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, TrendingUp, Building2, Users2 } from 'lucide-react';

const Geographic = () => {
  const cityData = [
    { name: 'Karachi', jobs: 4230, growth: 18, percentage: 33, avgSalary: '92,000' },
    { name: 'Lahore', jobs: 3145, growth: 22, percentage: 24, avgSalary: '88,000' },
    { name: 'Islamabad', jobs: 2890, growth: 25, percentage: 22, avgSalary: '105,000' },
    { name: 'Rawalpindi', jobs: 1235, growth: 15, percentage: 10, avgSalary: '78,000' },
    { name: 'Faisalabad', jobs: 687, growth: 12, percentage: 5, avgSalary: '72,000' },
    { name: 'Multan', jobs: 523, growth: 8, percentage: 4, avgSalary: '68,000' },
    { name: 'Peshawar', jobs: 290, growth: 14, percentage: 2, avgSalary: '65,000' }
  ];

  const remoteData = {
    total: 2847,
    growth: 45,
    percentage: 23,
    topCategories: ['IT Services', 'Digital Marketing', 'Content Writing', 'Customer Support']
  };

  return (
    <DashboardLayout>
      <div className="space-y-4 sm:space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Geographic Job Distribution</h1>
          <p className="text-slate-600 mt-1 text-sm sm:text-base">Job opportunities across Pakistan's major cities</p>
        </div>

        {/* Remote Work Overview */}
        <Card className="bg-gradient-to-r from-purple-50 to-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-purple-600" />
              Remote Work Opportunities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-900">{remoteData.total}</p>
                <p className="text-sm text-purple-700">Remote Jobs</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <p className="text-2xl font-bold text-green-900">+{remoteData.growth}%</p>
                </div>
                <p className="text-sm text-green-700">Growth Rate</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-900">{remoteData.percentage}%</p>
                <p className="text-sm text-blue-700">of All Jobs</p>
              </div>
            </div>
            <div className="mt-4">
              <h5 className="font-medium text-slate-900 mb-2">Top Remote Categories</h5>
              <div className="flex flex-wrap gap-2">
                {remoteData.topCategories.map((category) => (
                  <Badge key={category} className="bg-purple-100 text-purple-700">
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* City Rankings */}
        <Card>
          <CardHeader>
            <CardTitle>Top Cities by Job Opportunities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {cityData.map((city, index) => (
                <div key={city.name} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-slate-50">
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-lg font-bold text-slate-400 w-6">#{index + 1}</span>
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900">{city.name}</h3>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-sm text-slate-600">{city.jobs} jobs</span>
                        <span className="text-sm text-slate-600">{city.percentage}% of market</span>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-3 h-3 text-green-600" />
                          <span className="text-sm text-green-600">+{city.growth}%</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-slate-900">PKR {city.avgSalary}</p>
                      <p className="text-xs text-slate-600">Avg. Salary</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* City Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {cityData.slice(0, 3).map((city) => (
            <Card key={city.name}>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  {city.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <p className="text-xl font-bold text-blue-900">{city.jobs}</p>
                      <p className="text-xs text-blue-700">Active Jobs</p>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <p className="text-xl font-bold text-green-900">+{city.growth}%</p>
                      <p className="text-xs text-green-700">Growth</p>
                    </div>
                  </div>
                  
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <p className="text-lg font-bold text-purple-900">PKR {city.avgSalary}</p>
                    <p className="text-xs text-purple-700">Average Salary</p>
                  </div>

                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <p className="text-lg font-bold text-orange-900">{city.percentage}%</p>
                    <p className="text-xs text-orange-700">Market Share</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Provincial Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>Provincial Job Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 border rounded-lg text-center">
                <h4 className="font-medium text-slate-900 mb-2">Sindh</h4>
                <p className="text-2xl font-bold text-blue-900">4,652</p>
                <p className="text-sm text-slate-600">35% of total jobs</p>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <h4 className="font-medium text-slate-900 mb-2">Punjab</h4>
                <p className="text-2xl font-bold text-green-900">7,890</p>
                <p className="text-sm text-slate-600">60% of total jobs</p>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <h4 className="font-medium text-slate-900 mb-2">KPK</h4>
                <p className="text-2xl font-bold text-purple-900">445</p>
                <p className="text-sm text-slate-600">3% of total jobs</p>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <h4 className="font-medium text-slate-900 mb-2">Balochistan</h4>
                <p className="text-2xl font-bold text-orange-900">160</p>
                <p className="text-sm text-slate-600">2% of total jobs</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Geographic;

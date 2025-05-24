
import React from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Building, TrendingUp, DollarSign, Users, Globe, Briefcase } from 'lucide-react';

const Industry = () => {
  const industries = [
    {
      name: 'Information Technology',
      jobs: 4235,
      growth: 28,
      avgSalary: '98,000',
      marketShare: 32,
      topRoles: ['Software Developer', 'Web Developer', 'System Administrator'],
      companies: 523
    },
    {
      name: 'Banking & Financial Services',
      jobs: 2890,
      growth: 15,
      avgSalary: '92,000',
      marketShare: 22,
      topRoles: ['Financial Analyst', 'Credit Officer', 'Branch Manager'],
      companies: 89
    },
    {
      name: 'Telecommunications',
      jobs: 1645,
      growth: 18,
      avgSalary: '85,000',
      marketShare: 12,
      topRoles: ['Network Engineer', 'Sales Executive', 'Technical Support'],
      companies: 45
    },
    {
      name: 'Healthcare & Pharmaceuticals',
      jobs: 1289,
      growth: 22,
      avgSalary: '78,000',
      marketShare: 10,
      topRoles: ['Medical Officer', 'Pharmacist', 'Nurse'],
      companies: 234
    },
    {
      name: 'Education & Training',
      jobs: 1156,
      growth: 8,
      avgSalary: '62,000',
      marketShare: 9,
      topRoles: ['Teacher', 'Academic Coordinator', 'Training Specialist'],
      companies: 312
    },
    {
      name: 'Manufacturing',
      jobs: 987,
      growth: 12,
      avgSalary: '75,000',
      marketShare: 7,
      topRoles: ['Production Manager', 'Quality Control', 'Machine Operator'],
      companies: 145
    },
    {
      name: 'Retail & E-commerce',
      jobs: 723,
      growth: 35,
      avgSalary: '58,000',
      marketShare: 5,
      topRoles: ['Sales Manager', 'Digital Marketing', 'Customer Service'],
      companies: 189
    },
    {
      name: 'Construction & Real Estate',
      jobs: 456,
      growth: 5,
      avgSalary: '68,000',
      marketShare: 3,
      topRoles: ['Civil Engineer', 'Project Manager', 'Site Supervisor'],
      companies: 67
    }
  ];

  const emergingIndustries = [
    { name: 'Fintech', growth: 85, description: 'Digital payment solutions and banking tech' },
    { name: 'EdTech', growth: 67, description: 'Online learning and educational platforms' },
    { name: 'HealthTech', growth: 54, description: 'Digital health and telemedicine' },
    { name: 'AgriTech', growth: 42, description: 'Smart farming and agricultural innovation' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-4 sm:space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Industry Analysis</h1>
          <p className="text-slate-600 mt-1 text-sm sm:text-base">Comprehensive breakdown of job market by industry sectors</p>
        </div>

        {/* Emerging Industries Spotlight */}
        <Card className="bg-gradient-to-r from-green-50 to-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              Emerging Industries
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {emergingIndustries.map((industry) => (
                <div key={industry.name} className="p-4 bg-white rounded-lg border">
                  <h4 className="font-semibold text-slate-900 mb-1">{industry.name}</h4>
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-lg font-bold text-green-900">+{industry.growth}%</span>
                  </div>
                  <p className="text-xs text-slate-600">{industry.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Industry Rankings */}
        <Card>
          <CardHeader>
            <CardTitle>Industry Rankings by Job Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {industries.map((industry, index) => (
                <div key={industry.name} className="p-4 border rounded-lg hover:bg-slate-50">
                  <div className="flex items-start gap-4">
                    <span className="text-lg font-bold text-slate-400 w-6 mt-1">#{index + 1}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-slate-900">{industry.name}</h3>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4 text-green-600" />
                          <span className="text-sm font-medium text-green-600">+{industry.growth}%</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-3">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-blue-600" />
                          <span className="text-sm"><strong>{industry.jobs}</strong> jobs</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          <span className="text-sm">PKR <strong>{industry.avgSalary}</strong></span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4 text-purple-600" />
                          <span className="text-sm"><strong>{industry.companies}</strong> companies</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-orange-600" />
                          <span className="text-sm"><strong>{industry.marketShare}%</strong> market share</span>
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="flex justify-between text-xs text-slate-600 mb-1">
                          <span>Market Share</span>
                          <span>{industry.marketShare}%</span>
                        </div>
                        <Progress value={industry.marketShare} className="h-2" />
                      </div>

                      <div>
                        <h5 className="text-sm font-medium text-slate-700 mb-2">Top Roles:</h5>
                        <div className="flex flex-wrap gap-2">
                          {industry.topRoles.map((role) => (
                            <Badge key={role} variant="outline" className="text-xs">
                              {role}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Industry Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Highest Paying Industries</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {industries
                  .sort((a, b) => parseInt(b.avgSalary.replace(',', '')) - parseInt(a.avgSalary.replace(',', '')))
                  .slice(0, 5)
                  .map((industry, index) => (
                    <div key={industry.name} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-green-600">#{index + 1}</span>
                        <span className="font-medium text-green-900">{industry.name}</span>
                      </div>
                      <span className="font-bold text-green-900">PKR {industry.avgSalary}</span>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Fastest Growing Industries</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {industries
                  .sort((a, b) => b.growth - a.growth)
                  .slice(0, 5)
                  .map((industry, index) => (
                    <div key={industry.name} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-blue-600">#{index + 1}</span>
                        <span className="font-medium text-blue-900">{industry.name}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4 text-blue-600" />
                        <span className="font-bold text-blue-900">+{industry.growth}%</span>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Industry;

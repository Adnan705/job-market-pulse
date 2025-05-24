
import React from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, TrendingUp, Users, MapPin, Briefcase, Star } from 'lucide-react';

const Companies = () => {
  const topCompanies = [
    {
      name: 'Systems Limited',
      industry: 'IT Services',
      activeJobs: 145,
      location: 'Lahore',
      size: '1000+',
      rating: 4.2,
      growth: 25,
      topRoles: ['Software Engineer', 'Project Manager', 'Business Analyst']
    },
    {
      name: 'TRG Pakistan',
      industry: 'IT Services',
      activeJobs: 98,
      location: 'Karachi',
      size: '500-1000',
      rating: 4.1,
      growth: 22,
      topRoles: ['Customer Service', 'Technical Support', 'Team Lead']
    },
    {
      name: 'Netsol Technologies',
      industry: 'Software Development',
      activeJobs: 87,
      location: 'Lahore',
      size: '1000+',
      rating: 4.3,
      growth: 18,
      topRoles: ['Software Developer', 'QA Engineer', 'DevOps Engineer']
    },
    {
      name: 'Habib Bank Limited (HBL)',
      industry: 'Banking',
      activeJobs: 156,
      location: 'Karachi',
      size: '5000+',
      rating: 4.0,
      growth: 15,
      topRoles: ['Relationship Manager', 'Credit Analyst', 'Branch Manager']
    },
    {
      name: 'Jazz (Mobilink)',
      industry: 'Telecommunications',
      activeJobs: 73,
      location: 'Islamabad',
      size: '1000+',
      rating: 4.2,
      growth: 20,
      topRoles: ['Network Engineer', 'Sales Executive', 'Product Manager']
    },
    {
      name: 'United Bank Limited (UBL)',
      industry: 'Banking',
      activeJobs: 134,
      location: 'Karachi',
      size: '5000+',
      rating: 3.9,
      growth: 12,
      topRoles: ['Banking Officer', 'Operations Manager', 'IT Support']
    },
    {
      name: 'Telenor Pakistan',
      industry: 'Telecommunications',
      activeJobs: 65,
      location: 'Islamabad',
      size: '1000+',
      rating: 4.1,
      growth: 16,
      topRoles: ['RF Engineer', 'Customer Experience', 'Digital Marketing']
    },
    {
      name: 'Packages Limited',
      industry: 'Manufacturing',
      activeJobs: 89,
      location: 'Lahore',
      size: '1000+',
      rating: 4.0,
      growth: 10,
      topRoles: ['Production Manager', 'Quality Control', 'Supply Chain']
    }
  ];

  const hiringTrends = [
    { category: 'Tech Startups', companies: 234, growth: 67 },
    { category: 'Multinational Corps', companies: 89, growth: 15 },
    { category: 'Local Enterprises', companies: 445, growth: 23 },
    { category: 'Government Sector', companies: 156, growth: 8 },
  ];

  const remoteFirst = [
    { name: 'Tez Financial Services', jobs: 23, remote: 100 },
    { name: 'Careem Pakistan', jobs: 45, remote: 80 },
    { name: 'Foodpanda Pakistan', jobs: 67, remote: 75 },
    { name: 'Daraz Pakistan', jobs: 89, remote: 60 },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-4 sm:space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Companies Hiring</h1>
          <p className="text-slate-600 mt-1 text-sm sm:text-base">Top employers and hiring trends across Pakistan</p>
        </div>

        {/* Hiring Trends Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {hiringTrends.map((trend) => (
            <Card key={trend.category}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-slate-600">{trend.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-slate-900">{trend.companies}</span>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-600">+{trend.growth}%</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-1">Active companies</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Top Companies */}
        <Card>
          <CardHeader>
            <CardTitle>Top Companies by Job Openings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topCompanies.map((company, index) => (
                <div key={company.name} className="p-4 border rounded-lg hover:bg-slate-50">
                  <div className="flex items-start gap-4">
                    <span className="text-lg font-bold text-slate-400 w-6 mt-1">#{index + 1}</span>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-slate-900 text-lg">{company.name}</h3>
                          <div className="flex items-center gap-4 text-sm text-slate-600 mt-1">
                            <span className="flex items-center gap-1">
                              <Building className="w-4 h-4" />
                              {company.industry}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {company.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {company.size} employees
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{company.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <TrendingUp className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-medium text-green-600">+{company.growth}%</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-blue-600" />
                          <span className="font-medium text-blue-900">{company.activeJobs} active jobs</span>
                        </div>
                      </div>

                      <div>
                        <h5 className="text-sm font-medium text-slate-700 mb-2">Popular Roles:</h5>
                        <div className="flex flex-wrap gap-2">
                          {company.topRoles.map((role) => (
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

        {/* Remote-First Companies */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="w-5 h-5 text-purple-600" />
              Remote-First Companies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {remoteFirst.map((company) => (
                <div key={company.name} className="p-4 border rounded-lg bg-purple-50">
                  <h4 className="font-semibold text-slate-900 mb-2">{company.name}</h4>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">{company.jobs} open positions</span>
                    <Badge className="bg-purple-600">{company.remote}% remote</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Company Size Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Companies by Size</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium text-blue-900">Startups (1-50)</span>
                  <span className="font-bold text-blue-900">234 companies</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="font-medium text-green-900">Medium (51-500)</span>
                  <span className="font-bold text-green-900">156 companies</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="font-medium text-purple-900">Large (501-1000)</span>
                  <span className="font-bold text-purple-900">89 companies</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <span className="font-medium text-orange-900">Enterprise (1000+)</span>
                  <span className="font-bold text-orange-900">67 companies</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Industries Hiring</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <span className="font-medium text-slate-900">IT Services</span>
                  <span className="font-bold text-slate-900">89 companies</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <span className="font-medium text-slate-900">Banking & Finance</span>
                  <span className="font-bold text-slate-900">67 companies</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <span className="font-medium text-slate-900">Telecommunications</span>
                  <span className="font-bold text-slate-900">45 companies</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <span className="font-medium text-slate-900">Healthcare</span>
                  <span className="font-bold text-slate-900">34 companies</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Companies;

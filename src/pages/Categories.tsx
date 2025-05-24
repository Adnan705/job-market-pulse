
import React from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { JobCategoriesChart } from '@/components/JobCategoriesChart';
import { Badge } from '@/components/ui/badge';
import { Briefcase, TrendingUp, Building, Users } from 'lucide-react';

const Categories = () => {
  const categoryDetails = [
    {
      name: 'IT Services',
      jobs: 3584,
      growth: 22,
      avgSalary: '95,000',
      topCompanies: ['Systems Ltd', 'TRG Pakistan', 'Netsol Technologies'],
      topSkills: ['PHP', 'Laravel', 'React', 'Node.js']
    },
    {
      name: 'Banking & Finance',
      jobs: 2312,
      growth: 15,
      avgSalary: '88,000',
      topCompanies: ['HBL', 'UBL', 'MCB Bank'],
      topSkills: ['Financial Analysis', 'Risk Management', 'Excel', 'SQL']
    },
    {
      name: 'Telecommunications',
      jobs: 1542,
      growth: 18,
      avgSalary: '92,000',
      topCompanies: ['Jazz', 'Telenor', 'Zong'],
      topSkills: ['Network Engineering', 'RF Planning', 'Project Management']
    },
    {
      name: 'Education',
      jobs: 1413,
      growth: 8,
      avgSalary: '65,000',
      topCompanies: ['LUMS', 'IBA Karachi', 'Beaconhouse'],
      topSkills: ['Teaching', 'Curriculum Development', 'Assessment']
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-4 sm:space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Job Categories Analysis</h1>
          <p className="text-slate-600 mt-1 text-sm sm:text-base">Detailed breakdown of job categories in Pakistan</p>
        </div>

        {/* Overview Chart */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
          <JobCategoriesChart />
          
          <Card>
            <CardHeader>
              <CardTitle>Category Growth Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {categoryDetails.map((category) => (
                  <div key={category.name} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Briefcase className="w-5 h-5 text-blue-600" />
                      <div>
                        <h4 className="font-medium text-slate-900">{category.name}</h4>
                        <p className="text-sm text-slate-600">{category.jobs} openings</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-green-600">+{category.growth}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Category Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {categoryDetails.map((category) => (
            <Card key={category.name}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                  <Badge className="bg-green-100 text-green-700">+{category.growth}%</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Briefcase className="w-4 h-4 text-blue-600" />
                    </div>
                    <p className="text-xl font-bold text-blue-900">{category.jobs}</p>
                    <p className="text-xs text-blue-700">Active Jobs</p>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <span className="text-green-600 font-bold">PKR</span>
                    </div>
                    <p className="text-xl font-bold text-green-900">{category.avgSalary}</p>
                    <p className="text-xs text-green-700">Avg. Salary</p>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium text-slate-900 mb-2 flex items-center gap-2">
                    <Building className="w-4 h-4" />
                    Top Hiring Companies
                  </h5>
                  <div className="space-y-1">
                    {category.topCompanies.map((company) => (
                      <div key={company} className="text-sm text-slate-600 bg-slate-50 px-2 py-1 rounded">
                        {company}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-medium text-slate-900 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Required Skills
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {category.topSkills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Categories;

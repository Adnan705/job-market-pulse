
import React from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { MetricCard } from '@/components/MetricCard';
import { TrendingSkillsChart } from '@/components/TrendingSkillsChart';
import { JobCategoriesChart } from '@/components/JobCategoriesChart';
import { RecentTrends } from '@/components/RecentTrends';
import { 
  Briefcase, 
  Users, 
  TrendingUp, 
  MapPin,
  Building,
  Clock,
  DollarSign,
  Globe
} from 'lucide-react';

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Pakistan Job Market Overview</h1>
            <p className="text-slate-600 mt-1 text-sm sm:text-base">Real-time insights from Rozee, BrightSpree, Mustakbil & PakJobs</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Clock className="w-4 h-4" />
            <span className="hidden sm:inline">Last updated:</span>
            <span>5 minutes ago</span>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <MetricCard
            title="Active Job Postings"
            value="12,847"
            change={15}
            changeLabel="vs last week"
            icon={<Briefcase className="w-5 h-5 text-blue-600" />}
            trend="up"
          />
          <MetricCard
            title="Companies Hiring"
            value="1,523"
            change={12}
            changeLabel="vs last week"
            icon={<Building className="w-5 h-5 text-blue-600" />}
            trend="up"
          />
          <MetricCard
            title="Avg. Salary (PKR)"
            value="85,000"
            change={8}
            changeLabel="vs last month"
            icon={<DollarSign className="w-5 h-5 text-blue-600" />}
            trend="up"
          />
          <MetricCard
            title="Remote Jobs"
            value="23%"
            change={18}
            changeLabel="vs last month"
            icon={<Globe className="w-5 h-5 text-blue-600" />}
            trend="up"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
          <TrendingSkillsChart />
          <JobCategoriesChart />
        </div>

        {/* Recent Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <RecentTrends />
          
          {/* Pakistan-specific Quick Stats */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Pakistan Market Insights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border bg-gradient-to-r from-green-50 to-green-100">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 sm:w-5 h-4 sm:h-5 text-green-600" />
                  <span className="text-sm font-medium text-green-900">Growth Rate</span>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-green-900 mt-1">+22.3%</p>
                <p className="text-xs text-green-700">This quarter</p>
              </div>
              
              <div className="p-4 rounded-lg border bg-gradient-to-r from-blue-50 to-blue-100">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-900">Top City</span>
                </div>
                <p className="text-lg font-bold text-blue-900 mt-1">Karachi</p>
                <p className="text-xs text-blue-700">4,230 openings</p>
              </div>
              
              <div className="p-4 rounded-lg border bg-gradient-to-r from-purple-50 to-purple-100">
                <div className="flex items-center gap-2">
                  <Users className="w-4 sm:w-5 h-4 sm:h-5 text-purple-600" />
                  <span className="text-sm font-medium text-purple-900">Top Skill</span>
                </div>
                <p className="text-lg font-bold text-purple-900 mt-1">PHP</p>
                <p className="text-xs text-purple-700">1,247 mentions</p>
              </div>
              
              <div className="p-4 rounded-lg border bg-gradient-to-r from-orange-50 to-orange-100">
                <div className="flex items-center gap-2">
                  <Building className="w-4 sm:w-5 h-4 sm:h-5 text-orange-600" />
                  <span className="text-sm font-medium text-orange-900">Top Sector</span>
                </div>
                <p className="text-lg font-bold text-orange-900 mt-1">IT Services</p>
                <p className="text-xs text-orange-700">28% of all jobs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Data Sources Footer */}
        <div className="mt-8 p-4 bg-slate-50 rounded-lg">
          <h4 className="text-sm font-medium text-slate-700 mb-2">Data Sources (No API Required)</h4>
          <div className="flex flex-wrap gap-2 text-xs text-slate-600">
            <span className="bg-white px-2 py-1 rounded">Rozee.pk</span>
            <span className="bg-white px-2 py-1 rounded">BrightSpree.com</span>
            <span className="bg-white px-2 py-1 rounded">Mustakbil.com</span>
            <span className="bg-white px-2 py-1 rounded">PakJobs.pk</span>
            <span className="bg-white px-2 py-1 rounded">JobsAlert.pk</span>
            <span className="bg-white px-2 py-1 rounded">Glassdoor Pakistan</span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;

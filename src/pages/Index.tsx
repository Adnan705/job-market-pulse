
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
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Job Market Overview</h1>
            <p className="text-slate-600 mt-1">Real-time insights into job market trends and opportunities</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Clock className="w-4 h-4" />
            Last updated: 2 minutes ago
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Active Job Postings"
            value="45,678"
            change={12}
            changeLabel="vs last week"
            icon={<Briefcase className="w-5 h-5 text-blue-600" />}
            trend="up"
          />
          <MetricCard
            title="Companies Hiring"
            value="3,247"
            change={8}
            changeLabel="vs last week"
            icon={<Building className="w-5 h-5 text-blue-600" />}
            trend="up"
          />
          <MetricCard
            title="Avg. Salary"
            value="$87,450"
            change={5}
            changeLabel="vs last month"
            icon={<DollarSign className="w-5 h-5 text-blue-600" />}
            trend="up"
          />
          <MetricCard
            title="Remote Jobs"
            value="67%"
            change={-3}
            changeLabel="vs last month"
            icon={<Globe className="w-5 h-5 text-blue-600" />}
            trend="down"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <TrendingSkillsChart />
          <JobCategoriesChart />
        </div>

        {/* Recent Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentTrends />
          
          {/* Quick Stats */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border bg-gradient-to-r from-blue-50 to-blue-100">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-900">Growth Rate</span>
                </div>
                <p className="text-2xl font-bold text-blue-900 mt-1">+18.5%</p>
                <p className="text-xs text-blue-700">This quarter</p>
              </div>
              
              <div className="p-4 rounded-lg border bg-gradient-to-r from-green-50 to-green-100">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-green-900">Hot Location</span>
                </div>
                <p className="text-lg font-bold text-green-900 mt-1">San Francisco</p>
                <p className="text-xs text-green-700">12,450 openings</p>
              </div>
              
              <div className="p-4 rounded-lg border bg-gradient-to-r from-purple-50 to-purple-100">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium text-purple-900">Top Skill</span>
                </div>
                <p className="text-lg font-bold text-purple-900 mt-1">Python</p>
                <p className="text-xs text-purple-700">2,847 mentions</p>
              </div>
              
              <div className="p-4 rounded-lg border bg-gradient-to-r from-orange-50 to-orange-100">
                <div className="flex items-center gap-2">
                  <Building className="w-5 h-5 text-orange-600" />
                  <span className="text-sm font-medium text-orange-900">Top Industry</span>
                </div>
                <p className="text-lg font-bold text-orange-900 mt-1">Technology</p>
                <p className="text-xs text-orange-700">35% of all jobs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;

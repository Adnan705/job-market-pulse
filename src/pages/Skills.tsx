
import React from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, TrendingDown, Code, Database, Globe, Smartphone } from 'lucide-react';

const Skills = () => {
  const trendingSkills = [
    { name: 'PHP', demand: 92, growth: 15, category: 'Backend', icon: Code },
    { name: 'Laravel', demand: 85, growth: 22, category: 'Framework', icon: Code },
    { name: 'React.js', demand: 78, growth: 18, category: 'Frontend', icon: Globe },
    { name: 'Node.js', demand: 72, growth: 25, category: 'Backend', icon: Database },
    { name: 'MySQL', demand: 88, growth: 8, category: 'Database', icon: Database },
    { name: 'WordPress', demand: 65, growth: 12, category: 'CMS', icon: Globe },
    { name: 'Angular', demand: 58, growth: -5, category: 'Frontend', icon: Globe },
    { name: 'Python', demand: 55, growth: 30, category: 'Programming', icon: Code },
    { name: 'Flutter', demand: 45, growth: 35, category: 'Mobile', icon: Smartphone },
    { name: 'Vue.js', demand: 42, growth: 20, category: 'Frontend', icon: Globe },
  ];

  const skillCategories = [
    { name: 'Programming Languages', count: 1247, growth: 15 },
    { name: 'Web Frameworks', count: 892, growth: 22 },
    { name: 'Databases', count: 743, growth: 8 },
    { name: 'Mobile Development', count: 456, growth: 35 },
    { name: 'DevOps & Cloud', count: 334, growth: 28 },
    { name: 'Data Science', count: 189, growth: 42 },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-4 sm:space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Trending Skills in Pakistan</h1>
          <p className="text-slate-600 mt-1 text-sm sm:text-base">In-demand skills and technologies across Pakistani job market</p>
        </div>

        {/* Skill Categories Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category) => (
            <Card key={category.name}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-slate-600">{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-slate-900">{category.count}</span>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-600">+{category.growth}%</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-1">Job mentions this month</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Top Trending Skills */}
        <Card>
          <CardHeader>
            <CardTitle>Top 10 Trending Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trendingSkills.map((skill, index) => (
                <div key={skill.name} className="flex items-center gap-4 p-3 rounded-lg border hover:bg-slate-50">
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-lg font-bold text-slate-400 w-6">#{index + 1}</span>
                    <skill.icon className="w-5 h-5 text-blue-600" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-slate-900">{skill.name}</h3>
                        <Badge variant="secondary" className="text-xs">{skill.category}</Badge>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <div className="flex justify-between text-xs text-slate-600 mb-1">
                            <span>Market Demand</span>
                            <span>{skill.demand}%</span>
                          </div>
                          <Progress value={skill.demand} className="h-2" />
                        </div>
                        <div className="flex items-center gap-1">
                          {skill.growth > 0 ? (
                            <TrendingUp className="w-4 h-4 text-green-600" />
                          ) : (
                            <TrendingDown className="w-4 h-4 text-red-600" />
                          )}
                          <span className={`text-sm font-medium ${skill.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {skill.growth > 0 ? '+' : ''}{skill.growth}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skills Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Emerging Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="font-medium text-green-900">Artificial Intelligence</span>
                  <Badge className="bg-green-600">+127% growth</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium text-blue-900">Machine Learning</span>
                  <Badge className="bg-blue-600">+89% growth</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="font-medium text-purple-900">Blockchain</span>
                  <Badge className="bg-purple-600">+67% growth</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <span className="font-medium text-orange-900">DevOps</span>
                  <Badge className="bg-orange-600">+45% growth</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Skill Requirements by Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-slate-900 mb-2">Entry Level (0-2 years)</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">HTML/CSS</Badge>
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">PHP</Badge>
                    <Badge variant="outline">MySQL</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-2">Mid Level (2-5 years)</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Laravel</Badge>
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">MongoDB</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-2">Senior Level (5+ years)</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">System Design</Badge>
                    <Badge variant="outline">AWS</Badge>
                    <Badge variant="outline">Microservices</Badge>
                    <Badge variant="outline">Team Leadership</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Skills;

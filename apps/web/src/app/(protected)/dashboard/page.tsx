'use client';
import React, { useState } from 'react';
import { 
  Home, 
  Wrench, 
  Save, 
  Target, 
  BarChart3, 
  Settings, 
  User, 
  Bell, 
  Menu,
  X,
  Copy,
  RefreshCw,
  Eye,
  Crown,
  Zap,
  TrendingUp,
  ArrowRight,
  Package,
  Mail,
  FileText,
  Image,
  MessageSquare,
  Sparkles,
  Gift,
  Plus,
  ExternalLink
} from 'lucide-react';

// shadcn/ui components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  // Sample data
  const user = {
    name: "Alex Johnson",
    email: "alex@example.com",
    credits: 24,
    maxCredits: 50,
    plan: "Free",
    avatar: "/api/placeholder/32/32"
  };

  const recentResults = [
    {
      id: 1,
      tool: "Product Listing",
      icon: "🛍️",
      content: "Luxury scented candles with premium soy wax blend, hand-poured for optimal fragrance throw...",
      timestamp: "3 mins ago",
      type: "product"
    },
    {
      id: 2,
      tool: "Cold Email",
      icon: "✉️",
      content: "Hey John, I noticed your store could benefit from automated email sequences...",
      timestamp: "2 hours ago",
      type: "email"
    },
    {
      id: 3,
      tool: "Blog Post",
      icon: "📝",
      content: "10 Essential Tips for E-commerce Success in 2024: Master the Art of Online Selling...",
      timestamp: "1 day ago",
      type: "content"
    }
  ];

  const quickTools = [
    { 
      name: "Product Listing", 
      icon: Package, 
      description: "Generate compelling product descriptions",
      color: "bg-blue-500 hover:bg-blue-600", 
      href: "/tools/product-listing",
      category: "E-commerce"
    },
    { 
      name: "Sales Email", 
      icon: Mail, 
      description: "Create persuasive sales emails",
      color: "bg-green-500 hover:bg-green-600", 
      href: "/tools/sales-email",
      category: "Marketing"
    },
    { 
      name: "Blog Writer", 
      icon: FileText, 
      description: "Write engaging blog posts",
      color: "bg-purple-500 hover:bg-purple-600", 
      href: "/tools/blog-writer",
      category: "Content"
    },
    { 
      name: "Ad Copy", 
      icon: Sparkles, 
      description: "Generate high-converting ad copy",
      color: "bg-orange-500 hover:bg-orange-600", 
      href: "/tools/ad-copy",
      category: "Advertising"
    },
    { 
      name: "Image Generator", 
      icon: Image, 
      description: "Create stunning AI images",
      color: "bg-pink-500 hover:bg-pink-600", 
      href: "/tools/image-gen",
      category: "Creative"
    },
    { 
      name: "Chat Assistant", 
      icon: MessageSquare, 
      description: "AI-powered conversations",
      color: "bg-indigo-500 hover:bg-indigo-600", 
      href: "/tools/chat",
      category: "Assistant"
    }
  ];

  const promptPacks = [
    {
      name: "Boost Etsy Sales",
      description: "5 curated prompts for Etsy optimization",
      icon: "🧠",
      price: "$9.99",
      originalPrice: "$19.99",
      popular: true,
      features: ["Product descriptions", "SEO optimization", "Listing titles"]
    },
    {
      name: "Amazon Ads Bundle",
      description: "4 ad variants + image prompts",
      icon: "📦",
      price: "$12.99",
      originalPrice: "$24.99",
      popular: false,
      features: ["PPC campaigns", "Image creation", "A/B testing"]
    },
    {
      name: "Content Creator Kit",
      description: "Social media + blog content prompts",
      icon: "🎨",
      price: "$7.99",
      originalPrice: "$15.99",
      popular: false,
      features: ["Social posts", "Blog articles", "Captions"]
    }
  ];

  const sidebarItems = [
    { name: "Dashboard", icon: Home, id: "home" },
    { name: "AI Tools", icon: Wrench, id: "tools" },
    { name: "My Results", icon: Save, id: "results" },
    { name: "Prompt Packs", icon: Target, id: "prompts" },
    { name: "Usage & Billing", icon: BarChart3, id: "usage" },
    { name: "Settings", icon: Settings, id: "settings" }
  ];

  const stats = [
    { label: "Credits Used", value: user.credits, icon: Zap, color: "text-blue-600", bgColor: "bg-blue-50" },
    { label: "Generated Today", value: 12, icon: TrendingUp, color: "text-green-600", bgColor: "bg-green-50" },
    { label: "Saved Results", value: 38, icon: Save, color: "text-purple-600", bgColor: "bg-purple-50" },
    { label: "Current Plan", value: user.plan, icon: Crown, color: "text-orange-600", bgColor: "bg-orange-50" }
  ];

  const creditPercentage = (user.credits / user.maxCredits) * 100;

  return (
    <div className="min-h-screen bg-gray-50/30">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center px-4">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold">AI SaaS</h1>
            </div>
          </div>
          
          <div className="flex flex-1 items-center justify-end space-x-2">
            <div className="hidden items-center space-x-2 rounded-lg bg-muted px-3 py-1 text-sm md:flex">
              <Zap className="h-4 w-4 text-primary" />
              <span className="font-medium">{user.credits}/{user.maxCredits} credits</span>
            </div>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </Button>
            <Button className="hidden md:flex">
              <Crown className="mr-2 h-4 w-4" />
              Upgrade
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>
                {user.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`fixed inset-y-0 left-0 z-20 w-64 bg-background border-r transition-transform duration-200 ease-in-out lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:inset-auto lg:z-auto`}>
          <div className="flex h-full flex-col">
            <div className="flex-1 overflow-y-auto p-4 pt-6">
              <nav className="space-y-2">
                {sidebarItems.map((item) => (
                  <Button
                    key={item.id}
                    variant={activeTab === item.id ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab(item.id)}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.name}
                  </Button>
                ))}
              </nav>
            </div>
            
            {/* Sidebar Bottom CTA */}
            <div className="p-4 border-t">
              <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-1">Upgrade to Pro</h3>
                  <p className="text-sm opacity-90 mb-3">Unlock unlimited credits & premium features</p>
                  <Button variant="secondary" size="sm" className="w-full">
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden">
          <div className="container p-6 space-y-6">
            {/* Welcome Section */}
            <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}! 👋</h1>
                    <p className="text-blue-100 mb-4">Ready to create amazing content with AI? Let's get started!</p>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="secondary" size="sm">
                        Continue Last Project
                      </Button>
                      <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                        Explore New Tools
                      </Button>
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    <div className="text-6xl opacity-20">🚀</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                      </div>
                      <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                        <stat.icon className={`h-5 w-5 ${stat.color}`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Tools & Recent Activity */}
              <div className="lg:col-span-2 space-y-6">
                {/* Quick Access Tools */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Quick Access</CardTitle>
                      <CardDescription>Your most used AI tools</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      View All
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {quickTools.slice(0, 4).map((tool, index) => (
                        <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                          <CardContent className="p-4">
                            <div className="flex items-start space-x-3">
                              <div className={`p-2 rounded-lg ${tool.color} text-white`}>
                                <tool.icon className="h-5 w-5" />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold">{tool.name}</h3>
                                <p className="text-sm text-muted-foreground">{tool.description}</p>
                                <Badge variant="secondary" className="mt-2">
                                  {tool.category}
                                </Badge>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Recent Results</CardTitle>
                      <CardDescription>Your latest AI generations</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      View All
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentResults.map((result) => (
                        <Card key={result.id} className="hover:shadow-sm transition-shadow">
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between">
                              <div className="flex items-start space-x-3">
                                <span className="text-2xl">{result.icon}</span>
                                <div className="flex-1">
                                  <div className="flex items-center space-x-2">
                                    <h4 className="font-semibold">{result.tool}</h4>
                                    <span className="text-sm text-muted-foreground">{result.timestamp}</span>
                                  </div>
                                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{result.content}</p>
                                </div>
                              </div>
                              <div className="flex space-x-1">
                                <Button variant="ghost" size="sm">
                                  <Copy className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <RefreshCw className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Credit Usage, Prompt Packs, etc. */}
              <div className="space-y-6">
                {/* Credit Usage */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Credit Usage</span>
                      <Badge variant="outline">{user.credits}/{user.maxCredits}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Progress value={creditPercentage} className="h-2" />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{user.maxCredits - user.credits} credits remaining</span>
                        <span>{Math.round(creditPercentage)}% used</span>
                      </div>
                      {creditPercentage > 80 && (
                        <Alert>
                          <AlertDescription>
                            You're running low on credits. Consider upgrading to Pro for unlimited access.
                          </AlertDescription>
                        </Alert>
                      )}
                      <Button className="w-full" variant="outline">
                        <Plus className="h-4 w-4 mr-2" />
                        Buy More Credits
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Prompt Packs */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Prompt Packs</CardTitle>
                      <CardDescription>Curated prompts for better results</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {promptPacks.map((pack, index) => (
                        <Card key={index} className="relative hover:shadow-md transition-shadow">
                          {pack.popular && (
                            <Badge className="absolute -top-2 -right-2 bg-orange-500">
                              Popular
                            </Badge>
                          )}
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-start space-x-3">
                                <span className="text-2xl">{pack.icon}</span>
                                <div>
                                  <h4 className="font-semibold">{pack.name}</h4>
                                  <p className="text-sm text-muted-foreground">{pack.description}</p>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex flex-wrap gap-1">
                                {pack.features.map((feature, idx) => (
                                  <Badge key={idx} variant="secondary" className="text-xs">
                                    {feature}
                                  </Badge>
                                ))}
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <span className="text-lg font-bold">{pack.price}</span>
                                  <span className="text-sm text-muted-foreground line-through">{pack.originalPrice}</span>
                                </div>
                                <Button size="sm">
                                  Get Pack
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Referral Program */}
                <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Gift className="h-5 w-5" />
                      <h3 className="font-semibold">Refer & Earn</h3>
                    </div>
                    <p className="text-sm opacity-90 mb-4">
                      Get 50 free credits for each friend who signs up using your referral link!
                    </p>
                    <Button variant="secondary" size="sm" className="w-full">
                      Share Your Link
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-10 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
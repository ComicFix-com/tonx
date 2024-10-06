import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import UTMGenerator from '@/components/UTMGenerator';
import { Globe, Zap, Lock, BarChart, Heart } from 'lucide-react';

const Index = () => {
  const handleDonate = () => {
    window.location.href = "upi://pay?pa=adnanmuhammad4393@okicici&pn=Adnan%20Muhammad&am=500.00&cu=INR&tn=Supporting ComicFix Community";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-tonx-50 to-white">
      <header className="py-6 px-4 sm:px-6 lg:px-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-tonx-600 font-heading">Tonx UTM Builder</h1>
            <p className="mt-2 text-xl text-gray-600">The Collaborator of Software Marketers</p>
          </div>
          <div className="flex space-x-4">
            <Button>Get Started</Button>
            <Button variant="outline" onClick={handleDonate} className="flex items-center">
              <Heart className="mr-2 h-4 w-4 text-red-500" />
              Donate
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <UTMGenerator />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <FeatureCard
            icon={<Zap className="h-8 w-8 text-tonx-500" />}
            title="Speed & Simplicity"
            description="Create UTM links in seconds with our streamlined interface"
          />
          <FeatureCard
            icon={<Globe className="h-8 w-8 text-tonx-500" />}
            title="Global Reach"
            description="Support for international campaigns (Premium)"
          />
          <FeatureCard
            icon={<Lock className="h-8 w-8 text-tonx-500" />}
            title="Premium Features"
            description="Unlock advanced tools for power users and teams"
          />
          <FeatureCard
            icon={<BarChart className="h-8 w-8 text-tonx-500" />}
            title="Advanced Analytics"
            description="Gain deeper insights into your campaign performance (Premium)"
          />
        </div>

        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Why choose Tonx UTM Builder?</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Free to use with powerful basic features</li>
              <li>No registration required for core functionality</li>
              <li>Fast and easy link generation</li>
              <li>Secure and private - we don't store your data</li>
              <li>Premium features for advanced users and teams</li>
            </ul>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-gray-100 mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">© 2023 Tonx UTM Builder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <Card>
    <CardHeader>
      {icon}
      <CardTitle className="mt-4">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

export default Index;
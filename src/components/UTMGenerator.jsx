import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { InfoIcon, Copy, QrCode, Lock, Globe } from 'lucide-react';

const UTMGenerator = () => {
  const [url, setUrl] = useState('');
  const [source, setSource] = useState('');
  const [medium, setMedium] = useState('');
  const [campaign, setCampaign] = useState('');
  const [term, setTerm] = useState('');
  const [content, setContent] = useState('');
  const [generatedUrl, setGeneratedUrl] = useState('');
  const [isPremium, setIsPremium] = useState(false);

  const handleGenerateUrl = () => {
    const utmParams = new URLSearchParams({
      utm_source: source,
      utm_medium: medium,
      utm_campaign: campaign,
    });

    if (term) utmParams.append('utm_term', term);
    if (content) utmParams.append('utm_content', content);

    const newUrl = `${url}${url.includes('?') ? '&' : '?'}${utmParams.toString()}`;
    setGeneratedUrl(newUrl);
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(generatedUrl);
    // You could add a toast notification here to confirm the copy action
  };

  const renderInput = (id, value, setter, placeholder, tooltip) => (
    <div className="mb-4">
      <Label htmlFor={id} className="flex items-center">
        {id.charAt(0).toUpperCase() + id.slice(1)}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <InfoIcon className="h-4 w-4 ml-1" />
            </TooltipTrigger>
            <TooltipContent>
              <p>{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Label>
      <Input
        id={id}
        value={value}
        onChange={(e) => setter(e.target.value)}
        placeholder={placeholder}
        className="mt-1"
      />
    </div>
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Generate UTM Link</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {renderInput('url', url, setUrl, 'https://example.com', 'Enter the base URL of your website')}
          {renderInput('source', source, setSource, 'google', 'The referrer (e.g. google, newsletter)')}
          {renderInput('medium', medium, setMedium, 'cpc', 'Marketing medium (e.g. cpc, banner, email)')}
          {renderInput('campaign', campaign, setCampaign, 'spring_sale', 'Product, promo code, or slogan')}
          {renderInput('term', term, setTerm, 'running+shoes', 'Identify the paid keywords')}
          {renderInput('content', content, setContent, 'logolink', 'Use to differentiate ads')}

          <div className="border-t pt-4 mt-4">
            <h3 className="text-lg font-semibold mb-2">Premium Features</h3>
            {isPremium ? (
              <>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full">
                    Bulk UTM Generation
                  </Button>
                  <Button variant="outline" className="w-full">
                    Custom Branding
                  </Button>
                  <Button variant="outline" className="w-full">
                    Advanced Analytics
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Globe className="w-4 h-4 mr-2" />
                    Multi-language Support
                  </Button>
                </div>
              </>
            ) : (
              <div className="bg-gray-100 p-4 rounded-md">
                <p className="text-sm text-gray-600 mb-2">Upgrade to Premium for advanced features</p>
                <Button className="w-full" onClick={() => setIsPremium(true)}>
                  <Lock className="w-4 h-4 mr-2" />
                  Unlock Premium
                </Button>
              </div>
            )}
          </div>

          <Button onClick={handleGenerateUrl} className="w-full">
            Generate UTM Link
          </Button>

          {generatedUrl && (
            <div className="mt-4">
              <Label htmlFor="generated-url">Generated UTM Link</Label>
              <div className="flex mt-2">
                <Input id="generated-url" value={generatedUrl} readOnly className="flex-grow" />
                <Button onClick={handleCopyUrl} className="ml-2">
                  <Copy className="h-4 w-4" />
                </Button>
                <Button className="ml-2">
                  <QrCode className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default UTMGenerator;
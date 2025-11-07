'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  Shield,
  Award,
  Lock,
} from 'lucide-react';

const DEFAULT_FOOTER = {
  logoText: 'WarehousePro',
  companyDescription:
    'Leading warehouse management ERP solution trusted by mid-size logistics companies worldwide. Transform your operations with AI-powered intelligence and real-time inventory tracking.',
  contactEmail: 'hello@warehousepro.com',
  contactPhone: '+1 (555) 123-4567',
  contactAddress: '123 Logistics Blvd, Suite 100',
  newsletterTitle: 'Weekly Warehouse Tips',
  newsletterPlaceholder: 'Enter your email',
  newsletterDisclaimer:
    'Get weekly warehouse optimization tips and industry insights. No spam, unsubscribe anytime.',
  section1Title: 'Product',
  section2Title: 'Solutions',
  section3Title: 'Company',
  section4Title: 'Resources',
  copyrightText: '© 2024 WarehousePro. All rights reserved.',
  madeWithText: 'by warehouse experts',
  socialText: 'Follow us:',
  social1Href: 'https://twitter.com/warehousepro',
  social2Href: 'https://facebook.com/warehousepro',
  social3Href: 'https://instagram.com/warehousepro',
  social4Href: 'https://linkedin.com/company/warehousepro',
  social5Href: 'https://github.com/warehousepro',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };

  const footerSections = [
    {
      title: config.section1Title,
      links: [
        {
          name: 'Inventory Tracking',
          href: '/features/inventory',
          editableId: 'link-footer-inventory',
        },
        {
          name: 'AI Forecasting',
          href: '/features/forecasting',
          editableId: 'link-footer-forecasting',
        },
        {
          name: 'Multi-Warehouse',
          href: '/features/multi-warehouse',
          editableId: 'link-footer-multi-warehouse',
        },
        {
          name: 'Picking Optimization',
          href: '/features/picking',
          editableId: 'link-footer-picking',
        },
        {
          name: 'Shipping Integration',
          href: '/features/shipping',
          editableId: 'link-footer-shipping',
        },
        { name: 'Analytics', href: '/features/analytics', editableId: 'link-footer-analytics' },
      ],
    },
    {
      title: config.section2Title,
      links: [
        { name: 'Small Warehouses', href: '/solutions/small', editableId: 'link-footer-small' },
        {
          name: 'Mid-Size Operations',
          href: '/solutions/mid-size',
          editableId: 'link-footer-mid-size',
        },
        { name: 'Enterprise', href: '/solutions/enterprise', editableId: 'link-footer-enterprise' },
        { name: '3PL Providers', href: '/solutions/3pl', editableId: 'link-footer-3pl' },
        { name: 'E-commerce', href: '/solutions/ecommerce', editableId: 'link-footer-ecommerce' },
        {
          name: 'Manufacturing',
          href: '/solutions/manufacturing',
          editableId: 'link-footer-manufacturing',
        },
      ],
    },
    {
      title: config.section3Title,
      links: [
        { name: 'About Us', href: '/about', editableId: 'link-footer-about' },
        { name: 'Careers', href: '/careers', editableId: 'link-footer-careers' },
        { name: 'Partners', href: '/partners', editableId: 'link-footer-partners' },
        { name: 'Press', href: '/press', editableId: 'link-footer-press' },
        { name: 'Contact', href: '/contact', editableId: 'link-footer-contact' },
        { name: 'Support', href: '/support', editableId: 'link-footer-support' },
      ],
    },
    {
      title: config.section4Title,
      links: [
        { name: 'Help Center', href: '/help', editableId: 'link-footer-help' },
        { name: 'Documentation', href: '/docs', editableId: 'link-footer-docs' },
        { name: 'API Reference', href: '/api', editableId: 'link-footer-api' },
        { name: 'Case Studies', href: '/case-studies', editableId: 'link-footer-case-studies' },
        { name: 'Webinars', href: '/webinars', editableId: 'link-footer-webinars' },
        { name: 'Blog', href: '/blog', editableId: 'link-footer-blog' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: config.social1Href },
    { name: 'Facebook', icon: Facebook, href: config.social2Href },
    { name: 'Instagram', icon: Instagram, href: config.social3Href },
    { name: 'LinkedIn', icon: Linkedin, href: config.social4Href },
    { name: 'GitHub', icon: Github, href: config.social5Href },
  ];

  const bottomLinks = [
    { name: 'Privacy Policy', href: '/privacy', editableId: 'link-footer-privacy' },
    { name: 'Terms of Service', href: '/terms', editableId: 'link-footer-terms' },
    { name: 'Security', href: '/security', editableId: 'link-footer-security' },
    { name: 'Compliance', href: '/compliance', editableId: 'link-footer-compliance' },
  ];

  const trustBadges = [
    { name: 'SOC2', icon: Shield, text: 'SOC2 Certified' },
    { name: 'ISO27001', icon: Award, text: 'ISO 27001' },
    { name: 'GDPR', icon: Lock, text: 'GDPR Compliant' },
  ];

  return (
    <footer id="footer" data-editable="footer" className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">
                    {config.logoText.charAt(0)}
                  </span>
                </div>
                <span className="font-bold text-xl" data-editable="logoText">
                  {config.logoText}
                </span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                <span data-editable="companyDescription">{config.companyDescription}</span>
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground" data-editable="contactEmail">
                  {config.contactEmail}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground" data-editable="contactPhone">
                  {config.contactPhone}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground" data-editable="contactAddress">
                  {config.contactAddress}
                </span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Security & Compliance</h4>
              <div className="flex flex-wrap gap-3">
                {trustBadges.map((badge, index) => {
                  const Icon = badge.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-3 py-2 bg-muted/50 rounded-md"
                    >
                      <Icon className="size-4 text-primary" />
                      <span className="text-xs font-medium text-muted-foreground">
                        {badge.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm" data-editable="newsletterTitle">
                {config.newsletterTitle}
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={config.newsletterPlaceholder}
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                <span data-editable="newsletterDisclaimer">{config.newsletterDisclaimer}</span>
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm" data-editable={`section${index + 1}Title`}>
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        data-editable-href={link.editableId}
                        data-original-href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span data-editable="copyrightText">{config.copyrightText}</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Made with <Heart className="size-3 text-red-500 fill-current" />
                <span data-editable="madeWithText">{config.madeWithText}</span>
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2" data-editable="socialText">
                {config.socialText}
              </span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                    data-editable-href={`social${index + 1}Href`}
                    data-original-href={social.href}
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            {bottomLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                data-editable-href={link.editableId}
                data-original-href={link.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

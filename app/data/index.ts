import {
  CountryCode,
  LanguageCode,
} from '@shopify/hydrogen/storefront-api-types';

export type Locale = {
  language: LanguageCode;
  country: CountryCode;
  label: string;
  pathPrefix: string;
  host: string;
};

export const countries: Record<string, Locale> = {
  'en-us': {
    language: 'EN',
    country: 'US',
    label: 'United States (USD $)',
    pathPrefix: '/en-us',
    host: 'http://localhost:3000',
  },
  'en-ca': {
    language: 'EN',
    country: 'CA',
    label: 'Canada (CAD $)',
    pathPrefix: '/en-ca',
    host: 'http://localhost:3000',
  },
  'fr-ca': {
    language: 'FR',
    country: 'CA',
    label: 'Canada (Français) (CAD $)',
    pathPrefix: '/fr-ca',
    host: 'http://localhost:3000',
  },
  'en-au': {
    language: 'EN',
    country: 'AU',
    label: 'Australia (AUD $)',
    pathPrefix: '/en-au',
    host: 'http://localhost:3000',
  },
};

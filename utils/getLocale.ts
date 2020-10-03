import * as commonLocales from 'lang';

import { lang } from 'config/app.json';

type Locales = {
  [key: string]: {
    [key: string]: string;
  };
}

type Args = [
  string,
  Locales?,
] | [{
  key: string;
  locales?: Locales;
  placeholders?: {
    [key: string]: string;
  };
}];

export default function getLocale(...args: Args): string {
  if (typeof args[0] === 'object') {
    const [{
      key,
      locales = commonLocales,
      placeholders,
    }] = args;
    let localeValue = locales[lang][key] || key;
    for (const ph in placeholders) {
      if (localeValue.includes(ph)) {
        localeValue = localeValue.replace(new RegExp(`{{\\s?${ph}\\s?}}`, 'g'), placeholders[ph]);
      }
    }
    return localeValue;
  } else {
    const [key, locales = commonLocales] = args;
    return locales[lang][key] || key;
  }
}

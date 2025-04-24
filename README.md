# LinkumoriJS-clean-search-links

A collection of lightweight JavaScript solutions to remove tracking redirects from search engine results.

## Overview

When you click on links in search engine results, the search engines often route your clicks through redirect URLs that track your browsing habits. These scripts intercept these clicks and redirect you directly to the actual destination URL, enhancing your privacy online.

Currently supported search engines:
- Google Search
- Yandex Search

## How It Works

Each script works by:
1. Intercepting click events on search result links
2. Extracting the actual destination URL from tracking parameters
3. Redirecting you directly to the real URL instead of through tracking redirectors
4. Cleaning up tracking attributes on mouseover to prevent information collection

## Usage

### As a Userscript

1. Install a userscript manager extension such as [Tampermonkey](https://www.tampermonkey.net/) or [Greasemonkey](https://www.greasespot.net/)
2. Create a new userscript and paste the content of either `google-fix.js` or `yandex-fix.js`
3. Save the script and ensure it's enabled

### In a Browser Extension

Add the scripts to your custom browser extension by including them in your content scripts:

```json
// manifest.json example
{
  "content_scripts": [
    {
      "matches": ["*://*.google.com/*", "*://*.google.co.*/*"],
      "js": ["google-fix.js"]
    },
    {
      "matches": ["*://*.yandex.com/*", "*://*.yandex.ru/*"],
      "js": ["yandex-fix.js"]
    }
  ]
}
```

### Directly in Webpage

You can also include these scripts directly in a webpage if you need to clean search links in your own web application:

```html
<script src="path/to/google-fix.js"></script>
<!-- or -->
<script src="path/to/yandex-fix.js"></script>
```

## Features

### Google Fix
- Bypasses Google's tracking redirects (`google.com/url?q=`)
- Handles Google AMP links (`/amp/`)
- Processes ad links (`google.com/aclk?`)
- Special handling for Gmail links to preserve "open in new tab" behavior
- Removes tracking attributes (`onmousedown`, `data-cthref`)

### Yandex Fix
- Overrides tracking mechanism by neutralizing `_borschik` function
- Removes tracking attributes (`data-counter`, `data-cthref`)

## License

Modified work Copyright (c) 2024 Subham Mahesh  
Licensed under BSD 2-Clause License

Original work Copyright (c) 2017 kodango  
Repository: https://github.com/kodango/Remove-Google-Redirection  
Licensed under MIT License

See the [LICENSE](LICENSE) file for more details.

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues to improve functionality or add support for additional search engines.
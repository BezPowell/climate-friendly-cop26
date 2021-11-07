+++
title="Climate Friendly COP26"
sort_by = "weight"
[extra]
subtitle = "A low-emissions alternative to the official COP26 Website."
+++
This month's COP26 climate summit in Glasgow has been described as "'the last chance saloon' to save the world from runaway climate change". So it was with some surprise that when I visited the [official website](https://ukcop26.org/) at the start of the summit, I found it was one of the slowest loading, and highest carbon emitting websites I had seen.

Whenever you visit a website your device needs to collect data from the server where the page is stored in order to display it. Sending data requires energy in the form of electricity, and the more data a webpage needs to display, the more electricity will be consumed by the server; your device; and all the myriad of switches, repeaters and satellite uplinks in the chain between them.

Even renewable electricity is not entirely carbon-neutral, and the more electricity is consumed in the process of displaying a website, the more greenhouse gases will be emitted into the atmosphere.

As I looked deeper into the code of the official COP26 website, it became increasingly apparent that no care had been taken to control the size of the website. In fact, the total size of the homepage was over ***18 MB***, when the average is around 3 MB. This resulted in green-house gas emissions of approximately ***11 grams of CO<sub>2</sub> equivalent*** each time the homepage is viewed, compared to an average of 1.76 grams according to the [Website Carbon Calculator](https://www.websitecarbon.com/). The site did not even appear to be hosted with a provider that uses 100% renewable energy.

Frustrated by this seeming hypocrisy on the part of those who commissioned the site, I decided to try and make a low-emissions alternative. The result is this site. It is not quite an 100% match - the fonts used on the official site have commercial licenses, and one weekend's work from a single developer can not hope to recreate a site of this size - but it should hopefully demonstrate that making fast and environmentally-friendly websites is no more difficult than making a slow and polluting one.

Not all of the content from the official site has been ported across (and likely will not be as it is being continually added to), but please feel free to explore what little is here; it will have substantially less of an environmental impact that viewing it on the official site: a mere 0.19 grams on the introduction page, compared to the original's 3.01 grams.
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: search.spec.ts >> Search Functionality - Non-Functional Tests >> @performance @search TC-20: Search results load within acceptable time
- Location: src\tests\search.spec.ts:202:7

# Error details

```
Error: expect(received).toBeLessThan(expected)

Expected: < 3000
Received:   3271
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - link "Skip to site navigation" [ref=e4] [cursor=pointer]:
    - /url: ""
  - link "Skip to main content" [ref=e5] [cursor=pointer]:
    - /url: ""
  - complementary [ref=e7]
  - complementary:
    - generic:
      - list
  - banner [ref=e10]:
    - generic [ref=e11]:
      - navigation "navigation bar" [ref=e12]:
        - generic [ref=e16]:
          - link "Trade Me" [ref=e19] [cursor=pointer]:
            - /url: /
            - img "Trade Me" [ref=e22]
          - search [ref=e26]:
            - generic [ref=e27]:
              - generic [ref=e28]: Search all of Trade Me
              - generic [ref=e29]:
                - img [ref=e32]
                - searchbox "Search all of Trade Me" [ref=e35]
          - list [ref=e36]:
            - listitem [ref=e37]:
              - button "Categories" [ref=e42] [cursor=pointer]:
                - generic [ref=e43]: Categories
                - img [ref=e45]
            - listitem
            - listitem [ref=e48]:
              - link "Watchlist" [ref=e49] [cursor=pointer]:
                - /url: /a/my-trade-me/watchlist
                - generic [ref=e50]: Watchlist
                - img [ref=e52]
            - listitem [ref=e54]:
              - link "Favourites" [ref=e55] [cursor=pointer]:
                - /url: /a/my-trade-me/favourites/searches
                - generic [ref=e56]: Favourites
                - img [ref=e58]
            - listitem [ref=e60]:
              - link "Start a listing" [ref=e61] [cursor=pointer]:
                - /url: /a/list
                - generic [ref=e62]: Start a listing
                - img [ref=e64]
            - listitem [ref=e66]:
              - generic [ref=e67]:
                - link "Sign up" [ref=e68] [cursor=pointer]:
                  - /url: /a/register
                  - text: Sign up
                  - img [ref=e70]
                - link "Log in" [ref=e72] [cursor=pointer]:
                  - /url: search(modal:login)?search_string=house
                  - text: Log in
                  - img [ref=e74]
      - navigation [ref=e77]
  - main [ref=e80]:
    - generic [ref=e81]: main content
    - generic [ref=e83]:
      - generic [ref=e84]:
        - generic [ref=e87]:
          - list [ref=e89]:
            - listitem [ref=e90]:
              - link "Home" [ref=e91] [cursor=pointer]:
                - /url: /a/
              - text: /
            - listitem [ref=e92]: All Categories
          - heading "All Categories" [level=1] [ref=e94]
          - generic [ref=e95]:
            - generic [ref=e96]:
              - generic [ref=e100]:
                - generic [ref=e101]: Add Search keywords (optional)
                - generic [ref=e102]:
                  - img [ref=e105]
                  - searchbox "Add Search keywords (optional) Clear input" [ref=e108]: house
                  - button "Clear input" [ref=e110] [cursor=pointer]:
                    - img "Clear input" [ref=e112]
              - button "Save this search Save this search" [ref=e115] [cursor=pointer]:
                - img "Save this search" [ref=e117]
                - generic [ref=e119]: Save this search
            - generic [ref=e121]:
              - generic "Refine" [ref=e122]:
                - button "Refine" [ref=e125] [cursor=pointer]:
                  - img [ref=e127]
                  - text: Refine
                  - img [ref=e131]
              - button "Category" [ref=e136] [cursor=pointer]:
                - text: Category
                - img [ref=e139]
              - button "All Locations" [ref=e144] [cursor=pointer]:
                - text: All Locations
                - img [ref=e147]
              - button "New & Used" [ref=e152] [cursor=pointer]:
                - text: New & Used
                - img [ref=e155]
              - 'button "Shipping: All" [ref=e160] [cursor=pointer]':
                - text: "Shipping: All"
                - img [ref=e163]
        - list [ref=e168]:
          - listitem [ref=e169]:
            - link "Trade Me Property (5,121)" [ref=e170] [cursor=pointer]:
              - /url: /a/property/search?search_string=house
          - listitem [ref=e171]:
            - link "Business, farming & industry (6)" [ref=e172] [cursor=pointer]:
              - /url: /a/marketplace/business-farming-industry/search?search_string=house
          - listitem [ref=e173]:
            - link "Trade Me Jobs (5)" [ref=e174] [cursor=pointer]:
              - /url: /a/jobs/search?search_string=house
        - generic [ref=e176]:
          - heading "Showing 5,132 results for 'house'" [level=3] [ref=e178]
          - generic [ref=e179]:
            - generic [ref=e183]:
              - generic [ref=e184]: Sort order
              - generic [ref=e185]:
                - combobox "Sort order" [ref=e186] [cursor=pointer]:
                  - 'option "Sort: Best match" [selected]'
                  - option "Featured first"
                  - option "Lowest price"
                  - option "Highest price"
                  - option "Lowest Buy Now"
                  - option "Highest Buy Now"
                  - option "Most bids"
                  - option "Latest listings"
                  - option "Closing soon"
                  - option "Title"
                  - option "Largest discount"
                - generic:
                  - generic:
                    - img
            - radiogroup "Card display mode (optional)" [ref=e189]:
              - generic [ref=e190]: Card display mode (optional)
              - generic [ref=e191]:
                - generic [ref=e192]:
                  - radio "Switch to list view List" [ref=e193]
                  - generic [ref=e194] [cursor=pointer]:
                    - img "Switch to list view" [ref=e196]
                    - generic [ref=e198]: List
                - generic [ref=e199]:
                  - radio "Switch to card view Gallery" [checked] [ref=e200]
                  - generic [ref=e201]:
                    - img "Switch to card view" [ref=e203]
                    - generic [ref=e205]: Gallery
      - heading "Search Results" [level=2] [ref=e206]
      - generic [ref=e214]:
        - generic [ref=e215]:
          - generic [ref=e216]:
            - generic [ref=e219]: Advertisement
            - generic [ref=e223]: Advertisement
            - generic [ref=e228]:
              - generic [ref=e229]:
                - 'link "Ahipara, Northland. Listed: Fri, 29 Apr House. Asking price $12" [ref=e230] [cursor=pointer]':
                  - /url: /a/property/residential/sale/northland/far-north/ahipara/listing/4620036?rsqid=992dc37144674b9497ddbb3d78a7215d-001
                  - generic [ref=e231]:
                    - generic [ref=e232]:
                      - generic [ref=e233]:
                        - generic "Ahipara, Northland." [ref=e234]: Northland
                        - generic [ref=e235]: "Listed: Fri, 29 Apr"
                      - generic "House." [ref=e236]: House
                    - generic [ref=e239]: Asking price $12
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic:
                              - generic:
                                - generic:
                                  - generic:
                                    - img
                                - generic: No Photo
              - button "Add House to your watchlist" [ref=e240] [cursor=pointer]:
                - img [ref=e244]
            - generic [ref=e249]:
              - generic [ref=e250]:
                - 'link "Ahipara, Northland. Listed: Fri, 29 Apr House. Asking price $20" [ref=e251] [cursor=pointer]':
                  - /url: /a/property/residential/sale/northland/far-north/ahipara/listing/4619953?rsqid=992dc37144674b9497ddbb3d78a7215d-001
                  - generic [ref=e252]:
                    - generic [ref=e253]:
                      - generic [ref=e254]:
                        - generic "Ahipara, Northland." [ref=e255]: Northland
                        - generic [ref=e256]: "Listed: Fri, 29 Apr"
                      - generic "House." [ref=e257]: House
                    - generic [ref=e260]: Asking price $20
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - list:
                              - listitem:
                                - generic:
                                  - generic:
                                    - generic:
                                      - img "Loading Image 1 of 3"
                                    - generic:
                                      - img "Image 1 of 3"
                              - listitem:
                                - generic:
                                  - generic:
                                    - generic:
                                      - img "Loading Image 2 of 3"
                              - listitem:
                                - generic:
                                  - generic:
                                    - generic:
                                      - img "Loading Image 3 of 3"
                          - button "Previous image" [ref=e261] [cursor=pointer]:
                            - img "Previous image" [ref=e264]
                          - button "Next image" [ref=e266] [cursor=pointer]:
                            - img "Next image" [ref=e269]
              - button "Add House to your watchlist" [ref=e271] [cursor=pointer]:
                - img [ref=e275]
            - generic [ref=e280]:
              - generic [ref=e281]:
                - 'link "Karetu, Northland. Listed: Mon, 17 Oct House. Price by negotiation" [ref=e282] [cursor=pointer]':
                  - /url: /a/property/residential/sale/northland/far-north/karetu/listing/2149459592?rsqid=992dc37144674b9497ddbb3d78a7215d-001
                  - generic [ref=e283]:
                    - generic [ref=e284]:
                      - generic [ref=e285]:
                        - generic "Karetu, Northland." [ref=e286]: Northland
                        - generic [ref=e287]: "Listed: Mon, 17 Oct"
                      - generic "House." [ref=e288]: House
                    - generic [ref=e291]: Price by negotiation
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - list:
                              - listitem:
                                - generic:
                                  - generic:
                                    - generic:
                                      - img "Loading Image 1 of 3"
                                    - generic:
                                      - img "Image 1 of 3"
                              - listitem:
                                - generic:
                                  - generic:
                                    - generic:
                                      - img "Loading Image 2 of 3"
                              - listitem:
                                - generic:
                                  - generic:
                                    - generic:
                                      - img "Loading Image 3 of 3"
                          - button "Previous image" [ref=e292] [cursor=pointer]:
                            - img "Previous image" [ref=e295]
                          - button "Next image" [ref=e297] [cursor=pointer]:
                            - img "Next image" [ref=e300]
              - button "Add House to your watchlist" [ref=e302] [cursor=pointer]:
                - img [ref=e306]
            - generic [ref=e311]:
              - generic [ref=e312]:
                - 'link "Karetu, Northland. Listed: Mon, 17 Oct House. Price by negotiation" [ref=e313] [cursor=pointer]':
                  - /url: /a/property/residential/sale/northland/far-north/karetu/listing/2149459590?rsqid=992dc37144674b9497ddbb3d78a7215d-001
                  - generic [ref=e314]:
                    - generic [ref=e315]:
                      - generic [ref=e316]:
                        - generic "Karetu, Northland." [ref=e317]: Northland
                        - generic [ref=e318]: "Listed: Mon, 17 Oct"
                      - generic "House." [ref=e319]: House
                    - generic [ref=e322]: Price by negotiation
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - list:
                              - listitem:
                                - generic:
                                  - generic:
                                    - generic:
                                      - img "Loading Image 1 of 3"
                                    - generic:
                                      - img "Image 1 of 3"
                              - listitem:
                                - generic:
                                  - generic:
                                    - generic:
                                      - img "Loading Image 2 of 3"
                              - listitem:
                                - generic:
                                  - generic:
                                    - generic:
                                      - img "Loading Image 3 of 3"
                          - button "Previous image" [ref=e323] [cursor=pointer]:
                            - img "Previous image" [ref=e326]
                          - button "Next image" [ref=e328] [cursor=pointer]:
                            - img "Next image" [ref=e331]
              - button "Add House to your watchlist" [ref=e333] [cursor=pointer]:
                - img [ref=e337]
            - generic [ref=e342]:
              - generic [ref=e343]:
                - 'link "Trentham, Wellington. Listed: Sun, 19 Feb Wellington house. Asking price $450,000" [ref=e344] [cursor=pointer]':
                  - /url: /a/property/residential/sale/wellington/upper-hutt/trentham/listing/5331884?rsqid=992dc37144674b9497ddbb3d78a7215d-001
                  - generic [ref=e345]:
                    - generic [ref=e346]:
                      - generic [ref=e347]:
                        - generic "Trentham, Wellington." [ref=e348]: Wellington
                        - generic [ref=e349]: "Listed: Sun, 19 Feb"
                      - generic "Wellington house." [ref=e350]: Wellington house
                    - generic [ref=e353]: Asking price $450,000
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - list:
                              - listitem:
                                - generic:
                                  - generic:
                                    - generic:
                                      - img "Loading Image 1 of 3"
                                    - generic:
                                      - img "Image 1 of 3"
                              - listitem:
                                - generic:
                                  - generic:
                                    - generic:
                                      - img "Loading Image 2 of 3"
                              - listitem:
                                - generic:
                                  - generic:
                                    - generic:
                                      - img "Loading Image 3 of 3"
                          - button "Previous image" [ref=e354] [cursor=pointer]:
                            - img "Previous image" [ref=e357]
                          - button "Next image" [ref=e359] [cursor=pointer]:
                            - img "Next image" [ref=e362]
              - button "Add Wellington house to your watchlist" [ref=e364] [cursor=pointer]:
                - img [ref=e368]
            - generic [ref=e373]:
              - generic [ref=e374]:
                - 'link "Haast, West Coast. Listed: Tue, 19 Aug The Dolls House. Asking price $250,000" [ref=e375] [cursor=pointer]':
                  - /url: /a/property/residential/sale/west-coast/westland/haast/listing/3603468?rsqid=992dc37144674b9497ddbb3d78a7215d-001
                  - generic [ref=e376]:
                    - generic [ref=e377]:
                      - generic [ref=e378]:
                        - generic "Haast, West Coast." [ref=e379]: West Coast
                        - generic [ref=e380]: "Listed: Tue, 19 Aug"
                      - generic "The Dolls House." [ref=e381]: The Dolls House
                    - generic [ref=e384]: Asking price $250,000
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - list:
                              - listitem:
                                - generic:
                                  - generic:
                                    - generic:
                                      - img "Loading Image 1 of 18"
                                    - generic:
                                      - img "Image 1 of 18"
                              - listitem:
                                - generic:
                                  - generic:
                                    - generic:
                                      - img "Loading Image 2 of 18"
                              - listitem
                              - listitem
                              - listitem
                              - listitem
                              - listitem
                              - listitem
                              - listitem
                              - listitem
                              - listitem
                              - listitem
                              - listitem
                              - listitem
                              - listitem
                              - listitem
                              - listitem
                              - listitem:
                                - generic:
                                  - generic:
                                    - generic:
                                      - img "Loading Image 18 of 18"
                          - button "Previous image" [ref=e385] [cursor=pointer]:
                            - img "Previous image" [ref=e388]
                          - button "Next image" [ref=e390] [cursor=pointer]:
                            - img "Next image" [ref=e393]
              - button "Add The Dolls House to your watchlist" [ref=e395] [cursor=pointer]:
                - img [ref=e399]
            - generic [ref=e404]:
              - generic [ref=e405]:
                - 'link "Greenlane, Auckland. Listed: Wed, 12 Oct Great House. Asking price $800,000" [ref=e406] [cursor=pointer]':
                  - /url: /a/property/residential/sale/auckland/auckland-city/greenlane/listing/2149458813?rsqid=992dc37144674b9497ddbb3d78a7215d-001
                  - generic [ref=e407]:
                    - generic [ref=e408]:
                      - generic [ref=e409]:
                        - generic "Greenlane, Auckland." [ref=e410]: Auckland
                        - generic [ref=e411]: "Listed: Wed, 12 Oct"
                      - generic "Great House." [ref=e412]: Great House
                    - generic [ref=e415]: Asking price $800,000
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - list:
                              - listitem:
                                - generic:
                                  - generic:
                                    - generic:
                                      - img "Loading Image 1 of 12"
                                    - generic:
                                      - img "Image 1 of 12"
                              - listitem:
                                - generic:
                                  - generic:
                                    - generic:
                                      - img "Loading Image 2 of 12"
                              - listitem
                              - listitem
                              - listitem
                              - listitem
                              - listitem
                              - listitem
                              - listitem
                              - listitem
                              - listitem
                              - listitem:
                                - generic:
                                  - generic:
                                    - generic:
                                      - img "Loading Image 12 of 12"
                          - button "Previous image" [ref=e416] [cursor=pointer]:
                            - img "Previous image" [ref=e419]
                          - button "Next image" [ref=e421] [cursor=pointer]:
                            - img "Next image" [ref=e424]
              - button "Add Great House to your watchlist" [ref=e426] [cursor=pointer]:
                - img [ref=e430]
            - generic [ref=e435]:
              - generic [ref=e436]:
                - 'link "Chartwell, Waikato. Listed: Thu, 26 May A house for you!. Asking price $1,000,000" [ref=e437] [cursor=pointer]':
                  - /url: /a/property/residential/sale/waikato/hamilton/chartwell/listing/2149422045?rsqid=992dc37144674b9497ddbb3d78a7215d-001
                  - generic [ref=e438]:
                    - generic [ref=e439]:
                      - generic [ref=e440]:
                        - generic "Chartwell, Waikato." [ref=e441]: Waikato
                        - generic [ref=e442]: "Listed: Thu, 26 May"
                      - generic "A house for you!." [ref=e443]: A house for you!
                    - generic [ref=e446]: Asking price $1,000,000
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - list:
                              - listitem:
                                - generic:
                                  - generic:
                                    - generic:
                                      - img "Loading Image 1 of 3"
                                    - generic:
                                      - img "Image 1 of 3"
                              - listitem:
                                - generic:
                                  - generic:
                                    - generic:
                                      - img "Loading Image 2 of 3"
                              - listitem:
                                - generic:
                                  - generic:
                                    - generic:
                                      - img "Loading Image 3 of 3"
                          - button "Previous image" [ref=e447] [cursor=pointer]:
                            - img "Previous image" [ref=e450]
                          - button "Next image" [ref=e452] [cursor=pointer]:
                            - img "Next image" [ref=e455]
              - button "Add A house for you! to your watchlist" [ref=e457] [cursor=pointer]:
                - img [ref=e461]
            - generic [ref=e466]:
              - 'link "Waikawa Beach, Manawatu / Whanganui. Listed: Fri, 24 Nov Our House. Asking price $500,000" [ref=e468] [cursor=pointer]':
                - /url: /a/property/residential/sale/manawatu-whanganui/horowhenua/waikawa-beach/listing/6203105?rsqid=992dc37144674b9497ddbb3d78a7215d-001
                - generic [ref=e469]:
                  - generic [ref=e470]:
                    - generic [ref=e471]:
                      - generic "Waikawa Beach, Manawatu / Whanganui." [ref=e472]: Manawatu / Whanganui
                      - generic [ref=e473]: "Listed: Fri, 24 Nov"
                    - generic "Our House." [ref=e474]: Our House
                  - generic [ref=e477]: Asking price $500,000
              - button "Add Our House to your watchlist" [ref=e478] [cursor=pointer]:
                - img [ref=e482]
            - generic [ref=e487]:
              - 'link "Waikawa Beach, Manawatu / Whanganui. Listed: Fri, 24 Nov Our House. Asking price $500,000" [ref=e489] [cursor=pointer]':
                - /url: /a/property/residential/sale/manawatu-whanganui/horowhenua/waikawa-beach/listing/6203222?rsqid=992dc37144674b9497ddbb3d78a7215d-001
                - generic [ref=e490]:
                  - generic [ref=e491]:
                    - generic [ref=e492]:
                      - generic "Waikawa Beach, Manawatu / Whanganui." [ref=e493]: Manawatu / Whanganui
                      - generic [ref=e494]: "Listed: Fri, 24 Nov"
                    - generic "Our House." [ref=e495]: Our House
                  - generic [ref=e498]: Asking price $500,000
              - button "Add Our House to your watchlist" [ref=e499] [cursor=pointer]:
                - img [ref=e503]
            - generic [ref=e508]:
              - 'link "Mangawhai Heads, Northland. Listed: Wed, 10 Jun Trendier Beach House. Asking price $850,000" [ref=e510] [cursor=pointer]':
                - /url: /a/property/residential/sale/northland/kaipara/mangawhai-heads/listing/4154414?rsqid=992dc37144674b9497ddbb3d78a7215d-001
                - generic [ref=e511]:
                  - generic [ref=e512]:
                    - generic [ref=e513]:
                      - generic "Mangawhai Heads, Northland." [ref=e514]: Northland
                      - generic [ref=e515]: "Listed: Wed, 10 Jun"
                    - generic "Trendier Beach House." [ref=e516]: Trendier Beach House
                  - generic [ref=e519]: Asking price $850,000
              - button "Add Trendier Beach House to your watchlist" [ref=e520] [cursor=pointer]:
                - img [ref=e524]
            - generic [ref=e529]:
              - 'link "Huapai, Auckland. Listed: Thu, 14 May Award Winning Master Builder House of the year. Price by negotiation" [ref=e531] [cursor=pointer]':
                - /url: /a/property/new-homes/new-house/auckland/rodney/huapai/listing/2149724211?rsqid=992dc37144674b9497ddbb3d78a7215d-001
                - generic [ref=e532]:
                  - generic [ref=e533]:
                    - generic [ref=e534]:
                      - generic "Huapai, Auckland." [ref=e535]: Auckland
                      - generic [ref=e536]: "Listed: Thu, 14 May"
                    - generic "Award Winning Master Builder House of the year." [ref=e537]: Award Winning Master Builder House of the year
                  - generic [ref=e540]: Price by negotiation
              - button "Add Award Winning Master Builder House of the year to your watchlist" [ref=e541] [cursor=pointer]:
                - img [ref=e545]
            - generic [ref=e550]:
              - 'link "Diamond Harbour, Canterbury. Listed: Sat, 17 Oct A Big Little House. Asking price $379,000" [ref=e552] [cursor=pointer]':
                - /url: /a/property/residential/sale/canterbury/banks-peninsula/diamond-harbour/listing/4325104?rsqid=992dc37144674b9497ddbb3d78a7215d-001
                - generic [ref=e553]:
                  - generic [ref=e554]:
                    - generic [ref=e555]:
                      - generic "Diamond Harbour, Canterbury." [ref=e556]: Canterbury
                      - generic [ref=e557]: "Listed: Sat, 17 Oct"
                    - generic "A Big Little House." [ref=e558]: A Big Little House
                  - generic [ref=e561]: Asking price $379,000
              - button "Add A Big Little House to your watchlist" [ref=e562] [cursor=pointer]:
                - img [ref=e566]
            - generic [ref=e571]:
              - 'link "Diamond Harbour, Canterbury. Listed: Sat, 17 Oct A Big Little House. Asking price $379,000" [ref=e573] [cursor=pointer]':
                - /url: /a/property/residential/sale/canterbury/banks-peninsula/diamond-harbour/listing/4325108?rsqid=992dc37144674b9497ddbb3d78a7215d-001
                - generic [ref=e574]:
                  - generic [ref=e575]:
                    - generic [ref=e576]:
                      - generic "Diamond Harbour, Canterbury." [ref=e577]: Canterbury
                      - generic [ref=e578]: "Listed: Sat, 17 Oct"
                    - generic "A Big Little House." [ref=e579]: A Big Little House
                  - generic [ref=e582]: Asking price $379,000
              - button "Add A Big Little House to your watchlist" [ref=e583] [cursor=pointer]:
                - img [ref=e587]
            - generic [ref=e592]:
              - 'link "City Centre, Canterbury. Listed: Wed, 26 Sep House is a Little Giant. Enquiries over $1,000,000" [ref=e594] [cursor=pointer]':
                - /url: /a/property/residential/sale/canterbury/christchurch-city/city-centre/listing/6891200?rsqid=992dc37144674b9497ddbb3d78a7215d-001
                - generic [ref=e595]:
                  - generic [ref=e596]:
                    - generic [ref=e597]:
                      - generic "City Centre, Canterbury." [ref=e598]: Canterbury
                      - generic [ref=e599]: "Listed: Wed, 26 Sep"
                    - generic "House is a Little Giant." [ref=e600]: House is a Little Giant
                  - generic [ref=e603]: Enquiries over $1,000,000
              - button "Add House is a Little Giant to your watchlist" [ref=e604] [cursor=pointer]:
                - img [ref=e608]
            - generic [ref=e613]:
              - 'link "St. Albans, Canterbury. Listed: Tue, 5 Nov House in Two Flats.. Price by negotiation" [ref=e615] [cursor=pointer]':
                - /url: /a/property/residential/sale/canterbury/christchurch-city/st-albans/listing/1678698?rsqid=992dc37144674b9497ddbb3d78a7215d-001
                - generic [ref=e616]:
                  - generic [ref=e617]:
                    - generic [ref=e618]:
                      - generic "St. Albans, Canterbury." [ref=e619]: Canterbury
                      - generic [ref=e620]: "Listed: Tue, 5 Nov"
                    - generic "House in Two Flats.." [ref=e621]: House in Two Flats.
                  - generic [ref=e624]: Price by negotiation
              - button "Add House in Two Flats. to your watchlist" [ref=e625] [cursor=pointer]:
                - img [ref=e629]
            - generic [ref=e634]:
              - 'link "Huapai, Auckland. Listed: Sun, 16 Nov Award Winning Master Builder House of the year. Price by negotiation" [ref=e636] [cursor=pointer]':
                - /url: /a/property/new-homes/new-house/auckland/rodney/huapai/listing/2149717339?rsqid=992dc37144674b9497ddbb3d78a7215d-001
                - generic [ref=e637]:
                  - generic [ref=e638]:
                    - generic [ref=e639]:
                      - generic "Huapai, Auckland." [ref=e640]: Auckland
                      - generic [ref=e641]: "Listed: Sun, 16 Nov"
                    - generic "Award Winning Master Builder House of the year." [ref=e642]: Award Winning Master Builder House of the year
                  - generic [ref=e645]: Price by negotiation
              - button "Add Award Winning Master Builder House of the year to your watchlist" [ref=e646] [cursor=pointer]:
                - img [ref=e650]
            - generic [ref=e655]:
              - 'link "Huapai, Auckland. Listed: Sun, 1 Mar Award Winning Master Builder House of the year. Price by negotiation" [ref=e657] [cursor=pointer]':
                - /url: /a/property/new-homes/new-house/auckland/rodney/huapai/listing/2149721339?rsqid=992dc37144674b9497ddbb3d78a7215d-001
                - generic [ref=e658]:
                  - generic [ref=e659]:
                    - generic [ref=e660]:
                      - generic "Huapai, Auckland." [ref=e661]: Auckland
                      - generic [ref=e662]: "Listed: Sun, 1 Mar"
                    - generic "Award Winning Master Builder House of the year." [ref=e663]: Award Winning Master Builder House of the year
                  - generic [ref=e666]: Price by negotiation
              - button "Add Award Winning Master Builder House of the year to your watchlist" [ref=e667] [cursor=pointer]:
                - img [ref=e671]
            - generic [ref=e676]:
              - 'link "Queensberry, Otago. Listed: Tue, 14 May Residential house. Asking price $02" [ref=e678] [cursor=pointer]':
                - /url: /a/property/residential/sale/otago/wanaka/queensberry/listing/2149609471?rsqid=992dc37144674b9497ddbb3d78a7215d-001
                - generic [ref=e679]:
                  - generic [ref=e680]:
                    - generic [ref=e681]:
                      - generic "Queensberry, Otago." [ref=e682]: Otago
                      - generic [ref=e683]: "Listed: Tue, 14 May"
                    - generic "Residential house." [ref=e684]: Residential house
                  - generic [ref=e687]: Asking price $02
              - button "Add Residential house to your watchlist" [ref=e688] [cursor=pointer]:
                - img [ref=e692]
            - generic [ref=e697]:
              - 'link "Birkenhead, Auckland. Listed: Thu, 24 Aug HOUSE WITH SHOP. Auction on 7 Sept, 12:00 pm" [ref=e699] [cursor=pointer]':
                - /url: /a/property/residential/sale/auckland/north-shore-city/birkenhead/listing/2149555090?rsqid=992dc37144674b9497ddbb3d78a7215d-001
                - generic [ref=e700]:
                  - generic [ref=e701]:
                    - generic [ref=e702]:
                      - generic "Birkenhead, Auckland." [ref=e703]: Auckland
                      - generic [ref=e704]: "Listed: Thu, 24 Aug"
                    - generic "HOUSE WITH SHOP." [ref=e705]: HOUSE WITH SHOP
                  - generic [ref=e708]: Auction on 7 Sept, 12:00 pm
              - button "Add HOUSE WITH SHOP to your watchlist" [ref=e709] [cursor=pointer]:
                - img [ref=e713]
            - generic [ref=e718]:
              - 'link "Remuera, Auckland. Listed: Tue, 5 May The White House. Auction on 20 May, 10:00 am" [ref=e720] [cursor=pointer]':
                - /url: /a/property/residential/sale/auckland/auckland-city/remuera/listing/2149723861?rsqid=992dc37144674b9497ddbb3d78a7215d-001
                - generic [ref=e721]:
                  - generic [ref=e722]:
                    - generic [ref=e723]:
                      - generic "Remuera, Auckland." [ref=e724]: Auckland
                      - generic [ref=e725]: "Listed: Tue, 5 May"
                    - generic "The White House." [ref=e726]: The White House
                  - generic [ref=e729]: Auction on 20 May, 10:00 am
              - button "Add The White House to your watchlist" [ref=e730] [cursor=pointer]:
                - img [ref=e734]
            - generic [ref=e739]:
              - 'link "Frankton, Waikato. Listed: Tue, 17 Jul 4 bedroom house. Enquiries over $850,000" [ref=e741] [cursor=pointer]':
                - /url: /a/property/residential/sale/waikato/hamilton/frankton/listing/6850081?rsqid=992dc37144674b9497ddbb3d78a7215d-001
                - generic [ref=e742]:
                  - generic [ref=e743]:
                    - generic [ref=e744]:
                      - generic "Frankton, Waikato." [ref=e745]: Waikato
                      - generic [ref=e746]: "Listed: Tue, 17 Jul"
                    - generic "4 bedroom house." [ref=e747]: 4 bedroom house
                  - generic [ref=e750]: Enquiries over $850,000
              - button "Add 4 bedroom house to your watchlist" [ref=e751] [cursor=pointer]:
                - img [ref=e755]
          - navigation "Pagination" [ref=e758]:
            - list [ref=e759]:
              - listitem [ref=e760]
              - listitem [ref=e761]:
                - link "Current page, page 1" [ref=e763] [cursor=pointer]:
                  - /url: /a/search?search_string=house
                  - text: "1"
              - listitem [ref=e764]:
                - link "Page 2" [ref=e766] [cursor=pointer]:
                  - /url: /a/search?search_string=house&page=2
                  - text: "2"
              - listitem [ref=e767]:
                - link "Page 3" [ref=e769] [cursor=pointer]:
                  - /url: /a/search?search_string=house&page=3
                  - text: "3"
              - listitem [ref=e770]:
                - link "Page 4" [ref=e772] [cursor=pointer]:
                  - /url: /a/search?search_string=house&page=4
                  - text: "4"
              - listitem [ref=e773]:
                - link "Page 5" [ref=e775] [cursor=pointer]:
                  - /url: /a/search?search_string=house&page=5
                  - text: "5"
              - listitem [ref=e776]:
                - link "Page 6" [ref=e778] [cursor=pointer]:
                  - /url: /a/search?search_string=house&page=6
                  - text: "6"
              - listitem [ref=e779]:
                - link "Page 7" [ref=e781] [cursor=pointer]:
                  - /url: /a/search?search_string=house&page=7
                  - text: "7"
              - listitem [ref=e782]: …
              - listitem [ref=e783]:
                - link "Last page, page 234" [ref=e785] [cursor=pointer]:
                  - /url: /a/search?search_string=house&page=234
                  - text: "234"
              - listitem [ref=e786]:
                - link "Next page, page 2" [ref=e788] [cursor=pointer]:
                  - /url: /a/search?search_string=house&page=2
                  - text: Next
          - button "Back to top" [ref=e790] [cursor=pointer]:
            - img [ref=e792]
            - text: Back to top
        - generic:
          - complementary
  - generic [ref=e795]:
    - generic [ref=e796]: We are upgrading some of our systems
    - generic [ref=e797]:
      - link "Learn more" [ref=e798] [cursor=pointer]:
        - /url: https://help.trademe.co.nz/hc/en-us/articles/10226621350159-We-re-upgrading-some-of-our-systems
        - img [ref=e800]
        - text: Learn more
      - button "Tell us what you think" [ref=e804] [cursor=pointer]:
        - img [ref=e806]
        - text: Tell us what you think
  - contentinfo [ref=e808]:
    - generic [ref=e810]:
      - generic [ref=e812]:
        - generic [ref=e814]:
          - list [ref=e815]:
            - listitem [ref=e816]:
              - link "Home" [ref=e818] [cursor=pointer]:
                - /url: /
                - generic "Home" [ref=e819]:
                  - img "Trade Me" [ref=e820]
          - list [ref=e821]:
            - listitem [ref=e822]:
              - generic [ref=e823]:
                - img "Start a listing icon" [ref=e825]
                - link "Start a listing" [ref=e827] [cursor=pointer]:
                  - /url: /a/list
            - listitem [ref=e828]:
              - generic [ref=e829]:
                - img "Watchlist icon" [ref=e831]
                - link "Watchlist" [ref=e833] [cursor=pointer]:
                  - /url: /a/my-trade-me/watchlist
            - listitem [ref=e834]:
              - generic [ref=e835]:
                - img "Favourites icon" [ref=e837]
                - link "Favourites" [ref=e839] [cursor=pointer]:
                  - /url: /a/my-trade-me/favourites
            - listitem [ref=e840]:
              - generic [ref=e842]:
                - generic [ref=e843]:
                  - img "Login icon" [ref=e845]
                  - link "Log in" [ref=e848] [cursor=pointer]:
                    - /url: search(modal:login)?search_string=house
                - generic [ref=e849]:
                  - img "Sign up icon" [ref=e851]
                  - link "Sign up" [ref=e853] [cursor=pointer]:
                    - /url: /a/register
        - generic [ref=e855]:
          - list [ref=e856]:
            - listitem [ref=e857]:
              - generic [ref=e858]:
                - img "Marketplace icon" [ref=e860]
                - link "Marketplace" [ref=e862] [cursor=pointer]:
                  - /url: /a/marketplace
            - listitem [ref=e863]:
              - link "Latest deals" [ref=e865] [cursor=pointer]:
                - /url: /a/marketplace/deals/11
            - listitem [ref=e866]:
              - link "Stores" [ref=e868] [cursor=pointer]:
                - /url: /a/marketplace/stores
            - listitem [ref=e869]:
              - link "Closing soon" [ref=e871] [cursor=pointer]:
                - /url: /a/closing-soon
            - listitem [ref=e872]:
              - link "$1 reserve" [ref=e874] [cursor=pointer]:
                - /url: /a/one-dollar
            - listitem [ref=e875]:
              - link "Home & Living" [ref=e877] [cursor=pointer]:
                - /url: /a/marketplace/home-living
          - list [ref=e878]:
            - listitem [ref=e879]:
              - generic [ref=e880]:
                - img "Property icon" [ref=e882]
                - link "Property" [ref=e884] [cursor=pointer]:
                  - /url: /a/property
            - listitem [ref=e885]:
              - link "International property" [ref=e887] [cursor=pointer]:
                - /url: https://trademeproperty.co.nz/international
            - listitem [ref=e888]:
              - link "Property news & guides" [ref=e890] [cursor=pointer]:
                - /url: https://www.trademe.co.nz/c/property/property-news
            - listitem [ref=e891]:
              - link "Sold Properties" [ref=e893] [cursor=pointer]:
                - /url: property/insights
            - listitem [ref=e894]:
              - link "OneHub for agents" [ref=e896] [cursor=pointer]:
                - /url: https://www.onehub.co.nz
            - listitem [ref=e897]:
              - link "Find a Real Estate Agent" [ref=e899] [cursor=pointer]:
                - /url: /a/property/agent
          - list [ref=e900]:
            - listitem [ref=e901]:
              - generic [ref=e902]:
                - img "Motors icon" [ref=e904]
                - link "Motors" [ref=e906] [cursor=pointer]:
                  - /url: /a/motors
            - listitem [ref=e907]:
              - link "Cars for sale" [ref=e909] [cursor=pointer]:
                - /url: /a/motors/cars
            - listitem [ref=e910]:
              - link "Motorbikes for sale" [ref=e912] [cursor=pointer]:
                - /url: /a/motors/motorbikes-home
            - listitem [ref=e913]:
              - link "Buying & selling advice" [ref=e915] [cursor=pointer]:
                - /url: https://www.trademe.co.nz/c/motors/feature-articles
            - listitem [ref=e916]:
              - link "Dealer news & info" [ref=e918] [cursor=pointer]:
                - /url: https://www.trademe.co.nz/c/dealership/best-practices
            - listitem [ref=e919]:
              - link "Sell my car" [ref=e921] [cursor=pointer]:
                - /url: /a/sell-my-car
          - list [ref=e922]:
            - listitem [ref=e923]:
              - generic [ref=e924]:
                - img "Jobs icon" [ref=e926]
                - link "Jobs" [ref=e929] [cursor=pointer]:
                  - /url: /a/jobs
            - listitem [ref=e930]:
              - link "Browse job categories" [ref=e932] [cursor=pointer]:
                - /url: /a/jobs/categories
            - listitem [ref=e933]:
              - link "Careers advice" [ref=e935] [cursor=pointer]:
                - /url: https://www.trademe.co.nz/c/jobs/careers-advice
            - listitem [ref=e936]:
              - link "JobSmart" [ref=e938] [cursor=pointer]:
                - /url: /jobs/smart/
            - listitem [ref=e939]:
              - link "Advertisers advice" [ref=e941] [cursor=pointer]:
                - /url: https://www.trademe.co.nz/c/employer/advertisers-advice
            - listitem [ref=e942]:
              - link "Salary guide" [ref=e944] [cursor=pointer]:
                - /url: /a/jobs/salary-guide
          - list [ref=e945]:
            - listitem [ref=e946]:
              - generic [ref=e947]:
                - img "Services icon" [ref=e949]
                - link "Services" [ref=e951] [cursor=pointer]:
                  - /url: /a/services
            - listitem [ref=e952]:
              - link "Trades" [ref=e954] [cursor=pointer]:
                - /url: /a/services/trades
            - listitem [ref=e955]:
              - link "Domestic services" [ref=e957] [cursor=pointer]:
                - /url: /a/services/domestic-services
            - listitem [ref=e958]:
              - link "Events & entertainment" [ref=e960] [cursor=pointer]:
                - /url: /a/services/events-entertainment
            - listitem [ref=e961]:
              - link "Health & wellbeing" [ref=e963] [cursor=pointer]:
                - /url: /a/services/health-wellbeing
            - listitem [ref=e964]:
              - link "List my services" [ref=e966] [cursor=pointer]:
                - /url: https://www.tmsandbox.co.nz/Sell/Category.aspx?rfm=1&group=SERVICES&mcat=9334-
          - list [ref=e967]:
            - listitem [ref=e968]:
              - generic [ref=e969]:
                - img "Community icon" [ref=e971]
                - link "Community" [ref=e975] [cursor=pointer]:
                  - /url: /a/community
            - listitem [ref=e976]:
              - link "Help" [ref=e978] [cursor=pointer]:
                - /url: http://ctech.help-sandbox.trademe.kiwi/hc/en-us/
            - listitem [ref=e979]:
              - link "Announcements" [ref=e981] [cursor=pointer]:
                - /url: https://www.trademe.co.nz/c/community/announcements
            - listitem [ref=e982]:
              - link "Trust & safety" [ref=e984] [cursor=pointer]:
                - /url: https://www.trademe.co.nz/c/trust-safety/home
            - listitem [ref=e985]:
              - link "Seller information" [ref=e987] [cursor=pointer]:
                - /url: https://www.trademe.co.nz/c/marketplace/buying-and-selling
            - listitem [ref=e988]:
              - link "Help center community" [ref=e990] [cursor=pointer]:
                - /url: https://help.trademe.co.nz/hc/en-us/community/topics
      - generic [ref=e991]:
        - group "Affiliate links" [ref=e994]:
          - list [ref=e995]:
            - listitem [ref=e996]:
              - link "Trade Me Insurance" [ref=e997] [cursor=pointer]:
                - /url: https://www.trademeinsurance.co.nz/?utm_source=trademe_preview&utm_medium=NavBar&utm_content=TradeMe&utm_campaign=TradeMe_header
            - listitem [ref=e998]:
              - link "homes.co.nz" [ref=e999] [cursor=pointer]:
                - /url: https://homes.co.nz/?utm_source=trademe_preview&utm_medium=navbar&utm_campaign=homepage
            - listitem [ref=e1000]:
              - link "MotorWeb" [ref=e1001] [cursor=pointer]:
                - /url: https://www.motorweb.co.nz/?referral=trademe&utm_source=trademe_preview&utm_medium=text-link&utm_content=free-vehicle-reports&utm_campaign=trademe-header
            - listitem [ref=e1002]:
              - link "CarExpert" [ref=e1003] [cursor=pointer]:
                - /url: https://www.carexpert.co.nz/?referral=trademe&utm_source=trademe_preview&utm_medium=text-link&utm_content=CarExpert&utm_campaign=trademe-header
            - listitem [ref=e1004]:
              - link "Holiday Houses" [ref=e1005] [cursor=pointer]:
                - /url: https://www.holidayhouses.co.nz/?utm_source=trademe_preview&utm_medium=navbar&utm_campaign=homepage
            - listitem [ref=e1006]:
              - link "FindSomeone" [ref=e1007] [cursor=pointer]:
                - /url: https://www.findsomeone.co.nz/?utm_source=trademe_preview&utm_medium=navbar&utm_campaign=homepage
        - generic [ref=e1008]:
          - generic [ref=e1009]: © 2026 Trade Me Limited
          - list [ref=e1012]:
            - listitem [ref=e1013]:
              - link "Desktop site" [ref=e1015] [cursor=pointer]:
                - /url: https://www.tmsandbox.co.nz/MyTradeMe/Default.aspx?rfm=1
            - listitem [ref=e1016]:
              - link "About Us" [ref=e1018] [cursor=pointer]:
                - /url: https://www.trademe.co.nz/c/community/about-us
            - listitem [ref=e1019]:
              - link "Careers" [ref=e1021] [cursor=pointer]:
                - /url: https://www.trademe.co.nz/c/community/careers-at-trade-me
            - listitem [ref=e1022]:
              - link "News" [ref=e1024] [cursor=pointer]:
                - /url: https://www.trademe.co.nz/c/
            - listitem [ref=e1025]:
              - link "Advertise" [ref=e1027] [cursor=pointer]:
                - /url: https://www.trademe.co.nz/c/advertising/advertising
            - listitem [ref=e1028]:
              - link "Privacy policy" [ref=e1030] [cursor=pointer]:
                - /url: http://ctech.help-sandbox.trademe.kiwi/hc/en-us/articles/360007001832
            - listitem [ref=e1031]:
              - link "Terms & conditions" [ref=e1033] [cursor=pointer]:
                - /url: http://ctech.help-sandbox.trademe.kiwi/hc/en-us/articles/360007001532
            - listitem [ref=e1034]:
              - link "Contact Us" [ref=e1036] [cursor=pointer]:
                - /url: http://ctech.help-sandbox.trademe.kiwi/hc/en-us/requests/new?ticket_form_id=360000518892
          - list [ref=e1042]:
            - listitem [ref=e1043]:
              - link "Follow Trade Me on Tiktok" [ref=e1044] [cursor=pointer]:
                - /url: https://www.tiktok.com/@trademe_nz
                - img "Follow Trade Me on Tiktok" [ref=e1046]
            - listitem [ref=e1048]:
              - link "Follow Trade Me on Instagram" [ref=e1049] [cursor=pointer]:
                - /url: https://www.instagram.com/trademe_nz
                - img "Follow Trade Me on Instagram" [ref=e1051]
            - listitem [ref=e1053]:
              - link "Follow Trade Me on Facebook" [ref=e1054] [cursor=pointer]:
                - /url: https://www.facebook.com/TradeMe
                - img "Follow Trade Me on Facebook" [ref=e1056]
            - listitem [ref=e1058]:
              - link "Follow Trade Me on LinkedIn" [ref=e1059] [cursor=pointer]:
                - /url: https://www.linkedin.com/company/trade-me
                - img "Follow Trade Me on LinkedIn" [ref=e1061]
            - listitem [ref=e1063]:
              - link "Follow Trade Me on YouTube" [ref=e1064] [cursor=pointer]:
                - /url: https://www.youtube.com/user/trademe
                - img "Follow Trade Me on YouTube" [ref=e1066]
```

# Test source

```ts
  111 |     });
  112 |   });
  113 | 
  114 |   test.describe('Search Functionality - Negative Scenarios', () => {
  115 |     let homePage: HomePage;
  116 |     let searchResultsPage: SearchResultsPage;
  117 | 
  118 |     test.beforeEach(async ({ page }) => {
  119 |       homePage = new HomePage(page);
  120 |       searchResultsPage = new SearchResultsPage(page);
  121 |       await homePage.goto();
  122 |     });
  123 | 
  124 |     test('@regression @search TC-09: Search with empty input shows appropriate behavior', async ({ page }) => {
  125 |       await homePage.searchInput.fill('');
  126 |       await homePage.searchButton.click();
  127 | 
  128 |       // Should either stay on homepage or show validation
  129 |       // Verify we don't get an error page
  130 |       const url = page.url();
  131 |       expect(url).not.toContain('error');
  132 |     });
  133 | 
  134 |     test('@regression @search TC-10: Search with special characters only returns no results gracefully', async ({ page }) => {
  135 |       await homePage.search('@#$%^&*()');
  136 | 
  137 |       // Should show no results message or handle gracefully
  138 |       const hasNoResults = await searchResultsPage.hasNoResultsMessage();
  139 |       const hasResults = await searchResultsPage.hasResults();
  140 | 
  141 |       // Either no results message or actually no results
  142 |       expect(hasNoResults || !hasResults).toBeTruthy();
  143 |     });
  144 | 
  145 |     test('@regression @search TC-11: Search with extremely long string handles gracefully', async ({ page }) => {
  146 |       const longString = 'a'.repeat(500);
  147 |       await homePage.search(longString);
  148 | 
  149 |       // Should not crash or show error page
  150 |       expect(page.url()).not.toContain('error');
  151 |     });
  152 | 
  153 |     test('@regression @search TC-12: Search with non-existent terms shows no results message', async ({ page }) => {
  154 |       await homePage.search('xyzabc123nonexistentitem999');
  155 | 
  156 |       const hasNoResults = await searchResultsPage.hasNoResultsMessage();
  157 |         expect(hasNoResults).toBeTruthy();
  158 | 
  159 |     });
  160 | 
  161 | 
  162 |   });
  163 | 
  164 |   test.describe('Search Functionality - Edge Cases', () => {
  165 |     let homePage: HomePage;
  166 |     let searchResultsPage: SearchResultsPage;
  167 | 
  168 |     test.beforeEach(async ({ page }) => {
  169 |       homePage = new HomePage(page);
  170 |       searchResultsPage = new SearchResultsPage(page);
  171 |       await homePage.goto();
  172 |     });
  173 | 
  174 | 
  175 |     test('@regression @search TC-16: Search with mixed case returns case-insensitive results', async ({ page }) => {
  176 |       await homePage.search('HoUse');
  177 | 
  178 |       const hasResults = await searchResultsPage.hasResults();
  179 |       expect(hasResults).toBeTruthy();
  180 |     });
  181 | 
  182 |     test('@regression @search TC-17: Search with accents works correctly', async ({ page }) => {
  183 |       await homePage.search('Mānuka Honey');
  184 | 
  185 |       // Should handle special characters without error
  186 |       expect(page.url()).not.toContain('error');
  187 |     });
  188 | 
  189 | 
  190 |   });
  191 | 
  192 |   test.describe('Search Functionality - Non-Functional Tests', () => {
  193 |     let homePage: HomePage;
  194 |     let searchResultsPage: SearchResultsPage;
  195 | 
  196 |     test.beforeEach(async ({ page }) => {
  197 |       homePage = new HomePage(page);
  198 |       searchResultsPage = new SearchResultsPage(page);
  199 |       await homePage.goto();
  200 |     });
  201 | 
  202 |   test('@performance @search TC-20: Search results load within acceptable time', async ({ page }) => {
  203 |     const startTime = Date.now();
  204 |     await homePage.search('house');
  205 |     await expect(
  206 |       searchResultsPage.listingCards.first()
  207 |     ).toBeVisible({ timeout: 10000 });
  208 |     const endTime = Date.now();
  209 | 
  210 |     const loadTime = endTime - startTime;
> 211 |     expect(loadTime).toBeLessThan(3000); // 3 seconds threshold
      |                      ^ Error: expect(received).toBeLessThan(expected)
  212 |   });
  213 | 
  214 |   test.describe('Search Filters - House Search', () => {
  215 | 
  216 |     test('@regression @filters TC-20: Category dropdown filters results', async ({ page }) => {
  217 |       await homePage.search('house');
  218 | 
  219 |       // Wait for results
  220 |       await expect(
  221 |         searchResultsPage.listingCards.first()
  222 |       ).toBeVisible({ timeout: 10000 });
  223 | 
  224 |       // Open category dropdown
  225 |       await page.locator('text=Category').click();
  226 | 
  227 |       // Select category option
  228 |       await page.locator('text=Trade Me Property').first().click();
  229 | 
  230 | 
  231 |       // Verify results still exist
  232 |       await expect(
  233 |         searchResultsPage.listingCards.first()
  234 |       ).toBeVisible({ timeout: 10000 });
  235 | 
  236 |       // Optional URL verification
  237 |       await expect(
  238 |         page.locator('tm-search-header-heading')).toBeVisible();
  239 | 
  240 |     });
  241 | 
  242 |       test('@regression @filters TC-21: Location dropdown filters results', async ({ page }) => {
  243 |         await homePage.search('house');
  244 | 
  245 |         await expect(
  246 |           searchResultsPage.listingCards.first()
  247 |         ).toBeVisible({ timeout: 10000 });
  248 | 
  249 |         // Open location dropdown
  250 |         await page.locator('text=All Locations').click();
  251 |        await page.getByLabel('Region').selectOption({
  252 |       label: 'Auckland'
  253 |     });
  254 |     await page.getByLabel('District').selectOption({
  255 |       label: 'North Shore'
  256 |     });
  257 | 
  258 |    await page.getByRole('button', {
  259 |     name: /View .* results?/i
  260 |   }).click();
  261 | 
  262 |     // Assert the button with both classes contains "North Shore"
  263 |     await expect(page.locator('button:has-text("North Shore")')).toBeVisible({ timeout: 3000 });
  264 |       });
  265 | 
  266 |       test('@regression @search TC-30: Clicking X clears the search bar', async ({ page }) => {
  267 | 
  268 |       // Navigate to homepage
  269 |       await homePage.goto();
  270 | 
  271 |       // Enter search text
  272 |       await homePage.searchInput.fill('house');
  273 | 
  274 |       // Verify text entered
  275 |       await expect(homePage.searchInput).toHaveValue('house');
  276 | 
  277 |       // Click clear/X button
  278 |       await page.locator('[aria-label="Clear input"]').click();
  279 | 
  280 |       // Assert search input is now empty
  281 |       await expect(homePage.searchInput).toHaveValue('');
  282 |     });
  283 | 
  284 |   test('@regression @filters TC-22: Condition dropdown filters results', async ({ page }) => {
  285 |     await homePage.search('house');
  286 | 
  287 |     await expect(
  288 |       searchResultsPage.listingCards.first()
  289 |     ).toBeVisible({ timeout: 10000 });
  290 | 
  291 |     // Open New & Used dropdown
  292 |     await page.locator('text=New & Used').click();
  293 | 
  294 |     // Select Used
  295 |     await page.locator('tg-radio-item').filter({
  296 |       hasText: 'Used only'
  297 |     }).click();
  298 | 
  299 |     await page.getByRole('button', {
  300 |       name: /View .* results?/i
  301 |     }).click();
  302 | 
  303 | 
  304 |     // Verify results displayed
  305 |     await expect(
  306 |       searchResultsPage.listingCards.first()
  307 |     ).toBeVisible({ timeout: 10000 });
  308 |   });
  309 | 
  310 |   test('@smoke @filters TC-23: Shipping dropdown displays results correctly', async ({ page }) => {
  311 |     await homePage.search('suzuki');
```
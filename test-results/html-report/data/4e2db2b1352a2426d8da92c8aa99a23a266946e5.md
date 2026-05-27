# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: search.spec.ts >> Search Functionality - Non-Functional Tests >> @performance @search TC-13: Search results load within acceptable time
- Location: src\tests\search.spec.ts:246:7

# Error details

```
Error: expect(received).toBeLessThan(expected)

Expected: < 3000
Received:   4222
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
            - link "Trade Me Property (5,144)" [ref=e170] [cursor=pointer]:
              - /url: /a/property/search?search_string=house
          - listitem [ref=e171]:
            - link "Business, farming & industry (6)" [ref=e172] [cursor=pointer]:
              - /url: /a/marketplace/business-farming-industry/search?search_string=house
          - listitem [ref=e173]:
            - link "Trade Me Jobs (5)" [ref=e174] [cursor=pointer]:
              - /url: /a/jobs/search?search_string=house
        - generic [ref=e176]:
          - heading "Showing 5,155 results for 'house'" [level=3] [ref=e178]
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
            - generic [ref=e219]:
              - text: Advertisement
              - iframe [ref=e223]:
                - iframe [ref=f9e2]:
                  - generic [ref=f12e2]:
                    - iframe [ref=f12e4]:
                      - generic [active] [ref=f13e1]:
                        - generic [ref=f13e2]:
                          - link "ad" [ref=f13e3] [cursor=pointer]:
                            - /url: https://static.mediagotechnology.com/js/mediagotechnology/officialWebsite/privacy.html
                            - img [ref=f13e4]
                          - link [ref=f13e6] [cursor=pointer]:
                            - /url: "https://go-as.mediagotechnology.com/ju/ic?tn=c910685a5d6ad3a65ba316b604c54d47&trackingid=4e7ee459b600fa56c68ff4e1deb5dd81&acid=35157&data=hp1BQqvyxFltL3HF9ppa1P1fLTT4jO_LIpSAHYL97QrAlq_ryazquahlZsOAKHekWl0h5GqOdiHX6ELTyy-NgkAY7qQldz-0ZmfHwUMRl_ef9YhYpX_zfne2YgL2T6OoV4mEhKcuefztpug4_joTKQECWNczSJp-N42OBdta_4XO0LBxS5SWvxZRa2_n3O6PxYa1G3hacgwqzYIhOkNXwHwKBK-LW5yW9CWclECNOeNFRkBz7ahyavRfR8IeVICx5Az_tYsxdYLBwPBNqq8nWYW6JNDzU4ojVEhWwaFvtK9sbGAber3RWi6OgLsE3pCHxB7rQC8KjUlJ0PWQLGXCdZzjqjKQfbdDDD3F23DCKsZf1IZY0fXQY3zGmJ4WLkt2Vi4la6ISEY6C9I3L6KsplL8WLjRoNKZzpl0xnhmJPXA_lyEuKU5FoJuabJ4l5BhyciDbi0MPD8YVrTDyjdWFnMbA0Lgo9sAJmLROxbFDoJTpTlQ_YKtjiXkjpqeBLbJiX5Jg8o6h4I-b0OxaoTvJMU6zccL-g15zplShPEV6Bg6pWzndNnkuJIatI6Sj9YBOR6Iexzsx_8IH16-q8qUeCH-A5--bY7yYhzd2GvrchdM0XMCVSOWl5XtOg_usC14hTHZFcIzUvYAjSKympANtLcyMOp0Gdzzc4wJe004043bYi1CHJCxS7q1WebipL_todzCMQ341-eaB27VWSbXpGEgphkFghh_UFesg4oxvobRIhGoVNy77b9qjJkQF-FC06_2ljknR8_ayva4XiyzSRAMMWYpkyMpFJtQfmZtZr2k_J5L7jdJlaHjKouBXc4e8k5kiub-Ew71qT2aQMdoZpWgZzoIODPMy7bUN7FZnMXycDMuupVYMxvWnRfszlY-QPUkSTN3RzxGkZ8RKKlZ-15lRF-L48sSiFjN6tWPv00-YqBRQrpwYNnVXNpgLy8ZHysX0R4lC8eVeGKYWfIZxTP2Mj37UaCDod3-QfkIzchbRNPaB3q1Uuw2MyC9F0oLhbOLCxbuMnwGov4aR5zRN3CWAgz83SFlumhgW-lEflMYT5C7VCPbyZjOVHFI7rK1EFEY9lBDMOMCDUKfkOcm5mq5ScVMZ4PeVKx_OmskcxXgeaE86gqe1jTTA-O5ErA87tcPI7ZqMO9bnfr6NBjN8vw43MY2NcqEFi_FhVpIeqm_RU9_nw4TvGqvAB_0B7XcnRTGC-8GsjReFYmNEeRAtZuaYgy3jYmwxe5iqkvFodA8WlqO2crFDEy3DYPr8zGRUVPd5BJE3kk-ynGgInoacuN87U0XBnUaw3RAuBdTPAUrmmc1zYiYkPntq4zs9akg9DkOVvSxNWizqr97IsqFcnMjU0E1oGH3L1kYjaaIPoGW3-xCwDnE9zgujVacpuW04hpG8kpIZ1PCRtZ3wV_gVcpKZLdByN2TbhW3uIwM96hjJE0P6p-T7PJ53FG06VMdw7AcoJDbnR173Qd79BiX2ppfZQ_8TSt59Grmxe_EF_5YKcR_TD0GPMG1PoHvQby_eX8e9V-B65u4MQ5nJN7aeSb627lfZ7hHuIQkqOANshKgz-1G_R6mvyrRANF7gDc4jZCiTsa7kZh4yPVSpDWpn1OkObPQNqi1ajs-QJNLrWDES7zy1mv_YEV_y0URoMPz9elg_fkd-o0ixoskw4GSN-nOeEneKvyKUtyQg32ZJNKv8cuw6hmPPLgyUlu14G7FzUUtXwgxyFsSeTTL3GmIJIJpUHNHBcGSODBrxPG3Asb77RIBr3ksquffKm6CZfknleXERqp9yHzf1EBsIV5N5Fbd0T3WQbC-Ej2WAyEtXGJJSZgHOdNIjedrhSAQnw4KhFjige9rk2MZT6NvVdaxqAUl7MWTWWMtkYLCoJSPgWAB0drA1a-1UKCmWSa_sCqMTIpF0it42TltcG8h6zfz-PRrjLiBXSUrqwWmRP7LKAA6HaeimuZSDQvKWGa7g_sw2JWegtwGedfuTVWe3KnZTJ_Rf0ipPbFr3oi0MRLOVnbY&uid=mid_0bb882ff9b9211a24347ec21c20abbc1&mguid=&ap={AUCTION_PRICE}&tid=30&gprice=0fzicjXiQ73YTGGVnwrXdoS4hgQbNd4kOT9QuftBoFs&campaignid=5161291&c_sync=1"
                            - img [ref=f13e7]
                        - iframe [ref=f13e8]:
                          
                        - img [ref=f13e9]
                        - img
                    - img [ref=f12e6] [cursor=pointer]
            - generic [ref=e226]:
              - text: Advertisement
              - iframe [ref=e230]:
                - generic [ref=f10e1]:
                  - link [ref=f10e2] [cursor=pointer]:
                    - /url: https://googleads.g.doubleclick.net/pcs/click?xai=AKAOjstmb1sZ4QXmDxT5TGPRLNPcWABVnJBwMl4VMKU_edIv5el9vzo_TssQkiavFG3DtIUoKzxuWKDp2Xc4O9YdEdDNGsmTGuB1dMhhOluE81IgGtbYQpQH73GOtoTuuPIQEtvzvfIYrM1YC0YhfBAzfoqrCmhwZD-3ZAXR2rYeLdZ_FI85v2WJWpC6B4vVenO54QnrmSdzldhm_yNSky7ROWSZrpEcRLrZpMGgR3R9eTV9OYOiPMEq-ly6u_gI8jHDhezVkQnjgXHKDwrrUJEe0ZAHl5F_S9C_DIDS7Fx-J-MdNpOwtdlnbJ9uOHM2VtNPVyRqdYLy2DcpW5xsWEptU0OE0GTW2o5vsKVn3xAyDUDmPvVYjjuEd8iv0gUrtf4uBQ25nbf6pPX5cLodVJV17AiNeedlsMAHZb4&sai=AMfl-YSQq11J6tn_-xA4kA7Z41y_2fa7eTZvYwZpHp_U2xM2kqUKUQJ9Cd7uN5jOZVCILo4Bcioz_wX98cjg09XL6FpbJvU3v67-b6uY1Gv5jGZRyB_162k2Z3ffN2jz6HG9H0Zm30zzhJ8UwVfmJD9xT8fNW5l84K64faqMWrv87uLIgDaAJ-9Xvn_tcboZp40xP0v2rzbkFChE_pMa8n__3yvf4cFhDULlT01R41iRQ7yaB8ndMsvJJWyw6mqZ-8DeUQqlqEtiNisQqLtbOiBjw1jGCJVopvBR_PNnTgdI3EFroR9iY7M1ygNinJWrALzll2FtjqORlpZ4XBpCm5PWrCuIUSZZRxo2-3hHJxDpqIqJrtjyS4IMmkBScOK4Xyp-MGs8ubZboF7JZKDY4LDs4ZNM&sig=Cg0ArKJSzLfT0LmXwRY5&fbs_aeid=%5Bgw_fbsaeid%5D&adurl=https://www.trademe.co.nz/a/jobs/list-a-job%3Futm_source%3Din%2Bhouse%2B%26utm_medium%3Ddisplay%26utm_campaign%3DProjectIgnite
                  - img [ref=f10e6] [cursor=pointer]
                  - button [ref=f10e8] [cursor=pointer]:
                    - img [ref=f10e9]
            - generic [ref=e234]:
              - generic [ref=e235]:
                - 'link "Ahipara, Northland. Listed: Fri, 29 Apr House. Asking price $12" [ref=e236] [cursor=pointer]':
                  - /url: /a/property/residential/sale/northland/far-north/ahipara/listing/4620036?rsqid=65c77fc311bc479685c416a774de9d6e-001
                  - generic [ref=e237]:
                    - generic [ref=e238]:
                      - generic [ref=e239]:
                        - generic "Ahipara, Northland." [ref=e240]: Northland
                        - generic [ref=e241]: "Listed: Fri, 29 Apr"
                      - generic "House." [ref=e242]: House
                    - generic [ref=e245]: Asking price $12
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
              - button "Add House to your watchlist" [ref=e246] [cursor=pointer]:
                - img [ref=e250]
            - generic [ref=e255]:
              - generic [ref=e256]:
                - 'link "Ahipara, Northland. Listed: Fri, 29 Apr House. Asking price $20" [ref=e257] [cursor=pointer]':
                  - /url: /a/property/residential/sale/northland/far-north/ahipara/listing/4619953?rsqid=65c77fc311bc479685c416a774de9d6e-001
                  - generic [ref=e258]:
                    - generic [ref=e259]:
                      - generic [ref=e260]:
                        - generic "Ahipara, Northland." [ref=e261]: Northland
                        - generic [ref=e262]: "Listed: Fri, 29 Apr"
                      - generic "House." [ref=e263]: House
                    - generic [ref=e266]: Asking price $20
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
                          - button "Previous image" [ref=e267] [cursor=pointer]:
                            - img "Previous image" [ref=e270]
                          - button "Next image" [ref=e272] [cursor=pointer]:
                            - img "Next image" [ref=e275]
              - button "Add House to your watchlist" [ref=e277] [cursor=pointer]:
                - img [ref=e281]
            - generic [ref=e286]:
              - generic [ref=e287]:
                - 'link "Karetu, Northland. Listed: Mon, 17 Oct House. Price by negotiation" [ref=e288] [cursor=pointer]':
                  - /url: /a/property/residential/sale/northland/far-north/karetu/listing/2149459592?rsqid=65c77fc311bc479685c416a774de9d6e-001
                  - generic [ref=e289]:
                    - generic [ref=e290]:
                      - generic [ref=e291]:
                        - generic "Karetu, Northland." [ref=e292]: Northland
                        - generic [ref=e293]: "Listed: Mon, 17 Oct"
                      - generic "House." [ref=e294]: House
                    - generic [ref=e297]: Price by negotiation
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
                          - button "Previous image" [ref=e298] [cursor=pointer]:
                            - img "Previous image" [ref=e301]
                          - button "Next image" [ref=e303] [cursor=pointer]:
                            - img "Next image" [ref=e306]
              - button "Add House to your watchlist" [ref=e308] [cursor=pointer]:
                - img [ref=e312]
            - generic [ref=e317]:
              - generic [ref=e318]:
                - 'link "Karetu, Northland. Listed: Mon, 17 Oct House. Price by negotiation" [ref=e319] [cursor=pointer]':
                  - /url: /a/property/residential/sale/northland/far-north/karetu/listing/2149459590?rsqid=65c77fc311bc479685c416a774de9d6e-001
                  - generic [ref=e320]:
                    - generic [ref=e321]:
                      - generic [ref=e322]:
                        - generic "Karetu, Northland." [ref=e323]: Northland
                        - generic [ref=e324]: "Listed: Mon, 17 Oct"
                      - generic "House." [ref=e325]: House
                    - generic [ref=e328]: Price by negotiation
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
                          - button "Previous image" [ref=e329] [cursor=pointer]:
                            - img "Previous image" [ref=e332]
                          - button "Next image" [ref=e334] [cursor=pointer]:
                            - img "Next image" [ref=e337]
              - button "Add House to your watchlist" [ref=e339] [cursor=pointer]:
                - img [ref=e343]
            - generic [ref=e348]:
              - generic [ref=e349]:
                - 'link "Trentham, Wellington. Listed: Sun, 19 Feb Wellington house. Asking price $450,000" [ref=e350] [cursor=pointer]':
                  - /url: /a/property/residential/sale/wellington/upper-hutt/trentham/listing/5331884?rsqid=65c77fc311bc479685c416a774de9d6e-001
                  - generic [ref=e351]:
                    - generic [ref=e352]:
                      - generic [ref=e353]:
                        - generic "Trentham, Wellington." [ref=e354]: Wellington
                        - generic [ref=e355]: "Listed: Sun, 19 Feb"
                      - generic "Wellington house." [ref=e356]: Wellington house
                    - generic [ref=e359]: Asking price $450,000
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
                          - button "Previous image" [ref=e360] [cursor=pointer]:
                            - img "Previous image" [ref=e363]
                          - button "Next image" [ref=e365] [cursor=pointer]:
                            - img "Next image" [ref=e368]
              - button "Add Wellington house to your watchlist" [ref=e370] [cursor=pointer]:
                - img [ref=e374]
            - generic [ref=e379]:
              - generic [ref=e380]:
                - 'link "Haast, West Coast. Listed: Tue, 19 Aug The Dolls House. Asking price $250,000" [ref=e381] [cursor=pointer]':
                  - /url: /a/property/residential/sale/west-coast/westland/haast/listing/3603468?rsqid=65c77fc311bc479685c416a774de9d6e-001
                  - generic [ref=e382]:
                    - generic [ref=e383]:
                      - generic [ref=e384]:
                        - generic "Haast, West Coast." [ref=e385]: West Coast
                        - generic [ref=e386]: "Listed: Tue, 19 Aug"
                      - generic "The Dolls House." [ref=e387]: The Dolls House
                    - generic [ref=e390]: Asking price $250,000
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
                          - button "Previous image" [ref=e391] [cursor=pointer]:
                            - img "Previous image" [ref=e394]
                          - button "Next image" [ref=e396] [cursor=pointer]:
                            - img "Next image" [ref=e399]
              - button "Add The Dolls House to your watchlist" [ref=e401] [cursor=pointer]:
                - img [ref=e405]
            - generic [ref=e410]:
              - generic [ref=e411]:
                - 'link "Greenlane, Auckland. Listed: Wed, 12 Oct Great House. Asking price $800,000" [ref=e412] [cursor=pointer]':
                  - /url: /a/property/residential/sale/auckland/auckland-city/greenlane/listing/2149458813?rsqid=65c77fc311bc479685c416a774de9d6e-001
                  - generic [ref=e413]:
                    - generic [ref=e414]:
                      - generic [ref=e415]:
                        - generic "Greenlane, Auckland." [ref=e416]: Auckland
                        - generic [ref=e417]: "Listed: Wed, 12 Oct"
                      - generic "Great House." [ref=e418]: Great House
                    - generic [ref=e421]: Asking price $800,000
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
                          - button "Previous image" [ref=e422] [cursor=pointer]:
                            - img "Previous image" [ref=e425]
                          - button "Next image" [ref=e427] [cursor=pointer]:
                            - img "Next image" [ref=e430]
              - button "Add Great House to your watchlist" [ref=e432] [cursor=pointer]:
                - img [ref=e436]
            - generic [ref=e441]:
              - generic [ref=e442]:
                - 'link "Chartwell, Waikato. Listed: Thu, 26 May A house for you!. Asking price $1,000,000" [ref=e443] [cursor=pointer]':
                  - /url: /a/property/residential/sale/waikato/hamilton/chartwell/listing/2149422045?rsqid=65c77fc311bc479685c416a774de9d6e-001
                  - generic [ref=e444]:
                    - generic [ref=e445]:
                      - generic [ref=e446]:
                        - generic "Chartwell, Waikato." [ref=e447]: Waikato
                        - generic [ref=e448]: "Listed: Thu, 26 May"
                      - generic "A house for you!." [ref=e449]: A house for you!
                    - generic [ref=e452]: Asking price $1,000,000
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
                          - button "Previous image" [ref=e453] [cursor=pointer]:
                            - img "Previous image" [ref=e456]
                          - button "Next image" [ref=e458] [cursor=pointer]:
                            - img "Next image" [ref=e461]
              - button "Add A house for you! to your watchlist" [ref=e463] [cursor=pointer]:
                - img [ref=e467]
            - generic [ref=e472]:
              - 'link "Waikawa Beach, Manawatu / Whanganui. Listed: Fri, 24 Nov Our House. Asking price $500,000" [ref=e474] [cursor=pointer]':
                - /url: /a/property/residential/sale/manawatu-whanganui/horowhenua/waikawa-beach/listing/6203105?rsqid=65c77fc311bc479685c416a774de9d6e-001
                - generic [ref=e475]:
                  - generic [ref=e476]:
                    - generic [ref=e477]:
                      - generic "Waikawa Beach, Manawatu / Whanganui." [ref=e478]: Manawatu / Whanganui
                      - generic [ref=e479]: "Listed: Fri, 24 Nov"
                    - generic "Our House." [ref=e480]: Our House
                  - generic [ref=e483]: Asking price $500,000
              - button "Add Our House to your watchlist" [ref=e484] [cursor=pointer]:
                - img [ref=e488]
            - generic [ref=e493]:
              - 'link "Waikawa Beach, Manawatu / Whanganui. Listed: Fri, 24 Nov Our House. Asking price $500,000" [ref=e495] [cursor=pointer]':
                - /url: /a/property/residential/sale/manawatu-whanganui/horowhenua/waikawa-beach/listing/6203222?rsqid=65c77fc311bc479685c416a774de9d6e-001
                - generic [ref=e496]:
                  - generic [ref=e497]:
                    - generic [ref=e498]:
                      - generic "Waikawa Beach, Manawatu / Whanganui." [ref=e499]: Manawatu / Whanganui
                      - generic [ref=e500]: "Listed: Fri, 24 Nov"
                    - generic "Our House." [ref=e501]: Our House
                  - generic [ref=e504]: Asking price $500,000
              - button "Add Our House to your watchlist" [ref=e505] [cursor=pointer]:
                - img [ref=e509]
            - generic [ref=e514]:
              - 'link "Mangawhai Heads, Northland. Listed: Wed, 10 Jun Trendier Beach House. Asking price $850,000" [ref=e516] [cursor=pointer]':
                - /url: /a/property/residential/sale/northland/kaipara/mangawhai-heads/listing/4154414?rsqid=65c77fc311bc479685c416a774de9d6e-001
                - generic [ref=e517]:
                  - generic [ref=e518]:
                    - generic [ref=e519]:
                      - generic "Mangawhai Heads, Northland." [ref=e520]: Northland
                      - generic [ref=e521]: "Listed: Wed, 10 Jun"
                    - generic "Trendier Beach House." [ref=e522]: Trendier Beach House
                  - generic [ref=e525]: Asking price $850,000
              - button "Add Trendier Beach House to your watchlist" [ref=e526] [cursor=pointer]:
                - img [ref=e530]
            - generic [ref=e535]:
              - 'link "Huapai, Auckland. Listed: Thu, 14 May Award Winning Master Builder House of the year. Price by negotiation" [ref=e537] [cursor=pointer]':
                - /url: /a/property/new-homes/new-house/auckland/rodney/huapai/listing/2149724211?rsqid=65c77fc311bc479685c416a774de9d6e-001
                - generic [ref=e538]:
                  - generic [ref=e539]:
                    - generic [ref=e540]:
                      - generic "Huapai, Auckland." [ref=e541]: Auckland
                      - generic [ref=e542]: "Listed: Thu, 14 May"
                    - generic "Award Winning Master Builder House of the year." [ref=e543]: Award Winning Master Builder House of the year
                  - generic [ref=e546]: Price by negotiation
              - button "Add Award Winning Master Builder House of the year to your watchlist" [ref=e547] [cursor=pointer]:
                - img [ref=e551]
            - generic [ref=e556]:
              - 'link "Diamond Harbour, Canterbury. Listed: Sat, 17 Oct A Big Little House. Asking price $379,000" [ref=e558] [cursor=pointer]':
                - /url: /a/property/residential/sale/canterbury/banks-peninsula/diamond-harbour/listing/4325104?rsqid=65c77fc311bc479685c416a774de9d6e-001
                - generic [ref=e559]:
                  - generic [ref=e560]:
                    - generic [ref=e561]:
                      - generic "Diamond Harbour, Canterbury." [ref=e562]: Canterbury
                      - generic [ref=e563]: "Listed: Sat, 17 Oct"
                    - generic "A Big Little House." [ref=e564]: A Big Little House
                  - generic [ref=e567]: Asking price $379,000
              - button "Add A Big Little House to your watchlist" [ref=e568] [cursor=pointer]:
                - img [ref=e572]
            - generic [ref=e577]:
              - 'link "Diamond Harbour, Canterbury. Listed: Sat, 17 Oct A Big Little House. Asking price $379,000" [ref=e579] [cursor=pointer]':
                - /url: /a/property/residential/sale/canterbury/banks-peninsula/diamond-harbour/listing/4325108?rsqid=65c77fc311bc479685c416a774de9d6e-001
                - generic [ref=e580]:
                  - generic [ref=e581]:
                    - generic [ref=e582]:
                      - generic "Diamond Harbour, Canterbury." [ref=e583]: Canterbury
                      - generic [ref=e584]: "Listed: Sat, 17 Oct"
                    - generic "A Big Little House." [ref=e585]: A Big Little House
                  - generic [ref=e588]: Asking price $379,000
              - button "Add A Big Little House to your watchlist" [ref=e589] [cursor=pointer]:
                - img [ref=e593]
            - generic [ref=e598]:
              - 'link "Huapai, Auckland. Listed: Sun, 16 Nov Award Winning Master Builder House of the year. Price by negotiation" [ref=e600] [cursor=pointer]':
                - /url: /a/property/new-homes/new-house/auckland/rodney/huapai/listing/2149717339?rsqid=65c77fc311bc479685c416a774de9d6e-001
                - generic [ref=e601]:
                  - generic [ref=e602]:
                    - generic [ref=e603]:
                      - generic "Huapai, Auckland." [ref=e604]: Auckland
                      - generic [ref=e605]: "Listed: Sun, 16 Nov"
                    - generic "Award Winning Master Builder House of the year." [ref=e606]: Award Winning Master Builder House of the year
                  - generic [ref=e609]: Price by negotiation
              - button "Add Award Winning Master Builder House of the year to your watchlist" [ref=e610] [cursor=pointer]:
                - img [ref=e614]
            - generic [ref=e619]:
              - 'link "Huapai, Auckland. Listed: Sun, 1 Mar Award Winning Master Builder House of the year. Price by negotiation" [ref=e621] [cursor=pointer]':
                - /url: /a/property/new-homes/new-house/auckland/rodney/huapai/listing/2149721339?rsqid=65c77fc311bc479685c416a774de9d6e-001
                - generic [ref=e622]:
                  - generic [ref=e623]:
                    - generic [ref=e624]:
                      - generic "Huapai, Auckland." [ref=e625]: Auckland
                      - generic [ref=e626]: "Listed: Sun, 1 Mar"
                    - generic "Award Winning Master Builder House of the year." [ref=e627]: Award Winning Master Builder House of the year
                  - generic [ref=e630]: Price by negotiation
              - button "Add Award Winning Master Builder House of the year to your watchlist" [ref=e631] [cursor=pointer]:
                - img [ref=e635]
            - generic [ref=e640]:
              - 'link "City Centre, Canterbury. Listed: Wed, 26 Sep House is a Little Giant. Enquiries over $1,000,000" [ref=e642] [cursor=pointer]':
                - /url: /a/property/residential/sale/canterbury/christchurch-city/city-centre/listing/6891200?rsqid=65c77fc311bc479685c416a774de9d6e-001
                - generic [ref=e643]:
                  - generic [ref=e644]:
                    - generic [ref=e645]:
                      - generic "City Centre, Canterbury." [ref=e646]: Canterbury
                      - generic [ref=e647]: "Listed: Wed, 26 Sep"
                    - generic "House is a Little Giant." [ref=e648]: House is a Little Giant
                  - generic [ref=e651]: Enquiries over $1,000,000
              - button "Add House is a Little Giant to your watchlist" [ref=e652] [cursor=pointer]:
                - img [ref=e656]
            - generic [ref=e661]:
              - 'link "Queensberry, Otago. Listed: Tue, 14 May Residential house. Asking price $02" [ref=e663] [cursor=pointer]':
                - /url: /a/property/residential/sale/otago/wanaka/queensberry/listing/2149609471?rsqid=65c77fc311bc479685c416a774de9d6e-001
                - generic [ref=e664]:
                  - generic [ref=e665]:
                    - generic [ref=e666]:
                      - generic "Queensberry, Otago." [ref=e667]: Otago
                      - generic [ref=e668]: "Listed: Tue, 14 May"
                    - generic "Residential house." [ref=e669]: Residential house
                  - generic [ref=e672]: Asking price $02
              - button "Add Residential house to your watchlist" [ref=e673] [cursor=pointer]:
                - img [ref=e677]
            - generic [ref=e682]:
              - 'link "St. Albans, Canterbury. Listed: Tue, 5 Nov House in Two Flats.. Price by negotiation" [ref=e684] [cursor=pointer]':
                - /url: /a/property/residential/sale/canterbury/christchurch-city/st-albans/listing/1678698?rsqid=65c77fc311bc479685c416a774de9d6e-001
                - generic [ref=e685]:
                  - generic [ref=e686]:
                    - generic [ref=e687]:
                      - generic "St. Albans, Canterbury." [ref=e688]: Canterbury
                      - generic [ref=e689]: "Listed: Tue, 5 Nov"
                    - generic "House in Two Flats.." [ref=e690]: House in Two Flats.
                  - generic [ref=e693]: Price by negotiation
              - button "Add House in Two Flats. to your watchlist" [ref=e694] [cursor=pointer]:
                - img [ref=e698]
            - generic [ref=e703]:
              - 'link "Birkenhead, Auckland. Listed: Thu, 24 Aug HOUSE WITH SHOP. Auction on 7 Sept, 12:00 pm" [ref=e705] [cursor=pointer]':
                - /url: /a/property/residential/sale/auckland/north-shore-city/birkenhead/listing/2149555090?rsqid=65c77fc311bc479685c416a774de9d6e-001
                - generic [ref=e706]:
                  - generic [ref=e707]:
                    - generic [ref=e708]:
                      - generic "Birkenhead, Auckland." [ref=e709]: Auckland
                      - generic [ref=e710]: "Listed: Thu, 24 Aug"
                    - generic "HOUSE WITH SHOP." [ref=e711]: HOUSE WITH SHOP
                  - generic [ref=e714]: Auction on 7 Sept, 12:00 pm
              - button "Add HOUSE WITH SHOP to your watchlist" [ref=e715] [cursor=pointer]:
                - img [ref=e719]
            - generic [ref=e724]:
              - 'link "Remuera, Auckland. Listed: Tue, 5 May The White House. Auction on 20 May, 10:00 am" [ref=e726] [cursor=pointer]':
                - /url: /a/property/residential/sale/auckland/auckland-city/remuera/listing/2149723861?rsqid=65c77fc311bc479685c416a774de9d6e-001
                - generic [ref=e727]:
                  - generic [ref=e728]:
                    - generic [ref=e729]:
                      - generic "Remuera, Auckland." [ref=e730]: Auckland
                      - generic [ref=e731]: "Listed: Tue, 5 May"
                    - generic "The White House." [ref=e732]: The White House
                  - generic [ref=e735]: Auction on 20 May, 10:00 am
              - button "Add The White House to your watchlist" [ref=e736] [cursor=pointer]:
                - img [ref=e740]
            - generic [ref=e745]:
              - 'link "Frankton, Waikato. Listed: Tue, 17 Jul 4 bedroom house. Enquiries over $850,000" [ref=e747] [cursor=pointer]':
                - /url: /a/property/residential/sale/waikato/hamilton/frankton/listing/6850081?rsqid=65c77fc311bc479685c416a774de9d6e-001
                - generic [ref=e748]:
                  - generic [ref=e749]:
                    - generic [ref=e750]:
                      - generic "Frankton, Waikato." [ref=e751]: Waikato
                      - generic [ref=e752]: "Listed: Tue, 17 Jul"
                    - generic "4 bedroom house." [ref=e753]: 4 bedroom house
                  - generic [ref=e756]: Enquiries over $850,000
              - button "Add 4 bedroom house to your watchlist" [ref=e757] [cursor=pointer]:
                - img [ref=e761]
          - navigation "Pagination" [ref=e764]:
            - list [ref=e765]:
              - listitem [ref=e766]
              - listitem [ref=e767]:
                - link "Current page, page 1" [ref=e769] [cursor=pointer]:
                  - /url: /a/search?search_string=house
                  - text: "1"
              - listitem [ref=e770]:
                - link "Page 2" [ref=e772] [cursor=pointer]:
                  - /url: /a/search?search_string=house&page=2
                  - text: "2"
              - listitem [ref=e773]:
                - link "Page 3" [ref=e775] [cursor=pointer]:
                  - /url: /a/search?search_string=house&page=3
                  - text: "3"
              - listitem [ref=e776]:
                - link "Page 4" [ref=e778] [cursor=pointer]:
                  - /url: /a/search?search_string=house&page=4
                  - text: "4"
              - listitem [ref=e779]:
                - link "Page 5" [ref=e781] [cursor=pointer]:
                  - /url: /a/search?search_string=house&page=5
                  - text: "5"
              - listitem [ref=e782]:
                - link "Page 6" [ref=e784] [cursor=pointer]:
                  - /url: /a/search?search_string=house&page=6
                  - text: "6"
              - listitem [ref=e785]:
                - link "Page 7" [ref=e787] [cursor=pointer]:
                  - /url: /a/search?search_string=house&page=7
                  - text: "7"
              - listitem [ref=e788]: …
              - listitem [ref=e789]:
                - link "Last page, page 235" [ref=e791] [cursor=pointer]:
                  - /url: /a/search?search_string=house&page=235
                  - text: "235"
              - listitem [ref=e792]:
                - link "Next page, page 2" [ref=e794] [cursor=pointer]:
                  - /url: /a/search?search_string=house&page=2
                  - text: Next
          - button "Back to top" [ref=e796] [cursor=pointer]:
            - img [ref=e798]
            - text: Back to top
        - generic:
          - complementary
  - generic [ref=e801]:
    - generic [ref=e802]: We are upgrading some of our systems
    - generic [ref=e803]:
      - link "Learn more" [ref=e804] [cursor=pointer]:
        - /url: https://help.trademe.co.nz/hc/en-us/articles/10226621350159-We-re-upgrading-some-of-our-systems
        - img [ref=e806]
        - text: Learn more
      - button "Tell us what you think" [ref=e810] [cursor=pointer]:
        - img [ref=e812]
        - text: Tell us what you think
  - contentinfo [ref=e814]:
    - generic [ref=e816]:
      - generic [ref=e818]:
        - generic [ref=e820]:
          - list [ref=e821]:
            - listitem [ref=e822]:
              - link "Home" [ref=e824] [cursor=pointer]:
                - /url: /
                - generic "Home" [ref=e825]:
                  - img "Trade Me" [ref=e826]
          - list [ref=e827]:
            - listitem [ref=e828]:
              - generic [ref=e829]:
                - img "Start a listing icon" [ref=e831]
                - link "Start a listing" [ref=e833] [cursor=pointer]:
                  - /url: /a/list
            - listitem [ref=e834]:
              - generic [ref=e835]:
                - img "Watchlist icon" [ref=e837]
                - link "Watchlist" [ref=e839] [cursor=pointer]:
                  - /url: /a/my-trade-me/watchlist
            - listitem [ref=e840]:
              - generic [ref=e841]:
                - img "Favourites icon" [ref=e843]
                - link "Favourites" [ref=e845] [cursor=pointer]:
                  - /url: /a/my-trade-me/favourites
            - listitem [ref=e846]:
              - generic [ref=e848]:
                - generic [ref=e849]:
                  - img "Login icon" [ref=e851]
                  - link "Log in" [ref=e854] [cursor=pointer]:
                    - /url: search(modal:login)?search_string=house
                - generic [ref=e855]:
                  - img "Sign up icon" [ref=e857]
                  - link "Sign up" [ref=e859] [cursor=pointer]:
                    - /url: /a/register
        - generic [ref=e861]:
          - list [ref=e862]:
            - listitem [ref=e863]:
              - generic [ref=e864]:
                - img "Marketplace icon" [ref=e866]
                - link "Marketplace" [ref=e868] [cursor=pointer]:
                  - /url: /a/marketplace
            - listitem [ref=e869]:
              - link "Latest deals" [ref=e871] [cursor=pointer]:
                - /url: /a/marketplace/deals/11
            - listitem [ref=e872]:
              - link "Stores" [ref=e874] [cursor=pointer]:
                - /url: /a/marketplace/stores
            - listitem [ref=e875]:
              - link "Closing soon" [ref=e877] [cursor=pointer]:
                - /url: /a/closing-soon
            - listitem [ref=e878]:
              - link "$1 reserve" [ref=e880] [cursor=pointer]:
                - /url: /a/one-dollar
            - listitem [ref=e881]:
              - link "Home & Living" [ref=e883] [cursor=pointer]:
                - /url: /a/marketplace/home-living
          - list [ref=e884]:
            - listitem [ref=e885]:
              - generic [ref=e886]:
                - img "Property icon" [ref=e888]
                - link "Property" [ref=e890] [cursor=pointer]:
                  - /url: /a/property
            - listitem [ref=e891]:
              - link "International property" [ref=e893] [cursor=pointer]:
                - /url: https://trademeproperty.co.nz/international
            - listitem [ref=e894]:
              - link "Property news & guides" [ref=e896] [cursor=pointer]:
                - /url: https://www.trademe.co.nz/c/property/property-news
            - listitem [ref=e897]:
              - link "Sold Properties" [ref=e899] [cursor=pointer]:
                - /url: /a/property/insights
            - listitem [ref=e900]:
              - link "OneHub for agents" [ref=e902] [cursor=pointer]:
                - /url: https://onehub.trademe.co.nz
            - listitem [ref=e903]:
              - link "Find a Real Estate Agent" [ref=e905] [cursor=pointer]:
                - /url: /a/property/agent
          - list [ref=e906]:
            - listitem [ref=e907]:
              - generic [ref=e908]:
                - img "Motors icon" [ref=e910]
                - link "Motors" [ref=e912] [cursor=pointer]:
                  - /url: /a/motors
            - listitem [ref=e913]:
              - link "Cars for sale" [ref=e915] [cursor=pointer]:
                - /url: /a/motors/cars
            - listitem [ref=e916]:
              - link "Motorbikes for sale" [ref=e918] [cursor=pointer]:
                - /url: /a/motors/motorbikes-home
            - listitem [ref=e919]:
              - link "Buying & selling advice" [ref=e921] [cursor=pointer]:
                - /url: https://www.trademe.co.nz/c/motors/feature-articles
            - listitem [ref=e922]:
              - link "Dealer news & info" [ref=e924] [cursor=pointer]:
                - /url: https://www.trademe.co.nz/c/dealership/best-practices
            - listitem [ref=e925]:
              - link "Sell my car" [ref=e927] [cursor=pointer]:
                - /url: /a/sell-my-car
          - list [ref=e928]:
            - listitem [ref=e929]:
              - generic [ref=e930]:
                - img "Jobs icon" [ref=e932]
                - link "Jobs" [ref=e935] [cursor=pointer]:
                  - /url: /a/jobs
            - listitem [ref=e936]:
              - link "Browse job categories" [ref=e938] [cursor=pointer]:
                - /url: /a/jobs/categories
            - listitem [ref=e939]:
              - link "Careers advice" [ref=e941] [cursor=pointer]:
                - /url: https://www.trademe.co.nz/c/jobs/careers-advice
            - listitem [ref=e942]:
              - link "JobSmart" [ref=e944] [cursor=pointer]:
                - /url: /jobs/smart/
            - listitem [ref=e945]:
              - link "Advertisers advice" [ref=e947] [cursor=pointer]:
                - /url: https://www.trademe.co.nz/c/employer/advertisers-advice
            - listitem [ref=e948]:
              - link "Salary guide" [ref=e950] [cursor=pointer]:
                - /url: /a/jobs/salary-guide
          - list [ref=e951]:
            - listitem [ref=e952]:
              - generic [ref=e953]:
                - img "Services icon" [ref=e955]
                - link "Services" [ref=e957] [cursor=pointer]:
                  - /url: /a/services
            - listitem [ref=e958]:
              - link "Trades" [ref=e960] [cursor=pointer]:
                - /url: /a/services/trades
            - listitem [ref=e961]:
              - link "Domestic services" [ref=e963] [cursor=pointer]:
                - /url: /a/services/domestic-services
            - listitem [ref=e964]:
              - link "Events & entertainment" [ref=e966] [cursor=pointer]:
                - /url: /a/services/events-entertainment
            - listitem [ref=e967]:
              - link "Health & wellbeing" [ref=e969] [cursor=pointer]:
                - /url: /a/services/health-wellbeing
            - listitem [ref=e970]:
              - link "List my services" [ref=e972] [cursor=pointer]:
                - /url: https://www.tmsandbox.co.nz/Sell/Category.aspx?rfm=1&group=SERVICES&mcat=9334-
          - list [ref=e973]:
            - listitem [ref=e974]:
              - generic [ref=e975]:
                - img "Community icon" [ref=e977]
                - link "Community" [ref=e981] [cursor=pointer]:
                  - /url: /a/community
            - listitem [ref=e982]:
              - link "Help" [ref=e984] [cursor=pointer]:
                - /url: https://ctech.help-sandbox.trademe.kiwi/hc/en-us/
            - listitem [ref=e985]:
              - link "Announcements" [ref=e987] [cursor=pointer]:
                - /url: https://www.trademe.co.nz/c/community/announcements
            - listitem [ref=e988]:
              - link "Trust & safety" [ref=e990] [cursor=pointer]:
                - /url: https://www.trademe.co.nz/c/trust-safety/home
            - listitem [ref=e991]:
              - link "Seller information" [ref=e993] [cursor=pointer]:
                - /url: https://www.trademe.co.nz/c/marketplace/buying-and-selling
            - listitem [ref=e994]:
              - link "Help center community" [ref=e996] [cursor=pointer]:
                - /url: https://help.trademe.co.nz/hc/en-us/community/topics
      - generic [ref=e997]:
        - group "Affiliate links" [ref=e1000]:
          - list [ref=e1001]:
            - listitem [ref=e1002]:
              - link "Trade Me Insurance" [ref=e1003] [cursor=pointer]:
                - /url: https://www.trademeinsurance.co.nz/?utm_source=trademe_preview&utm_medium=NavBar&utm_content=TradeMe&utm_campaign=TradeMe_header
            - listitem [ref=e1004]:
              - link "homes.co.nz" [ref=e1005] [cursor=pointer]:
                - /url: https://homes.co.nz/?utm_source=trademe_preview&utm_medium=navbar&utm_campaign=homepage
            - listitem [ref=e1006]:
              - link "MotorWeb" [ref=e1007] [cursor=pointer]:
                - /url: https://www.motorweb.co.nz/?referral=trademe&utm_source=trademe_preview&utm_medium=text-link&utm_content=free-vehicle-reports&utm_campaign=trademe-header
            - listitem [ref=e1008]:
              - link "CarExpert" [ref=e1009] [cursor=pointer]:
                - /url: https://www.carexpert.co.nz/?referral=trademe&utm_source=trademe_preview&utm_medium=text-link&utm_content=CarExpert&utm_campaign=trademe-header
            - listitem [ref=e1010]:
              - link "Holiday Houses" [ref=e1011] [cursor=pointer]:
                - /url: https://www.holidayhouses.co.nz/?utm_source=trademe_preview&utm_medium=navbar&utm_campaign=homepage
            - listitem [ref=e1012]:
              - link "FindSomeone" [ref=e1013] [cursor=pointer]:
                - /url: https://www.findsomeone.co.nz/?utm_source=trademe_preview&utm_medium=navbar&utm_campaign=homepage
        - generic [ref=e1014]:
          - generic [ref=e1015]: © 2026 Trade Me Limited
          - list [ref=e1018]:
            - listitem [ref=e1019]:
              - link "Desktop site" [ref=e1021] [cursor=pointer]:
                - /url: https://www.tmsandbox.co.nz/MyTradeMe/Default.aspx?rfm=1
            - listitem [ref=e1022]:
              - link "About Us" [ref=e1024] [cursor=pointer]:
                - /url: https://www.trademe.co.nz/c/community/about-us
            - listitem [ref=e1025]:
              - link "Careers" [ref=e1027] [cursor=pointer]:
                - /url: https://www.trademe.co.nz/c/community/careers-at-trade-me
            - listitem [ref=e1028]:
              - link "News" [ref=e1030] [cursor=pointer]:
                - /url: https://www.trademe.co.nz/c/
            - listitem [ref=e1031]:
              - link "Advertise" [ref=e1033] [cursor=pointer]:
                - /url: https://www.trademe.co.nz/c/advertising/advertising
            - listitem [ref=e1034]:
              - link "Privacy policy" [ref=e1036] [cursor=pointer]:
                - /url: https://ctech.help-sandbox.trademe.kiwi/hc/en-us/articles/360007001832-Privacy-policy
            - listitem [ref=e1037]:
              - link "Terms & conditions" [ref=e1039] [cursor=pointer]:
                - /url: https://ctech.help-sandbox.trademe.kiwi/hc/en-us/articles/360007001532-Trade-Me-site-terms-and-conditions
            - listitem [ref=e1040]:
              - link "Contact Us" [ref=e1042] [cursor=pointer]:
                - /url: https://ctech.help-sandbox.trademe.kiwi/hc/en-us/articles/360046907671-Contact-our-Support-team
          - list [ref=e1048]:
            - listitem [ref=e1049]:
              - link "Follow Trade Me on Tiktok" [ref=e1050] [cursor=pointer]:
                - /url: https://www.tiktok.com/@trademe_nz
                - img "Follow Trade Me on Tiktok" [ref=e1052]
            - listitem [ref=e1054]:
              - link "Follow Trade Me on Instagram" [ref=e1055] [cursor=pointer]:
                - /url: https://www.instagram.com/trademe_nz
                - img "Follow Trade Me on Instagram" [ref=e1057]
            - listitem [ref=e1059]:
              - link "Follow Trade Me on Facebook" [ref=e1060] [cursor=pointer]:
                - /url: https://www.facebook.com/TradeMe
                - img "Follow Trade Me on Facebook" [ref=e1062]
            - listitem [ref=e1064]:
              - link "Follow Trade Me on LinkedIn" [ref=e1065] [cursor=pointer]:
                - /url: https://www.linkedin.com/company/trade-me
                - img "Follow Trade Me on LinkedIn" [ref=e1067]
            - listitem [ref=e1069]:
              - link "Follow Trade Me on YouTube" [ref=e1070] [cursor=pointer]:
                - /url: https://www.youtube.com/user/trademe
                - img "Follow Trade Me on YouTube" [ref=e1072]
```

# Test source

```ts
  155 |     await homePage.search('guitar');
  156 | 
  157 |     // Verify navigation to results page
  158 |     await page.waitForURL(/.*search.*/);
  159 |   });
  160 | });
  161 | 
  162 | test.describe('Search Functionality - Negative Scenarios', () => {
  163 |   let homePage: HomePage;
  164 |   let searchResultsPage: SearchResultsPage;
  165 | 
  166 |   test.beforeEach(async ({ page }) => {
  167 |     homePage = new HomePage(page);
  168 |     searchResultsPage = new SearchResultsPage(page);
  169 |     await homePage.goto();
  170 |   });
  171 | 
  172 |   test('@regression @search TC-07: Search with empty input shows appropriate behavior', async ({ page }) => {
  173 |     await homePage.searchInput.fill('');
  174 |     await homePage.searchButton.click();
  175 | 
  176 |     // Should either stay on homepage or show validation
  177 |     // Verify we don't get an error page
  178 |     const url = page.url();
  179 |     expect(url).not.toContain('error');
  180 |   });
  181 | 
  182 |   test('@regression @search TC-08: Search with special characters only returns no results gracefully', async ({ page }) => {
  183 |     await homePage.search('@#$%^&*()');
  184 | 
  185 |     // Should show no results message or handle gracefully
  186 |     const hasNoResults = await searchResultsPage.hasNoResultsMessage();
  187 |     const hasResults = await searchResultsPage.hasResults();
  188 | 
  189 |     // Either no results message or actually no results
  190 |     expect(hasNoResults || !hasResults).toBeTruthy();
  191 |   });
  192 | 
  193 |   test('@regression @search TC-09: Search with extremely long string handles gracefully', async ({ page }) => {
  194 |     const longString = 'a'.repeat(500);
  195 |     await homePage.search(longString);
  196 | 
  197 |     // Should not crash or show error page
  198 |     expect(page.url()).not.toContain('error');
  199 |   });
  200 | 
  201 |   test('@regression @search TC-10: Search with non-existent terms shows no results message', async ({ page }) => {
  202 |     await homePage.search('xyzabc123nonexistentitem999');
  203 | 
  204 |     const hasNoResults = await searchResultsPage.hasNoResultsMessage();
  205 |     expect(hasNoResults).toBeTruthy();
  206 | 
  207 |   });
  208 | });
  209 | 
  210 | test.describe('Search Functionality - Edge Cases', () => {
  211 |   let homePage: HomePage;
  212 |   let searchResultsPage: SearchResultsPage;
  213 | 
  214 |   test.beforeEach(async ({ page }) => {
  215 |     homePage = new HomePage(page);
  216 |     searchResultsPage = new SearchResultsPage(page);
  217 |     await homePage.goto();
  218 |   });
  219 | 
  220 | 
  221 |   test('@regression @search TC-11: Search with mixed case returns case-insensitive results', async ({ page }) => {
  222 |     await homePage.search('HoUse');
  223 | 
  224 |     const hasResults = await searchResultsPage.hasResults();
  225 |     expect(hasResults).toBeTruthy();
  226 |   });
  227 | 
  228 |   test('@regression @search TC-12: Search with accents works correctly', async ({ page }) => {
  229 |     await homePage.search('Mānuka Honey');
  230 | 
  231 |     // Should handle special characters without error
  232 |     expect(page.url()).not.toContain('error');
  233 |   });
  234 | });
  235 | 
  236 | test.describe('Search Functionality - Non-Functional Tests', () => {
  237 |   let homePage: HomePage;
  238 |   let searchResultsPage: SearchResultsPage;
  239 | 
  240 |   test.beforeEach(async ({ page }) => {
  241 |     homePage = new HomePage(page);
  242 |     searchResultsPage = new SearchResultsPage(page);
  243 |     await homePage.goto();
  244 |   });
  245 | 
  246 |   test('@performance @search TC-13: Search results load within acceptable time', async ({ page }) => {
  247 |     const startTime = Date.now();
  248 |     await homePage.search('house');
  249 |     await expect(
  250 |       searchResultsPage.listingCards.first()
  251 |     ).toBeVisible({ timeout: 10000 });
  252 |     const endTime = Date.now();
  253 | 
  254 |     const loadTime = endTime - startTime;
> 255 |     expect(loadTime).toBeLessThan(3000); // 3 seconds threshold
      |                      ^ Error: expect(received).toBeLessThan(expected)
  256 |   });
  257 | 
  258 |   test.describe('Search Filters - House Search', () => {
  259 | 
  260 |     test('@regression @filters TC-14: Category dropdown filters results', async ({ page }) => {
  261 |       await homePage.search('house');
  262 | 
  263 |       // Wait for results
  264 |       await expect(
  265 |         searchResultsPage.listingCards.first()
  266 |       ).toBeVisible({ timeout: 10000 });
  267 | 
  268 |       // Open category dropdown
  269 |       await page.locator('text=Category').click();
  270 | 
  271 |       // Select category option
  272 |       await page.locator('text=Trade Me Property').first().click();
  273 | 
  274 | 
  275 |       // Verify results still exist
  276 |       await expect(
  277 |         searchResultsPage.listingCards.first()
  278 |       ).toBeVisible({ timeout: 10000 });
  279 | 
  280 |       // Optional URL verification
  281 |       await expect(
  282 |         page.locator('tm-search-header-heading')).toBeVisible();
  283 | 
  284 |     });
  285 | 
  286 |     test('@regression @filters TC-15: Location dropdown filters results', async ({ page }) => {
  287 |       await homePage.search('house');
  288 | 
  289 |       await expect(
  290 |         searchResultsPage.listingCards.first()
  291 |       ).toBeVisible({ timeout: 10000 });
  292 | 
  293 |       // Open location dropdown
  294 |       await page.locator('text=All Locations').click();
  295 |       await page.getByLabel('Region').selectOption({
  296 |         label: 'Auckland'
  297 |       });
  298 |       await page.getByLabel('District').selectOption({
  299 |         label: 'North Shore'
  300 |       });
  301 | 
  302 |       await page.getByRole('button', {
  303 |         name: /View .* results?/i
  304 |       }).click();
  305 | 
  306 |       // Assert the button with both classes contains "North Shore"
  307 |       await expect(page.locator('button:has-text("North Shore")')).toBeVisible({ timeout: 3000 });
  308 |     });
  309 | 
  310 |     test('@regression @search TC-16: Clicking X clears the search bar', async ({ page }) => {
  311 | 
  312 |       // Navigate to homepage
  313 |       await homePage.goto();
  314 | 
  315 |       // Enter search text
  316 |       await homePage.searchInput.fill('house');
  317 | 
  318 |       // Verify text entered
  319 |       await expect(homePage.searchInput).toHaveValue('house');
  320 | 
  321 |       // Click clear/X button
  322 |       await page.locator('[aria-label="Clear input"]').click();
  323 | 
  324 |       // Assert search input is now empty
  325 |       await expect(homePage.searchInput).toHaveValue('');
  326 |     });
  327 | 
  328 |     test('@regression @filters TC-17: Condition dropdown filters results', async ({ page }) => {
  329 |       await homePage.search('house');
  330 | 
  331 |       await expect(
  332 |         searchResultsPage.listingCards.first()
  333 |       ).toBeVisible({ timeout: 10000 });
  334 | 
  335 |       // Open New & Used dropdown
  336 |       await page.locator('text=New & Used').click();
  337 | 
  338 |       await expect(
  339 |         page.getByRole('button', {
  340 |           name: /View .* results?/i
  341 |         })
  342 |       ).toBeVisible({
  343 |         timeout: 10000
  344 |       });
  345 | 
  346 |       // Select Used
  347 |       await page.locator('tg-radio-item').filter({
  348 |         hasText: 'Used only'
  349 |       }).click();
  350 | 
  351 |       await page.getByRole('button', {
  352 |         name: /View .* results?/i
  353 |       }).click();
  354 | 
  355 | 
```
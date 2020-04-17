daily_smarty_api = [
  {
    "posts": [
      {
        "title": "Title One",
        "url_for_api": "https://www.titleOne.com"
      },
      {
        "title": "Title Two",
        "url_for_api": "https://www.titleTwo.com"
      },
      {
        "title": "Title Three",
        "url_for_api": "https://www.titleThree.com"
      },
      {
        "title": "Title Four",
        "url_for_api": "https://www.titleFour.com"
      }
    ]
  }
]

print(daily_smarty_api[0]['posts'][:2])
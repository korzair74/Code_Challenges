import requests
from bs4 import BeautifulSoup
from inflection import titleize

def title_generator(links):
    titles = []

    def post_formatter(url):
        if 'title/' in url:
            url = url.split('/')[-1]
            url = url.replace('-', ' ')
            url = titleize(url)
            titles.append(url)


    for link in links:
        if link.get('href') == None:
            continue
        else:
            post_formatter(link.get("href"))


    return titles


r = requests.get('https://www.imdb.com/list/ls020043828')
soup = BeautifulSoup(r.text, 'html.parser')
links = soup.find_all('a')
titles = title_generator(links)

for link in links:
    print(link)





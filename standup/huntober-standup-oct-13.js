function domainName(url){
    url = url.replace('http://','').replace('www.','').replace('https://','').split('.')
    return url[0]
  }


  
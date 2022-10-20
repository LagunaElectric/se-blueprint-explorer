def ToDict(xml):
  root = xml.getroot()
  response={}
  for child in root:
      if child.tag not in response:
          response[child.tag]=[]
      dic={}
      for child2 in child:
            dic[child2.tag]=child2.text
      response[child.tag].append(dic)
  return(response)
  
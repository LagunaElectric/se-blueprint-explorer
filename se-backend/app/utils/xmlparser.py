from urllib import response
import xml.etree.ElementTree as ET

def ToDict(xml):
  root = xml.getroot()
  response={}
  for child in root:
      if child.tag not in response:
          response[child.tag]=[]
      dic={}
      for child2 in child:
          if child2.tag not in dic:
              dic[child2.tag]=child2.text
      response[child.tag].append(dic)
  return(response)
  
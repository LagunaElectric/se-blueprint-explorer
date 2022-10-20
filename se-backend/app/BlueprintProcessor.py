from os import listdir
from utils.xmlparser import ToDict
from xml.etree import ElementTree as ET
from objects.blueprint import Blueprint

class BlueprintProcessor:
    
    def __init__(self, blueprint_path: str=None) -> None:
        self.blueprint_path = blueprint_path
        if self.blueprint_path is not None: 
            self.data = self.read_xml()
        else: 
            self.data = {}
    
    def read_xml(self) -> dict:
        xml = ET.parse(self.blueprint_path)
        return ToDict(xml)

    def find_conveyor(self):
        pass

''' For Test and Debug purposes '''
if __name__ == "__main__":

    test = BlueprintProcessor('/Users/fredericbaumeister/PersonalProjects/collabs/se-blueprint-explorer/se-backend/test_data/source/test.xml')
    print(type(test.data))
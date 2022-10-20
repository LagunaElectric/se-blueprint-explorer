import unittest
from BlueprintProcessor import BlueprintProcessor


class test_BlueprintProcessor(unittest.TestCase):

    def test_xml_parser(self):
        b = BlueprintProcessor()
        result = b.data
        self.assertIsInstance(result, dict)
    

if __name__ == '__main__':
    unittest.main()
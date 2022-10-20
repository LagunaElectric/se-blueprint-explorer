import pandas as pd
from block import Block


class BlueprintProcessor:
    raw_xml: list[str] = []

    def __main__(self):
        pass

    def read_xml(self) -> pd.DataFrame:

        xml: str = ''

        for line in self.raw_xml:
            xml = xml + line

        xml_dataframe = pd.read_xml('../test_data/source/bp.sbc')

        print(xml_dataframe)

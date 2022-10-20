from app.BlueprintProcessor import BlueprintProcessor

bp = BlueprintProcessor()

with open('./test_data/source/bp.sbc', 'r', errors='ignore') as bp_file:
    bp.raw_xml = bp_file.readlines()

bp.read_xml()

from dataclasses import dataclass

@dataclass
class Conveyor:
    
    def __init__(self, connections: list) -> None:
        self.connections = connections           # List of nodes connected to the node   
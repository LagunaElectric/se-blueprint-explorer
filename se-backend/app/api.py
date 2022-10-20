from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import Dict, Any


app = FastAPI()

origins = [
    "https://localhost:3000",
    "http://localhost:3000",
    "localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/", tags=["root"])
async def read_root() -> dict:
    print('ran!')
    return {"message": "Welcome to your new API!"}


@app.post("/test")
def read_xml(xml: Dict[Any, Any]):
    print(xml)
    return {"message": "Got it!"}

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm

from app.auth.authentication import create_access_token, verify_token

auth_router = APIRouter()

@auth_router.post("/login")
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    # Temporary implementation until we have a MySQL implementation 
    raise HTTPException(
        status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
        detail="Database connection pending. Will validate credentials once MySQL is integrated."
    )
